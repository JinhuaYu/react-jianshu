import React, { Component } from 'react'
import {
  TopicWrapper,
  TopicItem
} from '../style'

class Topic extends Component {
  render () {
    return (
      <TopicWrapper>
        <TopicItem>
          <img src="https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt=""/>
          <span>故事</span>
        </TopicItem>        
      </TopicWrapper>
    )
  }
}

export default Topic