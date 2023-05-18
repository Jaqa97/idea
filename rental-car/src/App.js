import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import { Container } from '@material-ui/core';

function App() {
    return (
    <Container>
      <Button variant="contained" color="primary">
        Hola Mundo!
      </Button>
    </Container>
    );
}

export default App;
