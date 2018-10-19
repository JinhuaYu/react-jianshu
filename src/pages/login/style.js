import styled from 'styled-components'

export const LoginWrapper = styled.div`
  height: 100%;
  padding-top: 60px;
  min-height: 750px;
  text-align: center;
  font-size: 14px;
  background-color: #f1f1f1;
`

export const LoginBox = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding: 4px 12px 4px 12px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0,0%,71%,.1);
  vertical-align: middle;
`

export const Button = styled.button`
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #3194d0;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
  &:hover{
    background: #187cb7;
  }
` 