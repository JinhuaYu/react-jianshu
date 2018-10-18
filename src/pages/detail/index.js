import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  DetailWrapper,
  Article,
  Title,
  Author,
  Content
} from './style'

class Detail extends PureComponent {
  render () {
    const detail = this.props
    return (
      <DetailWrapper>
        
        <Article>
          <Title>{detail.title}</Title>

          <Author>
            <a className="avatar" href="">
              <img src={detail.author.get('avatar')} alt=""/>
            </a>
            <div className="info">
              <span className="name">
                <a href="">{detail.author.get('name')}</a>
              </span>
              <div className="meta">
                <span className="publish-time">2018.09.22 23:31</span>
                <span className="wordage">字数 1090</span>
                <span className="views-count">阅读 445</span>
                <span className="comments-count">评论 5</span>
                <span className="likes-count">喜欢 12</span>
              </div>
            </div>
          </Author>

          <Content 
            dangerouslySetInnerHTML={{__html: detail.content}}         
          />

        </Article>

      </DetailWrapper>
    )
  }

  componentDidMount () {
    this.props.getArticlData()
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  author: state.getIn(['detail', 'author']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
  getArticlData () {
    dispatch(actionCreators.getDetail())
  }
})

export default connect(mapState, mapDispatch)(Detail)