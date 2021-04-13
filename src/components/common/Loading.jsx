import React,{Suspense} from 'react'

function Loading(props)
{
	return <Suspense fallback={<i className="fa fa-spin fa-spinner"></i>}>{props.children}</Suspense>
}
export default Loading