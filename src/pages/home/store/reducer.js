import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  // 首页推荐话题
  topicList: [{
    id: 1,
    title: '热点',
    imgUrl: 'https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },{
    id: 2,
    title: '手绘',
    imgUrl: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],
  // 首页文章列表
  articleList: [{
    id: 1,
    title: '颠覆声中，新零售如何才能成为电商的完美替代者？',
    desc: '对于广大的电商从业者来讲，他们不得不面临一个全新的现实，那就是电商时代随着互联网红利的落幕而优势渐失。单单只是将商品的销售展示渠道迁移到线上，而...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/2638393-ff0edcef241db1c0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
    id: 2,
    title: '为抵御“科技殖民”，印度建防火墙能培养出自己的BAT吗？',
    desc: '向来以科技著称的谷歌，现在也是越来越会玩了。继早前公开表示将会在10月9日于美国纽约召开新品发布会之后，谷歌又宣布将在同一天于法国巴黎召开发布会...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/38281-a01f0257c2765764.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },{
    id: 3,
    title: '一文带你看懂谷歌年度新品发布会有哪些黑科技？',
    desc: '向来以科技著称的谷歌，现在也是越来越会玩了。继早前公开表示将会在10月9日于美国纽约召开新品发布会之后，谷歌又宣布将在同一天于法国巴黎召开发布会...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/5993666-76db345919ce5560.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  }],
  // 右侧推荐
  recommendList: [{
    id: '1',
    url: '',
    img: 'https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
  },{
    id: '2',
    url: '',
    img: 'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
  },{
    id: '3',
    url: '',
    img: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  },{
    id: '4',
    url: '',
    img: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
  },{
    id: '5',
    url: '',
    img: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
  }],  
  authorList: [], // 推荐作者
  page: 1, // 当前页
  totalPage: 1 // 总页数
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_AUTHORLIST:
      return state.merge({
        authorList: action.data,
        totalPage: action.totalPage        
      })
    case constants.CHANGE_AUTHORLISTRPAGE:
      return state.set('page', action.page)    
    default:
      return state
  }
}