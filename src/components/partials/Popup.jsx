import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

function Popup(props)
{

	let dispatch=useDispatch()
	let state=useSelector(state1=>state1)

	return <div className={state.popup.status?'popup active':'popup'}>
			<button className="close" onClick={e=>dispatch({type:"popup close"})}>X</button>
			<div>	
				{props.children}
			</div>
	</div>
}
export default Popup