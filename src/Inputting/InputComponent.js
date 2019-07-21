import React from 'react';
function InputComponent(props) {
  return (
  	<div>
  		<input onChange={(event) => props.update(event.target.value)} />
  	</div>
  );
}
export default InputComponent