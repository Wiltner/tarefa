// pages/Projects.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default Projects;const projects = [
  {
    title: 'Bot para retirar fundo das imagens',
    description: 'Criado um bot no telegram que retira o fundo das imagens, utilizando a linguaem python e a biblioteca telepot.',
    link: 'https://github.com/Wiltner/embed24a4'
  },
  {
    title: 'Calculadora',
    description: 'Primeiro projeto realizado em programação, uma calculadora simples feita em javascript, html e css.',
    link: 'https://github.com/Wiltner/Calculadora'
  }
];

function Projects() {
  return (
    <Container id="projects">
      <h2>Projetos</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Link href={project.link} target="_blank" rel="noopener noreferrer">Ver no GitHub</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

