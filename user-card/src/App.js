import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      users: {
        "login": "josiahroa18",
        "id": 35950476,
        "node_id": "MDQ6VXNlcjM1OTUwNDc2",
        "avatar_url": "https://avatars0.githubusercontent.com/u/35950476?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/josiahroa18",
        "html_url": "https://github.com/josiahroa18",
        "followers_url": "https://api.github.com/users/josiahroa18/followers",
        "following_url": "https://api.github.com/users/josiahroa18/following{/other_user}",
        "gists_url": "https://api.github.com/users/josiahroa18/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/josiahroa18/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/josiahroa18/subscriptions",
        "organizations_url": "https://api.github.com/users/josiahroa18/orgs",
        "repos_url": "https://api.github.com/users/josiahroa18/repos",
        "events_url": "https://api.github.com/users/josiahroa18/events{/privacy}",
        "received_events_url": "https://api.github.com/users/josiahroa18/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Josiah Roa",
        "company": "Lambda School",
        "blog": "josiahroa.com",
        "location": "Denver, CO",
        "email": null,
        "hireable": null,
        "bio": "Passionate Web Developer",
        "public_repos": 52,
        "public_gists": 0,
        "followers": 36,
        "following": 38,
        "created_at": "2018-01-30T06:50:23Z",
        "updated_at": "2020-03-10T03:27:52Z"
    },
      followers: []
    }
  }

  // componentDidMount(){
  //   // My Github Data
  //   axios.get('https://api.github.com/users/josiahroa18')
  //   .then(res => {
  //     this.setState({
  //       users: res.data
  //     })
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })

  //   // Followers Data
  //   axios.get('https://api.github.com/users/josiahroa18/followers')
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

  render(){
    return(
      <div className='App'>
        <UserCard user={this.state.users}/>
        {this.state.followers && this.state.followers.map(user => {
          return <UserCard key={user.id} user={user}/>
        })}
      </div>
    );
  }
}

export default App;
