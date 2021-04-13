import React from 'react'
import Columns from './Columns'
import Cell from './Cell'
import {useSelector} from 'react-redux'
function Table()
{


	let [start,setstart]=React.useState(0)
	let [pp,setpp]=React.useState(25)
	// pp is per page
	const p1=e=>{
		if(e.code==="Enter")
		{
			setstart(start+pp)
		}


		if(e.code==="Escape")
		{
			setstart(0)
		}
		
		console.log(e.code)
		
	}	

	React.useEffect(function(){
		window.addEventListener("keydown",p1)
	},[])

	let state=useSelector(s=>s)
	let a=state.data.posts
	let cols=[]
	if(a.length>0)
	{
		cols=Object.keys(a[0])
	}
	return <div>
		{/*<div className="search">
			<table cellPadding={0} cellSpacing={0}>
				<thead>
					<Columns a={cols} />
				</thead>
			</table>
		</div>*/}

		<div className="content">
			<table cellPadding={0} cellSpacing={0}>
				<thead>
					<Columns a={cols} />
				</thead>
					<tbody>
						{a.slice(start,start+pp).map(item=>
								<tr>
									{cols.map(key=>
										<Cell 
										clickable={true} 
										information={{name:"lalit",email:"lalir@gmail.com"}}
										>{item[key]}</Cell>
									)}	
								</tr>
						)}
					</tbody>
			</table>
		</div>

	</div>
}

export default Table;