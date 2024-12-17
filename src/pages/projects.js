import React, { useEffect } from "react";

import Layout from "../components/layout";
import ProjectCard from "../components/projectCard";
import Seo from "../components/seo";
import UseFetchProjects from "../hooks/useFetchProjects";

const Projects = () => {
  const { fetchProjects, reposList, isLoading } = UseFetchProjects();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Layout>
      <Seo title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <ProjectCard isLoading={isLoading} reposList={reposList} />
    </Layout>
  );
};

export default Projects;
