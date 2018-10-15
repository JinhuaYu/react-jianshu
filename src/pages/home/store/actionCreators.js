import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable';

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

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
}) 

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json')
    .then((res) => {
      dispatch(changeHomeData(res.data.data))
    }).catch(err => err)
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+ page).then((res) => {
      dispatch(addHomeList(res.data.data, page + 1))
    })
  }
}

export const toggleBackTopShow = (status) => ({
  type: constants.TOGGLE_BACKTOP_SHOW,
  status
})