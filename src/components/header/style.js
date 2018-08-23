import styled from 'styled-components'
import LogoPic from  '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

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
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 1180px) {    
    padding-right: 200px;
    padding-left: 100px;
  }
`;

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
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  margin-top: 9px;
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
      width: 240px;
    }
    .iconfont {
      background: #888;
      color: #fff;
    }
  }  
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 40px 0 20px;
  font-size: 14px;
  border-radius: 40px;
  background: #eee;  
  border: none;
  outline: none;  
  margin-left: 20px;
  color: #666;
  &::placeholder {
    color: #999;
  }

  /* CSSTransition 动画 */
  &.slide-enter {
    transition: width .3s ease-in-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: width .3s ease-in-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;  
  height: 58px;
`;

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
`;
