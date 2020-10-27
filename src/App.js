import React from 'react';
import './App.css';
import Quote from './component/Quote';
import axios from 'axios';

/*const quotes =
  {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: 'Homer Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
  }*/

class App extends React.Component{
  state = {
    Quote : ''
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => res.json())
    .then(data => {
      this.setState({ Quote : data[0] })
    })
  }
  render() {
  return (
    <div className="App">
      <h1>Quotes des simpson</h1>
      <input type='button' value='New quote' onClick={this.fetchData}/>
      <Quote Quote = {this.state.Quote} />
    </div>
  );
}
}
export default App;
