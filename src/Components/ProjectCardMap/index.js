import ProjectCard from "../ProjectCard";

function ProjectCardMap({ projects }) {
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridColumnGap: 10,
        gridRowGap: 20,
      }}
    >
      {projects.map((project) => (
        <ProjectCard
          id={project.id}
          title={project.title}
          desc={project.desc}
        />
      ))}
    </div>
  );
}

export default ProjectCardMap;
