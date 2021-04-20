import React from "react"

function handleClick() {
    console.log("I was clicked")
}

function sayCheese() {
    console.log("🧀")
}

function FillMurray() {
    return (
        <div>
            <img onMouseOver={sayCheese} src="https://www.fillmurray.com/200/100" alt='FillMurray'/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default FillMurray
