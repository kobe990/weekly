import React from 'react'

import $ from 'jquery'

class Detail extends React.Component{
  constructor(props) {r
    super(props)
    this.state = {articleContent: null}
  }

  render() {
    return (
      <div className="articleDetail">
        <div className="title">文章标题</div>
        <div classDate="date">2016</div>
        <div className="content">文章内容</div>
      </div>
    )
  }
}

module.exports = Detail
