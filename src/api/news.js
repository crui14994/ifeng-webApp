import service from "./../utils/axios";

const base_url = "https://easy-mock.com/mock/5cc2c5d62b5d29283462699f/news";

export default {
  // 获取轮播图
  getSwiper: function () {
    return service({
      url: base_url+"/news",
      method: "get",
    });
  },
  //获取新闻列表
  getNewsList:function(type){
      return service({
          url:'api/?tag='+type+'&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000)
      })
  }
}
