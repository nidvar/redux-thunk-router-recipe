import {combineReducers} from 'redux';

const initial_state = {}

const recipeReducer = (state=initial_state, action)=>{
    if(action.type==='GRAB_RECIPES'){
        initial_state.recipe = action.payload
        const x = {...state, recipe: action.payload}
        return x
    }
    return state
}

const both = combineReducers({
    list_of_recipes: recipeReducer
})

export default both