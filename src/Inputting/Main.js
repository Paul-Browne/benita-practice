import React from 'react';

import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

class Inputting extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    userInput: null
	  };
	}

	render() {
	  return (
	    <div>
	    	<p>Hello world!</p>

	    	<InputComponent update={(value) => this.setState({userInput:value})} />
	    	
	    	{this.state.userInput ? 
	    		<OutputComponent text={this.state.userInput} />
	    		:
	    		<h1>Nothing yet!!</h1>
	    	}

	    </div>
	  );
	}
}


export default Inputting