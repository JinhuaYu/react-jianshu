import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {  
  HeaderWrapper,
  HeaderInner,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  SearchInfoHistory,
  SearchInfoHistoryItem,
  Addition,
  Button
} from './style'
import { from } from 'array-flatten';

class Header extends PureComponent {

  getSearchListArea() {
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props // 解构赋值    
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page -1) * 10; i < page * 10; i++) {
        if (newList[i] !== undefined) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          ) 
        }
      }
    }
        
    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} 
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick = { () => handleChangePage(page, totalPage, this.spinIcon) }
            >
              <i ref={icon => this.spinIcon = icon} className='iconfont spin'>&#xe851;</i>换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList}            
          </SearchInfoList>
          <SearchInfoHistory>
            <SearchInfoHistoryItem>
              historyItem
            </SearchInfoHistoryItem>
          </SearchInfoHistory>
        </SearchInfo> 
      )
    } else {
      return null
    }  
  }

  render() {
    const { focused, handleInputBlur, handleInputFocus, list, login, logout } = this.props
    return (
      <HeaderWrapper>
        <HeaderInner>
          <Link to='/'>
            <Logo/>
          </Link>          
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>                     
            <SearchWrapper className={focused ? 'focused' : ''}>
              <CSSTransition
                in={focused}
                timeout={300}
                classNames='slide'
              >
                <NavSearch
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className='iconfont icon-search'>&#xe6e4;</i>
              {this.getSearchListArea()}           
            </SearchWrapper>          
          </Nav>
          <Addition>
            <Link to='/write'>
              <Button className='write-btn'><i className='iconfont'>&#xe715;</i> 写文章</Button>                      
            </Link>                                                        
            <Button className='reg'>注册</Button>
            {
              login 
                ? <Button className='loginOut' onClick={logout}>退出</Button>
                : <Link to='/login'><Button className='login'>登录</Button></Link>
            }
            <Button className='lang-Transform right'>
              <i className='iconfont'>&#xe636;</i>
            </Button>  
          </Addition>
        </HeaderInner>
      </HeaderWrapper>
    )
  }
}                                                                                                                       

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']), // 
    mouseIn: state.getIn(['header', 'mouseIn']), //
    list: state.getIn(['header', 'list']), //
    page: state.getIn(['header', 'page']), //
    totalPage: state.getIn(['header', 'totalPage']), // 
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // input 聚焦
    handleInputFocus (list) {
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    // input 失焦
    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    },
    // 热门搜索面板鼠标移入
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    // 热门搜索面板鼠标移入
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeave())
    },
    // 换一批
    handleChangePage (page, totalPage, spinIcon) {
      // 图标旋转
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spinIcon.style.transform = 'rotate('+ (originAngle + 360) +'deg)'
      // 换页
      page < totalPage ? page += 1 : page = 1
      dispatch(actionCreators.changePage(page))
    },

    logout () {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);