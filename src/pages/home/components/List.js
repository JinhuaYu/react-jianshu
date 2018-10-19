import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
import { 
  ListItem,
  LoadMore 
} from '../style'

class List extends PureComponent {
  render () {
    const { list, getMoreList, page } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
                <ListItem className='have-img'>
                  <div className='wrap-img'>
                    <img src={item.get('imgUrl')} alt=""/>
                  </div>
                  <div className='content'>
                    <div className='title'>{item.get('title')}</div>
                    <p className='abstract'>              
                    {item.get('desc')}
                    </p>
                  </div>
                </ListItem>
              </Link>     
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