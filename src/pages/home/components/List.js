import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  ListItem 
} from '../style'

class List extends Component {
  render () {
    const { list } = this.props
    return (    
      <div>
        {
          list.map((item) => {
            return (
              <ListItem className='have-img' key={item.get('id')}>
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
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','articleList'])
})

export default connect(mapState, null)(List)