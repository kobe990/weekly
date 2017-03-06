import React from 'react'

import $ from 'jquery'

class MenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {selected: false}
  }

  handleClick() {
    this.props.cancleClickState()
    this.setState({selected: true})
  }

  render() {
    let selected = this.state.selected == true ? 'selected' : ''
    let isPullIcon = this.props.isPullIcon == true ? 'pull-icon' : ''
    return (
      <li className={selected + ' ' +isPullIcon} onClick={this.handleClick.bind(this)}>
        {this.props.text}
      </li>
    )
  }
}

class Menus extends React.Component {

  constructor(props) {
    super(props)
    this.count = 0
    this.state = {expand: false}
  }

  componentWillUpdate() {

  }

  expandAndFold() {
    if((++this.count)%2 == 1) {
      this.setState({expand: true})
    }
    else {
      this.setState({expand: false})
    }
  }

  cancleClickState() {
    for(var prop in this.refs)
    {
      this.refs[prop].setState({selected: false})
    }
  }

  render() {
    let menus = ['首页', '赠言', '涂鸦墙', '关于我们'].map((text, index) => {
      return <MenuItem key={ index } text={ text } ref={ 'menu' + index } cancleClickState={ this.cancleClickState.bind(this) }></MenuItem>
    })

    let menuExpand = this.state.expand === true ? 'menu-expand' : ''
    return (
      <ul className={ "header-menus " + menuExpand }>
        <li className='pull-icon' onClick={ this.expandAndFold.bind(this) }></li>
        { menus }
      </ul>
    )
  }
}

class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="header">
        <img className="logo" src="images/logo.PNG"></img>
        <Menus></Menus>
      </div>
    )
  }
}

module.exports = Header