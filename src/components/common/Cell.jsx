import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {_information} from '../../helpers'
function Cell(props)
{
	let clickable=props.clickable
	let information=props.information
	let dispatch=useDispatch()
	let state=useSelector(s=>s)

	// console.log(state)
	const handleClick=e=>{
		console.clear()
		// console.log(props.val)
		// console.log(state.mainData.users,"id",props.val)
		const information=_information(state.mainData.users,"id",+props.val)
		
		dispatch({type:"drawer open with information from cell",payload:information})	
	}
	if(clickable)
	{
		return <td onClick={handleClick}>{props.children}</td>
	}	
	else
	{
		{/*return <td>{props.children} not alowed</td>*/}
		return <td>{props.children}</td>
	}
}

export default Cell