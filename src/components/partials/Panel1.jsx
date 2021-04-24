import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function Panel1(props)
{

	let dispatch=useDispatch()
	let state=useSelector(state1=>state1)
	const openPopup=e=>{

		let data=state.data
		let column="title"
		data=data.map(item=>item[column])
		dispatch({type:"popup open",filter_name:"filter1",filter_data:data})
	}
	return <div>
		<button onClick={openPopup}>{props.col}</button>
		<br/>
		<textarea  cols="35" rows="2"></textarea>

	</div>
}
export default Panel1