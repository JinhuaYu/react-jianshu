import React, { Component } from 'react'
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

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      focused : false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)    
  }

  handleInputFocus() {
    this.setState({
      focused: true
    })
  }

  handleInputBlur() {
    this.setState({
      focused: false
    })
  }

  render() {
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
          <SearchWrapper className={this.state.focused ? 'focused' : ''}>       
            <NavSearch              
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
            ></NavSearch>
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

}

export default Header