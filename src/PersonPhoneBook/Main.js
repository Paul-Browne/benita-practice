import React, { Component } from "react";
import people from "./people";
import PeopleComponent from "./PeopleComponent";

class PersonPhoneBook extends Component {
    
    state = {
        people: people
    };

    removePerson = (person) => {    	
    	// create a copy of the array
    	var newArrayOfPeople = [...this.state.people];

    	// get the index of the person who is to be removed
    	var index = newArrayOfPeople.indexOf(person);

    	// remove them
    	newArrayOfPeople.splice(index, 1);

    	// update the state
    	this.setState({
    		people: newArrayOfPeople
    	})
    };	

    render() {
        return (
            <div>
            	{this.state.people.map(person => (
            		<PeopleComponent person={person} key={person.id} removeSelf={this.removePerson} />
            	))}
	    	</div>
        );
    }
}


export default PersonPhoneBook;