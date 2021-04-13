import React from 'react'
import App from './App'
import {Provider} from 'react-redux'
import store from '../redux/store'
import '../assets/style.css'

function Main()
{
	return <Provider store={store}>
		<App/>
	</Provider>
}
export default Main