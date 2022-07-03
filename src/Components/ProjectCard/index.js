function ProjectCard({ title, desc }) {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        background: "aquamarine",
      }}
    >
      <p>{title}</p>
      <p>{desc}</p>
    </div>
  );
}

export default ProjectCard;
