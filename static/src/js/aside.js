import React from 'react'
import ReactDOM from 'react-dom'
class Aside extends React.Component{
  render() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    )
  }
}
/*
ReactDOM.render(React.createElement(aside), document.getElementById("j-aside"))*/

ReactDOM.render(<Aside></Aside>, document.getElementById("j-content"))
