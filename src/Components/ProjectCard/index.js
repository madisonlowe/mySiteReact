import "./ProjectCard.css";

function ProjectCard({ title, desc, src, github }) {
  return (
    <div className="card-div">
      <img src={src} alt={title} className="card-img" />
      <div className="card-desc">
        <p>
          <b>{title}</b> / <a href={github}>Code</a>
        </p>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
