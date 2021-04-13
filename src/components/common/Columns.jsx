import React from 'react'

function Columns(props)
{
	let a=props.a

	return <tr>
		{a.map(item=><th>{item}</th>)}
	</tr>
}

export default Columns