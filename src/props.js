import React from 'react'

// function Props(props) {
//   return (
//     <div>
//         <h2>Hi {props.name}</h2>
//         <h2>this is your id{props.id}</h2>
//     </div>



//   )
//  }
  
   class Props extends React.Component {
    render() {
      return (
        <div> <h2>Hi {this.props.name}</h2>
        <h2>this is your id{this.props.id}</h2></div>
      )
    }
  }
  


export default Props

 


