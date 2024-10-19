import React from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import eu from '../assets/eu.jpeg';

function About() {
  return (
    <Container id="about">
      <Row>
        <Col md={4}>
          <Image src={eu} roundedCircle className="w-75" />
        </Col>
        <Col md={8}>
          <h2>Sobre Mim</h2>
          <p>Jovem que sempre foi apaixonado por praticar esportes desde muito novo. Sempre aprendendo que trabalho em equipe é algo essencial para se alcançar o topo, mesmo que as peças que se juntem para formar a equipe sejam fortes sozinhas também. De raciocício lógico rápido, de personalidade séria e sempre buscando a melhor forma de realizar as tarefas, encontrei na programação aquilo que quero fazer e estudar para ter meu sustento e deixar minha marca no mundo (desde que seja longe do front-end rsrs).</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Contato</h2>
          <p>Para entrar em contato comigo, para saber mais sobre mim ou para outras coisas, preencha o formulário abaixo!</p>
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

export default About;