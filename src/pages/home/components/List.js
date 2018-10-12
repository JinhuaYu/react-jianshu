import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { 
  ListItem,
  LoadMore 
} from '../style'

class List extends Component {
  render () {
    const { list, getMoreList, page } = this.props
    return (    
      <div>
        {
          list.map((item, index) => {
            return (
              <ListItem className='have-img' key={index}>
                <a className='wrap-img'>
                  <img src={item.get('imgUrl')} alt=""/>
                </a>
                <div className='content'>
                  <a className='title' href="">{item.get('title')}</a>
                  <p className='abstract'>              
                  {item.get('desc')}
                  </p>
                </div>
              </ListItem>     
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>        
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page){
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List)