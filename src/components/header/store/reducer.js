import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false, // search框聚焦，默认:false
  mouseIn: false, // 鼠标移入 默认：false
  list: [], // 热门搜索数据
  page: 1, // 当前页
  totalPage: 1  // 总页数
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
      return  state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    //
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
    //
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    // changePage
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}