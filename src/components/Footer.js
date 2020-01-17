import React from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <hr/>
        <Container>
          <a href="https://www.linkedin.com/in/lucas-di-az-fiol-4038b5185"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/lucasDF99"><FontAwesomeIcon icon={faGithub}  /></a>
        </Container>
      </footer>
    )
  }
}

export default Footer;