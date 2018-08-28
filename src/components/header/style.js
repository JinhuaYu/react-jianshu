 import styled from 'styled-components'
import LogoPic from  '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 58px;
  display: block;
  background: url(${LogoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 1180px) {    
    padding-right: 200px;
    padding-left: 100px;
  }
`

export const NavItem = styled.div`
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  margin-top: 9px;
  margin-left: 20px;
  .iconfont {
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    position: absolute;
    right: 4px;
    top: 4px;
    font-size: 20px;
    color: #999;
    cursor: pointer;
  }
  &.focused {
    input {
      width: 260px;
    }
    .iconfont {
      background: #888;
      color: #fff;
    }
  }  
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 180px;
  height: 38px;
  padding: 0 40px 0 20px;
  font-size: 14px;
  border-radius: 40px;
  background: #eee;  
  border: none;
  outline: none;    
  color: #666;
  &::placeholder {
    color: #999;
  }
  /* CSSTransition 动画 */
  &.slide-enter {
    transition: width .3s ease-in-out;
  }
  &.slide-enter-active {
    width: 260px;
  }
  &.slide-exit {
    transition: width .3s ease-in-out;
  }
  &.slide-exit-active {
    width: 180px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 250px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius: 4px;
  &::before {
    position: absolute;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    content: "";
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    top: -5px;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`

export const SearchInfoTitle = styled.div`
  padding: 20px 10px 20px 10px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 12px;
  cursor: pointer;
`
export const SearchInfoList = styled.div`
  padding: 0 10px 10px;
  border-bottom: 1px solid #f0f0f0;
`
export const SearchInfoItem = styled.a`
  display: inline-block;
  white-space: nowrap;
  font-size: 12px; 
  padding: 2px 6px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  color: #777;
  border-radius: 2px;
`

export const SearchInfoHistory = styled.ul`
  padding: 5px;
`

export const SearchInfoHistoryItem = styled.li`
    display: block;
    height: 40px;
    line-height: 20px;
    padding: 10px 15px;
    font-size: 14px;
    color: #333;
    position: relative;
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;  
  height: 58px;
`

export const Button = styled.div`
  display: inline-block;
  width: 80px;
  height: 38px;
  line-height: 24px;
  text-align: center;
  font-size: 15px;
  padding: 6px 12px;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  cursor: pointer;
  &.reg {
    color: #ea6f5a;
  }
  &.writting {
    color: #fff;
    background-color: #ea6f5a;
    width: 100px;
  }
`
