import data from './data'
import {get_intial_headers} from '../helpers'
const initialState={
	data:data,
	drawer:{information:{},status:false},
	theadFilters:get_intial_headers(data.posts)
}




function reducer(state=initialState,action)
{
	console.log(action)
	switch(action.type)
	{
		case "drawer open with information from cell":
			return {
				...state,
				drawer:{information:action.payload,status:true}
			}
		case "drawer close event":
			return {
				...state,
				drawer:{information:{},status:false}

			}
		case "theadFilters typing":
			return {
				...state,
				theadFilters:action.payload
			}
		default:
			return state
	}
}


export default reducer