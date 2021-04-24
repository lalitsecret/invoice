import React from 'react'
import Panel1 from './Panel1'
import Popup from './Popup'
import {useSelector} from 'react-redux'
function Filters()
{

	let a=useSelector(s=>s.data)
	let col="title"
	return <div>
		<Panel1 col={col} data={a}/>
	</div>
}
export default Filters