 import axios from 'axios'
import React, { Component } from 'react'
 
 export default class GetEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((event)=>{
            console.log(event)
            this.setState({posts:event.data})
        })
        
    }
    render() {
      const {posts}=this.state
     return (
       <div>
       Hi
        {posts.map((po)=>
          <div key={po.id}>{po.body}</div>
        
        )}
       </div>
     )
   }
 }
 