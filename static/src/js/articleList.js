import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Detail from './detail.js'

class ArticleItem extends React.Component {

  renderDetail() {
    location.hash = '#detail'
  }

  render() {
    return (
      <div className="articleItem">
        <a className="title" onClick={this.renderDetail.bind(this)}>{ this.props.title }</a>
        <div className="intro">{ this.props.intro }</div>
      </div>
    )
  }
}

class ArticleList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {articles: null};
  }

  componentDidMount() {
    $.get(this.props.src, (data) => {
      this.setState({articles: data.articles})
      this.setState({articles: $.parseJSON(data).articles})
    })
  }

  render() {
    let articles = this.state.articles
    let articleItems = null
    if(articles != null) {
      articleItems = articles.map((article,index) => {
        return (
          <ArticleItem key={ index } title={ article.title } intro={ article.intro }></ArticleItem>
        )
      })
    }
    return (
      <div className="articleList">
        { articleItems }
      </div>
    )
  }
}

module.exports = ArticleList
//ReactDOM.render(React.createElement(articleList, {src:"mock/articleItems"}), document.getElementById("j-articleList"))
//ReactDOM.render(<ArticleList src="mock/articleItems" />, document.getElementById("j-content"))