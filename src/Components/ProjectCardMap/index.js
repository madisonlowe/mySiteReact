import ProjectCard from "../ProjectCard";
import "./ProjectCardMap.css";

function ProjectCardMap({ projects }) {
  return (
    <div className="pcm-div">
      {projects.map((project) => (
        <ProjectCard
          id={project.id}
          title={project.title}
          desc={project.desc}
          src={project.src}
          github={project.github}
        />
      ))}
    </div>
  );
}

export default ProjectCardMap;
