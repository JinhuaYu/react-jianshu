import styled from 'styled-components'

export const HomeWrapper = styled.div`
 width: 960px;
 height: 300px;
 margin: 0 auto;
`
export const HomeLeft = styled.div`
  float: left;
  margin-right: 15px;
  padding-top: 30px;
  width: 625px;
  .banner {
    margin-bottom: 20px;
  }
  .banner-img {
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
 width: 240px;
 float: right;
`

export const TopicWrapper = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
`
export const TopicItem = styled.a`
  display: inline-block;
  margin: 0 18px 18px 0;
  min-height: 32px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  vertical-align: top;
  overflow: hidden;

  img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
  }
  
  span {
    display: inline-block;
    padding: 0 10px 0 10px;
    font-size: 14px;
  }
`

export const ListItem = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  &.have-img{
    min-height: 140px;
  }
  .content{
    padding-right: 140px;
  }
  .title {
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color:#333;
    text-decoration: none;
  }
  .title:hover{
    text-decoration: underline;
  }
  .title:visited{
    color:#969696;
  }
  .abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
  .wrap-img{
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 125px;
    height: 100px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
    }
  }
`
