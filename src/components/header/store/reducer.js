import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false, // search框聚焦，默认:false
  list: [] // 热门搜索数据
})

export default (state = defaultState, action) => {
  switch (action.type) {
    // 搜索框聚焦
    case constants.SEARCH_FOCUS:
      return state.set('focused', true)
    // 搜索框失焦
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    // 获取热门搜索 
    case constants.CHANGE_LIST:
      return state.set('list', action.data)
    default:
      return state
  }
}