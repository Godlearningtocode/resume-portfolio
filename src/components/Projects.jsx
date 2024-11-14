const Projects = () => {
  const projects = [
    { name: "Project 1", url: "http://project1.com" },
    { name: "Project 2", url: "http://project2.com" },
  ];

  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
