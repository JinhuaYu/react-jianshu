const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  // 搜索框聚焦
  if (action.type === 'search_focus') {
    return {
      focused: true
    }      
  }
  // 搜索框失焦
  if (action.type === 'search_blur') {
    return {
      focused: false
    }
  }

  return state
}