import React from 'react'
import {decide,_range} from '../helpers'
import {useSelector} from 'react-redux'
function App()
{
	let a=useSelector(state1=>state1.data.products)


	let [f1,setf1]=React.useState({column:"",val1:"",val2:"",type:"",status:false})
	let [f2,setf2]=React.useState({column:"",values:[],status:false})

	const handleChange=e=>{
		// alert(e.target.value)
		let value=e.target.value
		setf1({...f1,})
	}

	const apply=() =>{
		if(f1.column && f1.val1&& f1.type)
		{
			setf1({...f1,status:true})
			let b= decide(a,f1)
			console.log(b)
		}

	}

	const apply2=() =>{
		// inut id 
		// textraea imviceref1,invoice002,....
		if(f2.column && f2.values)
		{
			setf2({...f2,status:true,values:f2.values})

			let b= _range(a,f2)
			console.log(b)
		}

	}

	

	return <div>
		<div>
			<p>Filters1</p>
			<input 
			value={f1.column} 
			onChange={e=>setf1({...f1,column:e.target.value})} 
			placeholder="field" />

			<select onChange={e=>setf1({...f1,type:e.target.value})}>
				<option value="gt">{">"}</option>
				<option value="lt">{"<"}</option>
				<option value="lte">{"<="}</option>
				<option value="gte">{">="}</option>
				<option value="eq">{"=="}</option>
				<option value="neq">{"!="}</option>
				<option value="between">between</option>
			</select>
			<input value={f1.val1} onChange={e=>setf1({...f1,val1:e.target.value})} placeholder="val1"/>
			<input value={f1.val2} onChange={e=>setf1({...f1,val2:e.target.value})} placeholder="val2"/>
			<button onClick={apply}>Apply</button>
		</div>

		<div>
			<p>filters</p>
			<input placeholder="column" value={f2.column} onChange={e=>setf2({...f2,column:e.target.value})} />
			<textarea onChange={e=>setf2({...f2,values:e.target.value})} value={f2.values}  cols="60" rows="3">
			</textarea>
			<button onClick={apply2}>Apply2</button>
		</div>

		<div>
			{/*<h1>all data {b.length} / {a.length}</h1>*/}
			<table >
				<thead>
					<tr>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{a.map(item=>
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>{item.description}</td>
							<td>{item.old}</td>
							<td>{item.new}</td>
							<td>{item.rating}</td>
							<td>{item.discount}</td>
							<td>{item.tags}</td>
							<td>{item.image}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	</div>
}

export default App