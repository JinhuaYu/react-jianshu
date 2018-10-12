import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { 
  RecommendedAuthors,
  RecommendedAuthorsTitle,
  AuthorsList,
  AuthorsItem
} from '../style'

class Writer extends Component {

  getRecommendedAuthorsArea () {
    const { authorList, page, totalPage, getAuthorList, handleChangePage } = this.props
    getAuthorList()
    const newList = authorList.toJS()
    const contentList = []
    if (newList.length) {
      for (let i = (page -1) * 5; i < page * 5; i++) {
        if (newList[i] !== undefined) {
          contentList.push(
            <AuthorsItem key={ newList[i].id }>
              <a href="" className="avatar">
                <img src={ newList[i].avatar_source } alt=""/>
              </a>
              <a href="" className="name">{ newList[i].nickname }</a>
              <p>写了{ newList[i].total_wordage }字 · { newList[i].total_likes_count }喜欢</p>
            </AuthorsItem>
          )
        }
      }
    }
    return (
      <RecommendedAuthors>
        <RecommendedAuthorsTitle>
          <span>推荐作者</span>
          <a 
            className="page-change" 
            onClick= {() => handleChangePage(page, totalPage, this.spinIcon)}
          >
            <i ref={ icon => this.spinIcon = icon } className="iconfont spin">&#xe851;</i>
            <span>换一批</span>
          </a>
        </RecommendedAuthorsTitle>

        <AuthorsList>
          { contentList }
        </AuthorsList>
      </RecommendedAuthors>
    )
  }

  render () {
    return (
      <div>
        { this.getRecommendedAuthorsArea() }
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    authorList: state.getIn(['home', 'authorList']),
    page: state.getIn(['home', 'page']),
    totalPage: state.getIn(['home', 'totalPage'])
  }  
}

const mapDispatch = (dispatch) => {
  return {
    // 获取数据
    getAuthorList () {
      dispatch(actionCreators.getList())
    },
    // 换一批
    handleChangePage (page, totalPage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle =parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spinIcon.style.transform = 'rotate('+ (originAngle + 360) +'deg)'

      page < totalPage ? page += 1 : page = 1
      dispatch(actionCreators.changePage(page))
    }
  }
}

export default connect(mapState, mapDispatch)(Writer)