const initial_state = {}

const recipeReducer = (state=initial_state, action)=>{
    if(action.type==='GRAB_RECIPES'){
        const x = {...state, recipe: action.payload}
        return x
    }

    return state
}

export default recipeReducer