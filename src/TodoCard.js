import React from 'react'

// *2 style (code above function)
const buttonStyle = {
    backgroundColor: "teal",
    color: "white",
    fontSize: "14px",
    padding: "5px 30px",
    borderRadius: "5px",
    margin: "5px",
    cursor: "pointer"
}



// *destructuring - es6 created a way to not repeat so much
// ! solution create a variable const {invoke}
// *{title, clickToRemove, index} = props (are props to <li>components</li>)
// *can now remove repetition of props. 

function TodoCard(props) {

    const {title, clickToRemove, index} = props
    return (
// *no fuction can return two elements rule - jsx must have one parent element
// *solution wrap inside a div or in this case <li></li>
// <li>{props.title}</li>
// {/* <button onClick={()=> {props.clickToRemove}}>Remove</button> */}

// *component is now returning one element
// *() invokes function
// *() pass in an arguement (index of this particular item and pass it back to paren)
// !(props.index)
        
        // <li>{props.title}
        //   <button onClick={()=> {props.clickToRemove(props.index)}}>Remove</button>
        // </li>

// *styling difference camelCase  
// *1 way to style 
// *{/* <li style={{backgroundColor: "white", color: "#61DAFB" }}> */}

// *2 way to style to use do (inline styling) button style = {buttonStyle}

        <li>{title}
          <button style={ buttonStyle } onClick={()=> {clickToRemove(index)}}>Remove</button>
        </li>
    )
}

export default TodoCard