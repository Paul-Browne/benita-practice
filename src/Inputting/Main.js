import React, { Component } from "react";
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';


class Inputting extends Component {
	  state = {
	    userInput: ""
	  };


	render() {
	  return (
	    <div>
	    	<p>Hello world!</p>

	    	<InputComponent update={(value) => this.setState({userInput:value})} />

	    	{this.state.userInput ?
	    		<OutputComponent text={this.state.userInput} />
	    		:
	    		null
	    	}

	    </div>
	  );
	}
}


export default Inputting;
