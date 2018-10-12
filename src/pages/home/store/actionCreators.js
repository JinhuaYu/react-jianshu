import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeAuthorList = (data) => ({
  type: constants.CHANGE_AUTHORLIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 5)
})

export const changePage = (page) => ({
  type: constants.CHANGE_AUTHORLISTRPAGE,
  page
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/writerList.json')
    .then((res) => {
      dispatch(changeAuthorList(res.data.users))
    }).catch(err => err)
  }
}