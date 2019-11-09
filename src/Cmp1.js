import React, { Component } from 'react';
import {connect} from  'react-redux'
class Cmp1 extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            users:[]
        }
    }
    async componentDidMount() {
        let res = await fetch('/data/1.json');
        let data = await res.json();
        console.log(data)
        this.setState({
            'users': data
        })
    }
    render() {
        return (
          <ul>
            <div>{this.props.name}{this.props.age}</div>
            {this.state.users.map((user, index)=>(
              <li key={index}>{user.user}</li>
            ))}
          </ul>

        )
    }
}
export default connect((state,props)=>{
  return state.company
})(Cmp1);