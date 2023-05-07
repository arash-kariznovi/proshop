import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
      <footer>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Proshop</Col>
        </Row>
      </footer>
    </Container>
  )
}

export default Footer
