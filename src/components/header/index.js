import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {  
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo></Logo>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className='iconfont'>&#xe636;</i>
        </NavItem>
        <SearchWrapper className={props.focused ? 'focused' : ''}>
          <CSSTransition
            in={props.focused}
            timeout={300}
            classNames='slide'
          >
            <NavSearch              
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>              
          </CSSTransition>
          <i className='iconfont'>&#xe6e4;</i>            
        </SearchWrapper>          
      </Nav>
      <Addition>
        <Button className='reg'>注册</Button>
        <Button className='writting'><i className='iconfont'>&#xe715;</i> 写文章</Button>  
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.searchFocus())
    },

    handleInputBlur () {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);