import { useState } from 'react';
import Project from "../../assets/Project";
import Row from 'react-bootstrap/Row'
import 'animate.css/animate.min.css';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Note Taker',
      description: 'Note Taker',
      title: 'Express.js,Heroku',
      gitHub: 'https://github.com/Zeusjr101/Note-Taker',
      live: 'https://intense-basin-11006-e18676eac097.herokuapp.com/notes'
    },
    {
      name: 'Social-Network-api',
      description: 'Mongo DB',
      gitHub: "https://github.com/Zeusjr101/Social-Network-api",
      title: 'Social-Network-api',
      live: 'https://github.com/Zeusjr101/Social-Network-api'
    },
    {
      name: 'get-fitter',
      description: 'Node.js, Express.js,Handlebars.js',
      gitHub: "https://github.com/crockevin/get-fitter",
      title: "herokuapp",
      live: ''
    },
    {
      name: 'Employee-Tracker',
      description: 'node.js, Mysql2, inquire',
      gitHub: "https://github.com/Zeusjr101/Employee-Tracker1",
      title: "Employee-Tracker",
      live: 'https://github.com/Zeusjr101/Employee-Tracker1'
    },
    {
      name: 'passwordGenerator',
      description: 'JavaScript ',
      gitHub: "https://github.com/Zeusjr101/My-Awesome-Password-Generator",
      title: "My Awesome Password Generator",
      live: 'https://zeusjr101.github.io/My-Awesome-Password-Generator/'
    },
    {
      name: '',
      description: '',
      gitHub: "",
      title: "",
      live: ''
    },

  ]);

return (
  <Row>
    {projects.map((project, idx) => (
      <Project
        project={project}
        key={"project" + idx}
      />
    ))}
  </Row>
);
}

export default Portfolio;
