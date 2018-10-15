import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  RecommendWrap,
  RecommendItem
} from '../style'

class Recommend extends PureComponent {
  
  render () {
    const { list } = this.props 
    return (
      <RecommendWrap>
      {
        list.map((item) => {
          return (
            <RecommendItem key={item.get('id')}>
              <Link to={item.get('url')}>
                <img src={item.get('img')} alt=""/>
              </Link>
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