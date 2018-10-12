import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({  
  topicList: [], // 首页推荐话题  
  articleList: [], // 首页文章列表 
  articlePage: 1, 
  recommendList: [], // 右侧推荐
  authorList: [], // 推荐作者
  page: 1, // 当前页
  totalPage: 1 // 总页数
})

export default (state = defaultState, action) => {
  switch (action.type) {

    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList,
        authorList: action.authorList,
        totalPage: action.totalPage
      })

    case constants.CHANGE_AUTHORLIST_PAGE:
      return state.set('page', action.page)

    case constants.ADD_ARTICLE_LIST:      
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
      })

    default:
      return state
  }
}