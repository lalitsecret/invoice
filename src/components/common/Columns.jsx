import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

function Columns(props)
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()

	let {theadFilters}=state


	const handleChange= (e,ob) =>{
		let value=e.target.value
		theadFilters=theadFilters.map(x=>x.name===ob.name?({...x,value:value}):x)		
		dispatch({type:"theadFilters typing",payload:theadFilters})
	} 
	return <tr>
		{theadFilters.map(item=>
		<th>
			<input onChange={e=>handleChange(e,item)} placeholder={item.name} value={item.value} />
		</th>)}
	</tr>
}

export default Columns