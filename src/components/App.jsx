import React from 'react'
import {useDispatch} from 'react-redux'
import Layout from './common/Layout'
function App()
{	

	let dispatch=useDispatch()
	const p1=e=>{
		// alert(e.code)
		if(e.code==="Escape")
		{
			dispatch({type:"drawer close event"})
		}
	}

	React.useEffect(() =>{
	
		window.addEventListener("keyup",p1)
	
	},[])
	

	return <div>
			<Layout/>
	</div>
}

export default App