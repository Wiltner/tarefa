import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid className="bg-dark text-white text-center py-3">
      <p>Conecte-se comigo:</p>
      <a href="https://github.com/Wiltner" className="text-white mx-2" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/matheuswiltner/" className="text-white mx-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </Container>
  );
}

export default Footer;