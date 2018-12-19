import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Works from './components/works/work';
import Contact from './components/contact/contact';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <About />
      <Resume />
      <Works />

      </div>
    );
  }
}

export default App;
