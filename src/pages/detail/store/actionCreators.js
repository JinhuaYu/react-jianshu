import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable';

const changeDetailData = (data) => ({
  type: constants.CHANGE_DETAIL_DATA,
  title: fromJS(data.title),
  author: fromJS(data.author),
  content: fromJS(data.content)
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/articleData.json?id=' + id)
    .then((res) => {  
      dispatch(changeDetailData(res.data.data))
    }).catch(res => res)
  }
}