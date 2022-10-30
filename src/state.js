import React from 'react'

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value:"welcome to" , name:"react"};
    }
    componentWillMount(){
      alert("before render we use will mount")
    }
    render() {
      return (
        <div>
          <h2>It is {this.state.value} {this.state.name}</h2>
          <br></br>
          <button type='button' onClick={this.changecolor}>click me</button>
          <button type='button' onClick={this.delete}>delete </button>
          <div id='mydiv'></div>
        </div>
      
      );
    
    }
    changecolor =() => {
      this.setState({value:" this is new value"})
    }
    componentDidMount(){
      setTimeout(()=>{
        this.setState({value:"js"})
      },5000)
    }
    componentWillUpdate(){
      alert("update a new valu?")
    }
    componentDidUpdate(){
      document.getElementById("mydiv").innerHTML="new value updated" +this.state.value;
    }
    shouldComponentUpdate(){
      return true;
    }
    delete = () =>{
      this.setState({value:false,name:false})
    }
    componentWillUnmount(){
      alert("header deleted")
    }
  }

export default Clock  