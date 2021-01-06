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
                            <h3><span className='bold'>{a.recipe.label}</span></h3>
                            <p><span className='bold'>Calories:</span> {a.recipe.calories}</p>
                            <p><span className='bold'>Source: </span><a href={a.recipe.url} className='links'>{a.recipe.source}</a></p>
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