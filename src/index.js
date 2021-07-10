import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div>
            <h1 style={{backgroundColor: 'red', color: 'white', border: "1px solid blue", padding: '5px'}}>Hello World!</h1>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)