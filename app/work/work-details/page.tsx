import CTASection from "@/components/project-details/CTASection";
import EventDetailsSection from "@/components/project-details/EventDetailsSection";
import ProjectAboutSection from "@/components/project-details/ProjectAboutSection";
import RelatedProjectsSection from "@/components/project-details/RelatedProjectsSection";
import WorkHero from "@/components/work/WorkHero";
import { featuredSlides, RelatedProject } from "@/data";

export default function WorkDetails() {
  return (
    <>
      <WorkHero
        videoSrc="/temp_video.mp4"
        title="Client"
        highlightedWord="Name"
        subtitle="Three decades of unforgettable events, exceptional experiences, and lasting impressions"
      />
      <ProjectAboutSection description="Core Water wanted to make a splash with the launch of their new flavored line—and our friends at Pop Lab Marketing tapped us to bring that vision to life. The result was a bold, immersive pop-up experience in NYC that showcased the brand's vibrant new identity through touch points that blended design, tech, and fun. <br/>For Elevate, monday.com's signature user conference, a main stage became the forum for their largest clients to share their success stories. A dedicated floor of demos and experiences included every hardware feature imaginable to demonstrate use cases and product interactivity, including a VR station showcasing the future of the software along with highlighting the company's sustainability efforts." />
      <EventDetailsSection images={featuredSlides} />
      <RelatedProjectsSection projects={RelatedProject} />
      <CTASection
        title="Let's Create Something Extraordinary"
        subtitle="Ready to bring your vision to life? Get in touch with our team and let's make it happen."
        primaryButton={{
          text: "Start a Project",
          href: "/contact",
        }}
      />
    </>
  );
}
