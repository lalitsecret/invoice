import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

function Drawer()
{
	let drawer=useSelector(state1=>state1.drawer)
	let dispatch=useDispatch()
	// information.status

	if(drawer.information)
	{

	let cols=Object.keys(drawer.information).slice(0,5)

	return <div className={drawer.status?"drawer active":"drawer"}>
		<button onClick={e=>dispatch({type:"drawer close event"})}>X</button>
		{JSON.stringify(drawer.information)}
	</div>
	}
	else
	{
		return <div className={drawer.status?"drawer active":"drawer"}>
		<button onClick={e=>dispatch({type:"drawer close event"})}>X</button>
			<h1>nothing to show</h1>
	</div>
	}
}
export default Drawer