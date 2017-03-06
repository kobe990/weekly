import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.js'
import ArticleList from './articleList.js'
import Detail from './detail.js'
import jQuery from 'jquery'

var $ = jQuery

ReactDOM.render(<Header />, document.getElementById("j-header"))
ReactDOM.render(<ArticleList src="mock/articleItems" />, document.getElementById("j-content"))

if(!location.hash) {
  location.hash = '#list'
}
window.addEventListener('hashchange', () => {
  if(location.hash == '#list') {
    ReactDOM.render(<ArticleList src="mock/articleItems" />, document.getElementById("j-content"))
  }
  else if(location.hash == '#detail') {console.log('detail')
    ReactDOM.render(<Detail></Detail>, document.getElementById("j-content"))
  }
})

var req = $.ajax({
  url: 'test',
  cache: false,
  dataType: 'html',
  timeout: 1000 * 6
})

req.done(function(res) {
  console.log("请求成功")
})

req.always(function() {
  console.log("正在请求")
})

req.fail(function() {
  console.log("请求超时")
})
