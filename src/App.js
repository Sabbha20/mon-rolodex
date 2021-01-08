import React, { Component } from 'react';

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component"

import './App.css';
import './components/search-box/search-box.styles.css'



class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
    };
  }  

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters : users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

 render(){
   const {monsters, searchField } = this.state;
   const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <input 
      className = 'search'
      type='search' 
      placeholder='search monsters' 
      onChange={this.handleChange} />

  { /* <SearchBox 
      placeholder = 'search monsters' 
      handleChange = {this.handleChange} 
  />  */}
      <CardList monsters = {filteredMonsters} />     
    </div>
  );
 }
}

export default App;
