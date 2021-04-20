import React from 'react'

import Joke from './components/Joke'
import ClassPractice from './components/ClassPractice'
import ClassPractice2 from './components/ClassPractice2'
import ClassPractice3 from './components/ClassPractice3'
import FillMurray from './components/FillMurray'
import TodoComponent from "./components/TodoComponent"
import Counter from './components/Counter'
import ConditionalPractice from './components/ConditionalPractice'
import ApiPractice from './components/ApiPractice'
import FormPractice from './components/FormPractice'
import FormPractice2 from './components/FormContainer'
import UseState from './components/UseState'

import jokesData from './data/jokesData'
import './index.css'


class App extends React.Component {

    
    constructor(){
        super()
        this.state = {
            answer: "Yes"
        }


    }

    render() {

        const jokeComponents =  jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

        return (
            <div>
                <Counter />
            </div>
        )

    }
}

export default App