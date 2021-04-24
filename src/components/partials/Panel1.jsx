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

	let values=""
	if(state["leftFiltersList"]["filter1"])
	{
		if(state["leftFiltersList"]["filter1"]["right"])
		{
			values=state["leftFiltersList"]["filter1"]["right"]
			if(values&&values.length>0)
			{
				values=values.map(x=><span className="chip">{x} <span>X</span></span>)
			}

		}
	}
	return <div>
		<button onClick={openPopup}>{props.col}</button>
		<br/>
		<div className="scroll-x-20vw">
			{values}
		</div>

	</div>
}
export default Panel1