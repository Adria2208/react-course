function Joke(props) {
    return (
        <div>
            <p>Question: {props.question}</p>
            <p>Punch line: {props.punchLine}</p>
            <hr></hr>
        </div>
    )
}

export default Joke