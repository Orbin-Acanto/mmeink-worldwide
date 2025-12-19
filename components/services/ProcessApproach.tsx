import { processSteps, VISIBILITY_CONFIG } from "@/data";
import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const ProcessApproach: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            processSteps.forEach((_, index) => {
              setTimeout(() => {
                setActiveStep(index);
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || 600;
    };
    resizeCanvas();

    const initParticles = () => {
      particlesRef.current = [];

      for (let i = 0; i < VISIBILITY_CONFIG.particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };
    initParticles();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < VISIBILITY_CONFIG.maxConnectionDistance) {
            const opacity =
              (1 - distance / VISIBILITY_CONFIG.maxConnectionDistance) *
              VISIBILITY_CONFIG.lineOpacity;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(104, 50, 147, ${opacity})`;
            ctx.lineWidth = VISIBILITY_CONFIG.lineWidth;
            ctx.stroke();
          }
        }
      }

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          VISIBILITY_CONFIG.particleSize,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(104, 50, 147, ${VISIBILITY_CONFIG.particleOpacity})`;
        ctx.fill();
      });

      if (mouse.x > 0 && mouse.y > 0) {
        particles.forEach((particle) => {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < VISIBILITY_CONFIG.mouseConnectionDistance) {
            const opacity =
              (1 - distance / VISIBILITY_CONFIG.mouseConnectionDistance) *
              VISIBILITY_CONFIG.mouseLineOpacity;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 188, 212, ${opacity})`;
            ctx.lineWidth = VISIBILITY_CONFIG.mouseLineWidth;
            ctx.stroke();
          }
        });

        ctx.beginPath();
        ctx.arc(
          mouse.x,
          mouse.y,
          VISIBILITY_CONFIG.mouseCursorSize,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(0, 188, 212, ${VISIBILITY_CONFIG.mouseCursorOpacity})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black min-h-[60vh] flex items-center justify-center py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: VISIBILITY_CONFIG.canvasOpacity }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: VISIBILITY_CONFIG.gradientOpacity }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8a4bb8] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-white mb-6 tracking-tight drop-shadow-2xl">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple via-cyan to-purple-light">
              Process
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional events
          </p>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gray-800/50 overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-purple via-[#8a4bb8] to-purple transition-all duration-1000 ease-out"
                style={{
                  width: activeStep >= 0 ? "100%" : "0%",
                  backgroundSize: "200% 100%",
                  animation: activeStep >= 0 ? "shimmer 3s infinite" : "none",
                }}
              />
            </div>

            <div className="grid grid-cols-4 gap-4 lg:gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center"
                  style={{
                    opacity: activeStep >= index ? 1 : 0,
                    transform:
                      activeStep >= index
                        ? "translateY(0) scale(1)"
                        : "translateY(40px) scale(0.8)",
                    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  <div className="relative mb-6">
                    {activeStep >= index && (
                      <div
                        className="absolute inset-0 rounded-full bg-purple opacity-30"
                        style={{
                          animation:
                            "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                          animationDelay: `${index * 0.2}s`,
                        }}
                      />
                    )}

                    <div
                      className="relative w-[120px] h-[120px] rounded-full flex items-center justify-center shadow-2xl"
                      style={{
                        background: "linear-gradient(135deg, #683293, #8a4bb8)",
                        boxShadow:
                          activeStep >= index
                            ? "0 20px 60px rgba(104, 50, 147, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
                            : "0 10px 30px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <span className="text-4xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      opacity: activeStep >= index ? 1 : 0,
                      transition: "opacity 0.6s ease-out 0.3s",
                    }}
                  >
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-8">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="flex gap-4"
              style={{
                opacity: activeStep >= index ? 1 : 0,
                transform:
                  activeStep >= index ? "translateX(0)" : "translateX(-40px)",
                transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <div className="shrink-0 flex flex-col items-center">
                <div className="relative">
                  {activeStep >= index && (
                    <div
                      className="absolute inset-0 rounded-full bg-purple opacity-30"
                      style={{
                        animation:
                          "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                      }}
                    />
                  )}

                  <div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #683293, #8a4bb8)",
                      boxShadow:
                        activeStep >= index
                          ? "0 15px 40px rgba(104, 50, 147, 0.6)"
                          : "0 5px 20px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="w-0.5 flex-1 min-h-[60px] mt-4 bg-gray-800/50 overflow-hidden">
                    <div
                      className="w-full bg-linear-to-b from-purple to-[#8a4bb8] transition-all duration-700"
                      style={{
                        height: activeStep > index ? "100%" : "0%",
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="flex-1 pt-2">
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessApproach;
