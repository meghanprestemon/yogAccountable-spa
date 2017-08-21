import { combineReducers } from 'redux'
import navbar from './navbar'
import home from './home'
import footer from './footer'

const rootReducer = combineReducers({
  navbar,
  home,
  footer
})

export default rootReducer;
