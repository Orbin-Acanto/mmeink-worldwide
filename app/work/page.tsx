"use client";

import WorkFilter from "@/components/work/WorkFilter";
import WorkHero from "@/components/work/WorkHero";
import ProjectsGrid from "@/components/work/ProjectsGrid";
import { useState } from "react";
import { projects } from "@/data";
import HomeCTA from "@/sections/HomeCTA";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <WorkHero />
      <WorkFilter
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <ProjectsGrid projects={filteredProjects} />
      <HomeCTA
        backgroundImage="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Ready to Create Magic?"
        subtitle="Let's Work Together"
        description="Transform your vision into an unforgettable experience. Our team is ready to bring your event to life."
        primaryButton={{
          text: "Get Started",
          href: "/contact",
        }}
      />
    </div>
  );
}
