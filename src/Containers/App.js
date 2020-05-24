import React from 'react';
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
//import { robots } from './Robots';
import './App.css';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render (){
    const filteredRobots = this.state.robots.filter(robot => robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase()));
    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>
    }
    else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox onSearchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }
}

export default App;
