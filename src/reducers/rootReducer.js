import {combineReducers} from 'redux';
import recipeReducer from './recipeReducer'

const reducers = combineReducers({
    recipeReducer:recipeReducer
})

export default reducers