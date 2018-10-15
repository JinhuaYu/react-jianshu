import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { BackTop } from './style'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends PureComponent {

  handleScrollTop () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <div className="banner">
            <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4446/78fbac5a833f2fc90b8a71eb8f7a1d801563cfbe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          </div> 
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop> : null }        
      </HomeWrapper>
    )
  }

  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents();
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData () {
    dispatch(actionCreators.getHomeData())
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleBackTopShow(true))
    } else {
      dispatch(actionCreators.toggleBackTopShow(false))
    }
  }
})

export default connect(mapState , mapDispatch)(Home)