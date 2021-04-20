import React from "react"

class ConditionalPractice extends React.Component {

    constructor() {
        super()

        this.state = {
            isLoggedIn: false
        }

        this.logIn = this.logIn.bind(this)
    }

    logIn() {

        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
        
    }

    render() {

        let buttonText = this.state.isLoggedIn ? 'Log Out' : 'Log In'

        return (

            <div>
                {this.state.isLoggedIn ? <h1>Welcome User!</h1> : <h1>You are not Logged in</h1>}
                <button onClick={this.logIn}>{buttonText}</button>
            </div>
        )

    }
}

export default ConditionalPractice
