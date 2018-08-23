import * as constants from './constants'
import { fromJS } from 'immutable'

// immutable 库
// immutable 对象

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  // 搜索框聚焦
  if (action.type === constants.SEARCH_FOCUS) {
    // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
    return state.set('focused', true)   
  }
  // 搜索框失焦
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }

  return state
}