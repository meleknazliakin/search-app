import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import List from '../../components/list/list';
import Search from '../../components/search/search';

const Dashboard = () => {
  const [inputText, setInputText] = useState('');

  return (
    <Container>
      <Row>
        <Search setInputText={setInputText}/>
      </Row>
      <Row>
        <List inputText={inputText} />
      </Row>
    </Container>
  )
}

export default Dashboard;