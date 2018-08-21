import styled from 'styled-components'
import LogoPic from  '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`
export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 58px;
  display: block;
  background: url(${LogoPic});
  background-size: contain;
`
