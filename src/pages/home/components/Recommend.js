import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  RecommendWrap,
  RecommendItem
} from '../style'

class Recommend extends Component {
  
  render () {
    const { list } = this.props 
    return (
      <RecommendWrap>
      {
        list.map((item) => {
          return (
            <RecommendItem key={item.get('id')}>
              <a href={item.get('url')}>
                <img src={item.get('img')} alt=""/>
              </a>
            </RecommendItem>
          )
        })
      }
      </RecommendWrap>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend)