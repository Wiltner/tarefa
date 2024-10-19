import React from 'react';
import { Container, Row, Col, Image, Form, Button, Card } from 'react-bootstrap';
import eu from '../assets/eu.jpeg';

const projects = [
  {
    title: 'Calculadora',
    description: 'Calculadora feita em JavaScript, HTML e CSS',
    link: 'https://github.com/Wiltner/Calculadora'
  },
  {
    title: 'Bot Telegram',
    description: 'Bot que retira fundo de fotos feito em Python',
    link: 'https://github.com/Wiltner/embed24a4'
  }
];

function Home() {
  return (
    <Container id="about" className="mt-5">
      <Row className="mb-4">
        <Col md={4}>
          <Image src={eu} roundedCircle className="w-75" />
        </Col>
        <Col md={8}>
          <h2>Sobre Mim</h2>
          <p style={{ textAlign: 'justify' }}>
            Jovem que sempre foi apaixonado por praticar esportes desde muito novo. Sempre aprendendo que trabalho em equipe é algo essencial para se alcançar o topo, mesmo que as peças que se juntem para formar a equipe sejam fortes sozinhas também. De raciocício lógico rápido, de personalidade séria e sempre buscando a melhor forma de realizar as tarefas, encontrei na programação aquilo que quero fazer e estudar para ter meu sustento e deixar minha marca no mundo (desde que seja longe do front-end rsrs).
          </p><br /><br />
          <p style={{ textAlign: 'justify' }}>
            Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Faculdade Senac Jaraguá do Sul, onde estou aprendendo a programar em Java, Python, JavaScript, HTML, CSS, SQL, entre outras linguagens e tecnologias. Estou sempre buscando aprender mais e mais, seja por cursos online, documentações ou até mesmo em projetos pessoais.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2>Projetos</h2>
          <Row>
            {projects.map((project, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Card.Link href={project.link} target="_blank" rel="noopener noreferrer">Ver no GitHub</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      
      <Row className="mt-5">
        <Col>
          <h2>Contato</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Seu nome" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Seu email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Sua mensagem" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;