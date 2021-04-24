import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Top from '../partials/Top'
import Left from '../partials/Left'
import Right from '../partials/Right'
import Drawer from '../partials/Drawer'
import Popup from '../partials/Popup'
function Layout()
{

	let state=useSelector(s=>s)
	let dispatch=useDispatch()

	let {activePopupFilterName,leftFiltersList}=state

	// activePopupFilterName
	// leftFiltersList

	const [selected,setSelected]=React.useState("")
	const [search,setsearch]=React.useState("")

	const p1=() =>{
		
		let rightFilteredData=state.leftFiltersList[activePopupFilterName]["right"]
		let leftFilteredData=state.leftFiltersList[activePopupFilterName]["left"].filter(x=>x.toString().includes(search))	

		let allDataAfter=[...rightFilteredData,...leftFilteredData]
		let data={
			...state,
			leftFiltersList:{...leftFiltersList,[activePopupFilterName]:{
				left:state.leftFiltersList[activePopupFilterName]["left"],
				right:allDataAfter
			}}
		}	


		dispatch({type:"change_Filter",payload:data})

	}
	const p2=() =>{
		let data={
			...state,
			leftFiltersList:{...leftFiltersList,[activePopupFilterName]:{
				left:state.leftFiltersList[activePopupFilterName]["left"],
				right:[]
			}}
		}	
		
		dispatch({type:"change_Filter",payload:data})
	}
	const p3=() =>{
		let leftFilteredData=state.leftFiltersList[activePopupFilterName]["right"]
		let data={
			...state,
			leftFiltersList:{...leftFiltersList,[activePopupFilterName]:{
				left:state.leftFiltersList[activePopupFilterName]["left"],
				right:[...leftFilteredData,selected]
			}}
		}	

		dispatch({type:"change_Filter",payload:data})

	}
	const p4=() =>{
		let leftFilteredData=state.leftFiltersList[activePopupFilterName]["right"]
		let data={
			...state,
			leftFiltersList:{...leftFiltersList,[activePopupFilterName]:{
				left:state.leftFiltersList[activePopupFilterName]["left"],
				right:leftFilteredData.filter(x=>x!==selected)
			}}
		}	

		dispatch({type:"change_Filter",payload:data})
		
	}
	
	let popupContent=null

	const dndStyle={
		display:"flex",
	}
	const dndStyleOfItem={
		width:"100px",
		height:"50vh",
		overflow:"auto"
	}

	if(state.activePopupFilterName)
	{
		let a=state.leftFiltersList[state.activePopupFilterName].left
		let b=state.leftFiltersList[state.activePopupFilterName].right

		// console.log(a)
		// console.log(b)

		popupContent=<div className={state.popup.status?'popup active':'popup'}>
			<button className="close" onClick={e=>dispatch({type:"popup close"})}>X</button>
				
				<button>sort by  asc</button>
				<button>sort by  desc</button>
				<input value={search} onChange={e=>setsearch(e.target.value)} placeholder="filter by "/>

				<div className="dnd">
					<div  className="dnd-item1">
						{a
							.filter(item=>item.toString().includes(search))
							.filter(item=>b.some(x=>x===item)===false)
							.map(item=>
							<p 
							onClick={e=>setSelected(item)} 
							className={selected===item?'selected-p-in-popup':''}>{item}</p>
						)}
					</div>
					<div  className="dnd-item2">
						<button onClick={p1}> {">>"} </button>
						<button onClick={p2}> {"<<"} </button>
						<button onClick={p3}> {">"} </button>
						<button onClick={p4}> {"<"} </button>
					</div>
					<div  className="dnd-item3">
						{b.map(item=>
							<p onClick={e=>setSelected(item)} 
							className={selected===item?'selected-p-in-popup':''}>{item}</p>
						)}
					</div>
				</div>
			</div>
	}

	return <div>
			<Top/>
			<Left/>
			<Right/>
			<Drawer/>
			{popupContent}

	</div>
}
export default Layout