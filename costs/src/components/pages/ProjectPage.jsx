import React, { useState, useEffect } from 'react';

// router
import { useParams } from 'react-router-dom';

// css
import './ProjectPage.css';

const ProjectPage = (props) => {
  const data = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${data.id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setProject(json);
      })
      .catch((error) => console.log(error));
  }, [data.id]);

  return (
    <div>
      <h1>{project.name}</h1>
    </div>
  );
};

export default ProjectPage;
