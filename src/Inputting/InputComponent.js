import React from 'react';
const InputComponent = (props) => {
  return (
  	<div>
  		<input onChange={(event) => props.update(event.target.value)} />
  	</div>
  );
}
export default InputComponent;
