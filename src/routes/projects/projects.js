import ProjectCardMap from "../../Components/ProjectCardMap";
import projects from "../../data";

export default function Projects() {
  return (
    <main>
      <h1>Projects</h1>
      <ProjectCardMap projects={projects} />
    </main>
  );
}
