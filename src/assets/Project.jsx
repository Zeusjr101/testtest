import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col'

function Project({ project }) {
  return (
    <Col xs={12} md={6} lg={4} className="portfolio">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>
            {project.description}
          </Card.Text>
        </Card.Body>
        <Card.Body>  
            <Button href={`${project.gitHub}`} variant="secondary">GitHub</Button>
            <Button href={`${project.live}`}variant="secondary">Live App</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Project;