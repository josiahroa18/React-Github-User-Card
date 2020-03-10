import React from 'react';

function UserCard({user}){
    return(
        <div className='card'>
            <img src={user.avatar_url} alt={user.login}></img>
            <div className='text-container'>
                <h1>{user.name ? user.name : 'name not specified'}</h1>
                <h5>@{user.login}</h5>
                <p>Location: {user.location ? user.location : 'not specified'}</p>
                <p>Email: {user.email ? user.email : 'not specified'}</p>
                <p>Bio: {user.bio ? user.bio : 'not specified'}</p>
                <p>Followers: {user.followers ? user.followers : 'not specified'}</p>
                <p>Following: {user.following ? user.following : 'not specified'}</p>
            </div>
        </div>
    );
}

export default UserCard;