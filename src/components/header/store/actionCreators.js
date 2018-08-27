import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

// 内部调用
const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
})

// 导出 export 外部使用
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
    .then((res) => {
      dispatch(changeList(res.data.data))
    }).catch(err => err)
  }
}