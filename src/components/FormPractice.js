import React from "react"

class FormPractice extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: "",
            isFriendly: true,
            gender: '',
            favColor: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){

        const {name, value, type, checked} = event.target

        type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name]: value})

    }

    handleSubmit(){

     console.log('lol');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.firstName} name="firstName" placeholder='First Name' onChange={this.handleChange} />
                <br />
                <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange} />
                <br />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <textarea value={"Some default value"}/>
                <label>
                    <input 
                        type="checkbox" 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value='Male'
                        checked={this.state.gender === 'Male'}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value='Female'
                        checked={this.state.gender === 'Female'}
                        onChange={this.handleChange}
                    /> Female
                </label>
                <h2>You are a {this.state.gender}</h2>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name='favColor'
                >
                    <option value='red'>Redowo</option>
                    <option value='purple'>Purplowo</option>
                    <option value='yellow'>YellOWOWOOWOWOWO</option>
                </select>
                <h2>COLOR: {this.state.favColor}</h2>
                <button>Submit</button>
            </form>
        )
    }
}

export default FormPractice
