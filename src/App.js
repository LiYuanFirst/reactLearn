import React, {Component}from 'react';
import './App.css';
import Cmp1 from './Cmp1'
import {connect} from 'react-redux';
import {SET_NAME,ADD_AGE} from './action'

class App extends Component {
  fn(){
    this.props.setName('laotou')
  }
  fn2(){
    this.props.addAge(26)
  }
  render(){

    return (
      <div className="App">
        
        <header className="App-header">
        <button onClick={this.fn.bind(this)}>改名字</button>
        <button onClick={this.fn2.bind(this)}>增加age</button>
          <div>{this.props.name}</div>
            <Cmp1></Cmp1>
        </header>
      </div>
    )
  }
}

export default connect(function(state,props){
  console.log(state)
  // return {
  //   ...state,
  //   name:[props.name, state.name]
  // }
  return state.user
},{
  setName(newName){
    return{
      type:SET_NAME,
      name:newName
    }
  },
  addAge(num){
    return{
      type:ADD_AGE,
      age:num
    }
  }

})(App);
