import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import data from '../../datas/clientInfo.json';
import Styles from './style.module.scss';

const List = ({ inputText }) => {
  let clientData = [];
  if (inputText === '') {
    clientData = [];
  } else {
    clientData = data.filter((item) => {
      return item.name.toLowerCase().startsWith(inputText.toLowerCase()) || item.policy.toLowerCase().includes(inputText.toLowerCase());
    });
  }

  return (
    <Container className={Styles.listContainer}>
      {clientData?.map((item) => (
        <div key={item.id} className={Styles.item}>
          <Row className={Styles.nameArea}><Col>{item.name}</Col></Row>
          <Row>
            <Col className={Styles.infoArea}>
              <img src="icon/phone.png" />
              <span>{item.phone}</span>
            </Col>
            <Col className={Styles.infoArea}>
            <img src="icon/email.jpg" />
              <span>{item.email}</span>
            </Col>
            <Col className={Styles.infoArea}>
            <img src="icon/file.png" />
            <span>{item.policy}</span></Col>
          </Row>
        </div>
      ))}
    </Container>
  )
}

export default List;