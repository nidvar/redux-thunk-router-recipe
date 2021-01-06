import React from 'react';
import {connect} from 'react-redux';
import get_recipe_action from '../actions/get_recipe_action';

class SearchBar extends React.Component {
    state={
        search:''
    }
    handleSubmit=(e)=>{
        e.preventDefault();



        this.setState({search:''})
    }
    handleChange=(e)=>{
        this.setState({search:e.target.value})
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.handleChange} value={this.state.search} />
                    <button>SEARCH</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return state
}

export default connect(mapStateToProps,{get_recipe_action: get_recipe_action})(SearchBar)