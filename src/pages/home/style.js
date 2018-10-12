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
 width: 280px;
 float: right;
`
// 话题推荐
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
// 首页文章列表
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

// 右侧
// 热门推荐
export const RecommendWrap = styled.div`
  margin-top: 24px;
  margin-bottom: 30px;  
`
export const RecommendItem = styled.div`
  a{
    img{
      width: 100%;
      vertical-align: middle;
      margin-bottom: 6px;
    }
  }
`

// 推荐作者
export const RecommendedAuthors = styled.div`

`
export const RecommendedAuthorsTitle = styled.div`
  span {
    font-size: 14px;
    color: #969696;
  }
  .page-change {
    float: right;
    font-size: 14px;
    color: #969696;
    cursor: pointer;
    .spin {
      display: inline-block;
      font-size: inherit;
      margin-right: 4px;
      transition: all .3s ease-in;
      transform-origin: center center;
    }
  }

`
export const AuthorsList = styled.ul`

`
export const AuthorsItem = styled.li`
  margin-top: 20px;
  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
  }
  .name {
    padding-top: 5px;
    padding-bottom: 10px;
    margin-right: 60px;
    font-size: 14px;
    display: block;    
    color: #2f2f2f;
    text-decoration: none;    
  }
  p {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`


