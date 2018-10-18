import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '食记.早餐应该好好吃(五十二)',
  author: {
    name: '子悦生活',
    avatar: 'https://upload.jianshu.io/users/upload_avatars/4255564/ac8fed5b-10fc-493d-b362-a36f5c918aba.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96'
  },
  content: '<p>今年三月份开始在朋友圈进行早餐打卡，坚持了120多天。或者不能说是坚持，我是热爱的，那段早餐的时光现在回想起来依然觉得很充实，还特别有成就感。原来，做自己喜欢的事真的更容易获得满足感和成就感</p><p>到七八月，由于工作的变动，停止了早餐打卡，顿感人生的乐趣少了不少。正是少了认真做早餐，认真摆盘，认真拍照再满怀感恩地吃下一顿早餐，才会有的失落感。</p><img src="https://upload-images.jianshu.io/upload_images/4255564-f63f59776a42845b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/750/format/webp" alt=""/>'
})

export default (state = defaultState, action) => {
  switch (action.type) {  
    default:
      return state
  }
}