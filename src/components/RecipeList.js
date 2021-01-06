import React from 'react';
import {connect} from 'react-redux';
import get_recipe_action from '../actions/get_recipe_action';
import {NavLink} from 'react-router-dom';

class RecipeList extends React.Component{
    state={
        search:'',
    }
    componentDidMount(){
        console.log(this.props)
        if(this.props.recipeReducer.list_of_recipes.recipe==undefined){
            return null
        }else{
            this.setState({
                data:this.props.recipeReducer.list_of_recipes.recipe.hits
            })
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.get_recipe_action(this.state.search).then(a=>{
            this.setState({
                data:this.props.recipeReducer.list_of_recipes.recipe.hits
            })
        })

        this.setState({search:''})
    }
    handleChange=(e)=>{
        this.setState({search:e.target.value})
    }
    display_list = ()=>{
        if(this.state.data==undefined){
            return null
        }
        if(this.state.data.length<=0){
            return <p>Loading....</p>
        }else{
            console.log('the state: ',this.state.data)
            return this.state.data.map(a=>{
                return (
                    <div key={Math.random()} className='singleRecipefromlist'>
                        <NavLink to={`/${a.recipe.label}`} >
                            <img src={a.recipe.image} />
                            <h3 id='recipelabel'>{a.recipe.label}</h3>
                        </NavLink>
                    </div>
                )
            })
        } 
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.handleChange} value={this.state.search} />
                    <button>SEARCH</button>
                </form>
                <div className='recipelistbox'>
                    {this.display_list()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return state
}

export default connect(mapStateToProps, {get_recipe_action: get_recipe_action})(RecipeList);