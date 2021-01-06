import React from 'react';
import {connect} from 'react-redux';

const SingleDish = (props)=>{
    console.log(props.recipeReducer)
    const display=()=>{
        if(props.recipeReducer.list_of_recipes.recipe!=undefined){
            return props.recipeReducer.list_of_recipes.recipe.hits.map(a=>{
                if(`/${a.recipe.label}`==props.location.pathname){
                    return (
                        <div key={Math.random()}>
                            <img src={a.recipe.image} />
                            <p>{a.recipe.label}</p>
                            <p>{a.recipe.calories}</p>
                            <p>{a.recipe.label}</p>
                            <p>{a.recipe.label}</p>
                            <br />
                            <button onClick={()=>{props.history.push('/recipelist')}}>BACK</button>
                        </div>
                    )
                }
            })
        }
    }
    return (
        <div>
            <br />
            <br />
            {display()}
        </div>
    )
}

const mapStateToProps = (state) =>{
    console.log(state);
    return state
}

export default connect(mapStateToProps)(SingleDish)