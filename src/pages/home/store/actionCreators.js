import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeHomeData = (data) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList),
  authorList: fromJS(data.authorList),
  totalPage: Math.ceil(data.authorList.length / 5)
})

export const changePage = (page) => ({
  type: constants.CHANGE_AUTHORLIST_PAGE,
  page
})

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json')
    .then((res) => {
      dispatch(changeHomeData(res.data.data))
    }).catch(err => err)
  }
}