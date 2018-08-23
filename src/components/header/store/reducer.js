import * as constants from './constants'

const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  // 搜索框聚焦
  if (action.type === constants.SEARCH_FOCUS) {
    return {
      focused: true
    }      
  }
  // 搜索框失焦
  if (action.type === constants.SEARCH_BLUR) {
    return {
      focused: false
    }
  }

  return state
}