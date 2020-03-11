import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import UserForm from './components/UserForm';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      mainUserName: '',
      mainUser: {},
      followers: []
    }
  }

  // componentDidMount(){
  //   // My Github Data
  //   axios.get(`https://api.github.com/users/${this.state.mainUserName}`)
  //   .then(res => {
  //     this.setState({
  //       mainUser: res.data
  //     })
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })

  //   // Followers Data
  //   axios.get(`https://api.github.com/users/${this.state.mainUserName}/followers`)
  //   .then(res => {
  //     res.data.forEach(user => {
  //       axios.get(`https://api.github.com/users/${user.login}`)
  //       .then(res => {
  //         this.setState({
  //           followers: [...this.state.followers, res.data]
  //         })
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  //     })
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

  // Runs when input has changed
  componentDidUpdate(prevProps, prevState){
    console.log('Component update');
    if(prevState.mainUserName !== this.state.mainUserName){
      // Reset followers state
      this.setState({
        followers: []
      })
      // Main user data
      axios.get(`https://api.github.com/users/${this.state.mainUserName}`)
      .then(res => {
        this.setState({
          mainUser: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })

      // Followers Data
      axios.get(`https://api.github.com/users/${this.state.mainUserName}/followers`)
      .then(res => {
        res.data.forEach(user => {
          axios.get(`https://api.github.com/users/${user.login}`)
          .then(res => {
            this.setState({
              followers: [...this.state.followers, res.data]
            })
          })
          .catch(err => {
            console.log(err);
          })
        })
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  // Causes state to change => component updates
  searchUser = userName => {
    this.setState({
      mainUserName: userName
    })
  }

  render(){
    return(
      <div className='App'>
        <header>
          <h1>GitHub Users</h1>
        </header>
        <UserForm searchUser={this.searchUser}/>
        <div className='card-container'>
          {this.state.mainUserName && <UserCard user={this.state.mainUser}/>}
          {this.state.followers && this.state.followers.map(user => {
            return <UserCard key={user.id} user={user}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
