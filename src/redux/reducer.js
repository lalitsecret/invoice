import data from './data'
import {get_intial_headers} from '../helpers'
const initialState={
	mainData:data,
	data:data.products,
	drawer:{information:{},status:false},
	theadFilters:get_intial_headers(data.products),
	leftFiltersList:{},
	popup:{information:{},status:false},
	activePopupFilterName:"",
	activePopupFilterOrder:true,

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

		// open popup logic starts
		// {
		// 	"filter1":[1,2,3,4,77,88],
		// 	"filter2":["invoice001","invoice002",],
		// }



		// invoice001          invoice001       
		// invoice002
		// invoice003
		// invoice003
		// invoice003    >>
		// invoice003    >
		// invoice003    << 
		// invoice003     <
		// open popup logic ends
		// need to have left and right for 1 type of filter
		// so left would have all the data
		// and right data for that filter would be only searhed sorted and added data from > >>


		case "popup open":
			return {
				...state,
				activePopupFilterName:action.filter_name,
				leftFiltersList:{
					...state.leftFiltersList,
					[action.filter_name]:{
							left:action.filter_data,
							right:[]
										}
					            },
				popup:{...state.popup,status:true},
			}

		case "change_Filter":
			return action.payload
		case "<<":
			return {
				...state,
				leftFiltersList:{
					...state.leftFiltersList,
					[action.name]:{
							...state.leftFiltersList[action.name]["left"],
							right:action.right
										}
				}
			}
		case ">>":
			return {
				...state,
				leftFiltersList:{
					...state.leftFiltersList,
					[action.name]:{
							...state.leftFiltersList[action.name]["left"],
							right:action.right
										}
				}
			}
			
		case "<":
			return {
				...state,
				leftFiltersList:{
					...state.leftFiltersList,
					[action.name]:{
							...state.leftFiltersList[action.name]["left"],
							right:action.right
										}
				}
			}
			
		case ">":
			return {
				...state,
				leftFiltersList:{
					...state.leftFiltersList,
					[action.name]:{
							...state.leftFiltersList[action.name]["left"],
							right:action.right
										}
				}
			}
			
			

			
		case "popup close":
					return {
						...state,
						popup:{...state.popup,status:false}
					}
		case "activePopupFilterOrder":
					return {
						...state,
						activePopupFilterOrder:action.payload
					}
					
		default:
			return state
	}
}


export default reducer