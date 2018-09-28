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
    padding: 0 11px 0 6px;
    font-size: 14px;
  }
`
