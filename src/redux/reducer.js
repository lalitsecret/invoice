import data from './data'

const initialState={
	data:data,
	drawer:{information:{},status:false},

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
		default:
			return state
	}
}


export default reducer