import axios from 'axios';

const get_recipe_action = (search_term)=>{
    return async (dispatch, getState) =>{
        const response = await axios.get(`https://api.edamam.com/search`,{
            params:{
                app_id:'2a6e4012',
                app_key:'58048ecfea71f2dce1e0b36f06e57ef4',
                q:search_term,
            }
        })
        console.log(response.data)
        dispatch({
            type:'GRAB_RECIPES',
            payload:response.data
        })
    }
}

export default get_recipe_action