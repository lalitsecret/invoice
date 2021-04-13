import React from 'react'
import {useDispatch} from 'react-redux'
function Cell(props)
{
	let clickable=props.clickable
	let information=props.information
	let dispatch=useDispatch()



	const handleClick=e=>{
		dispatch({type:"drawer open with information from cell",payload:JSON.stringify(information)})	
	}
	if(clickable)
	{
		return <td onClick={handleClick}>{props.children}</td>
	}	
	else
	{
		return <td>{props.children}</td>
	}
}

export default Cell