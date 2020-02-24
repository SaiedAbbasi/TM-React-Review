import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
	render() {
		return (
			<div>HelloOOoOO World!</div>
		)
	}
}

ReactDOM.render(
	// takes in an element and where to render to
	<App />,
	document.getElementById('app')
)