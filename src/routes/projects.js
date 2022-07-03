import ProjectCardMap from "../Components/ProjectCardMap/index.js";
import projects from "../data";

export default function Projects() {
  return (
    <main>
      <h1>Projects.</h1>
      <ProjectCardMap projects={projects} />
    </main>
  );
}
