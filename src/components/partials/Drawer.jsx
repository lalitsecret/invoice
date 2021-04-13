import React from 'react'
import {useSelector} from 'react-redux'

function Drawer()
{
	let drawer=useSelector(state1=>state1.drawer)

	// information.status

	return <div className={drawer.status?"drawer active":"drawer"}>
		<h1>
			{JSON.stringify(drawer.information)}
		</h1>
	</div>
}
export default Drawer