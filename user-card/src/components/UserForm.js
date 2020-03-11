import React from 'react';

class UserForm extends React.Component{
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.searchUser(this.state.input)
        this.setState({
            input: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>GitHub User</label>
                <input
                    placeholder='ex. josiahroa18'
                    onChange={this.handleChange}
                    value={this.state.input}
                ></input>
                <button>Submit</button>
            </form>
        );
    }
}

export default UserForm;