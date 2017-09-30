import React from 'react'

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newUser: {}
        }
        this.saveNewUser = this.saveNewUser.bind(this)
    this.updateNewUser = this.updateNewUser.bind(this)
    }
    updateNewUser(e) {
        let newUser = this.state.newUser
        newUser[e.target.name] = e.target.value
        this.setState({newUser: newUser})
    }
    saveNewUser(e) {
        e.preventDefault()
        console.log({e});
        console.log("the is a user", this.state.newUser);
    }
    render() {
        return (
            <form onSubmit= {this.saveNewUser}>
                <input className="Register-form" name="name" placeholder="name" type="text" onChange={(e) => this.updateNewUser(e)}/>
                <input className="Register-button" type="submit" />
            </form>
        )
    }
}
