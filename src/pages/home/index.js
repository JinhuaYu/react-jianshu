import React, { Component } from 'react'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4446/78fbac5a833f2fc90b8a71eb8f7a1d801563cfbe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
        </HomeLeft>
        <HomeRight>right</HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home