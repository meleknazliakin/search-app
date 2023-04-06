import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Styles from './style.module.scss';

const Search = ({ setInputText }) => {

  return (
    <Container className={Styles.searchContainer}>
      <Row className={Styles.search}>
        <Col>
          <img src="icon/search.png" />
          <input type="text" placeholder="SEARCH(Client Name / Policy Number)" onChange={(e) => { setInputText(e.target.value) }} /></Col>
      </Row>
    </Container>
  )
}

export default Search;