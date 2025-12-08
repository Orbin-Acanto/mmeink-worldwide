"use client";

import WorkFilter from "@/components/work/WorkFilter";
import WorkHero from "@/components/work/WorkHero";
import ProjectsGrid from "@/components/work/ProjectsGrid";
import { useState } from "react";
import { projects } from "@/data";

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
    </div>
  );
}
