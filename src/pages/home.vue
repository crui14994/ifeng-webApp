<template>
  <div class="container" >
      <header-top></header-top>
      <div class="nav-bar">
        <ul>
            <li v-for="(item,index) in navbar" :key="index">
                <router-link  :class="{'nav-active':navActive===item.type}" :to="{path:'/',query:{type:item.type}}">{{item.text}}</router-link>
            </li>
        </ul>
      </div>
      <mt-loadmore  :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div class="swiper" v-show="navActive=='__all__'">
                <mt-swipe :auto="4000">
                    <mt-swipe-item class="swiper-item" v-for="(item,index) in swiperList" :key="index">
                        <img :src="item.image" width="100%" alt="">
                        <div class="swiper-title">
                            {{item.title}}
                        </div>
                    </mt-swipe-item>
                </mt-swipe>
        </div>
        <div class="news-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                <ul class="news-ul01">
                    <li class="news-ul01-li" v-for="(item,index) in newsList" :key="index">
                        <router-link to="/" >
                            <p class="news-title">{{item.title}}</p>
                            <div> 
                                <ul class="news-img">
                                    <li v-for="(img,index) in item.image_list" :key="index">
                                            <img alt="加载出错"  :src="img.url">
                                    </li>
                                </ul>
                                    <div class="bottomInfo clearfix">
                                        <!-- <Icon type="fireball" size="10" color="#d43d3d" v-show="item.hot===1"></Icon> -->
                                        <!-- <span class="avIcon" v-show="item.label==='广告'">广告</span> -->
                                        <span class="writer">{{item.media_name}}</span> 
                                        <span class="comment_count">评论&nbsp;{{item.comment_count}}</span>
                                        <span class="datetime">{{item.datetime}}</span>
                                    </div>
                                </div>
                        </router-link>
                    </li>
                </ul>
                <div  class="loading">正在加载...</div>
        </div>
        
      </mt-loadmore>
  </div>
</template>

<script>
import headerTop from "@/components/headerTop";
import newsApi from "./../api/news";

export default {
  name: "home",
  data() {
    return {
      navbar: [
        {
          text: "推荐",
          type: "__all__"
        },
        {
          text: "资讯",
          type: "news_hot"
        },
        {
          text: "财经",
          type: "news_finance"
        },
        {
          text: "产业",
          type: "news_story"
        },
        {
          text: "社会",
          type: "news_society"
        },
        {
          text: "旅游",
          type: "news_travel"
        },
        {
          text: "文化",
          type: "news_history"
        },
        {
          text: "教育",
          type: "news_baby"
        },
        {
          text: "人物",
          type: "news_entertainment"
        },
        {
          text: "美食",
          type: "news_food"
        },
        {
          text: "风尚",
          type: "news_fashion"
        }
      ],
      navActive: "__all__", //当前选中的栏目
      swiperList: [], //轮播
      swiperShow: true, //轮播是否显示
      newsList: [], //新闻列表
      allLoaded: false,
      busy: false
    };
  },
  created() {
    //获取路由参数（当前选中的栏目）
    this.navActive = this.$route.query.type;
    //获取轮播图数据
    newsApi.getSwiper().then(res => {
      this.swiperList = res.data.top_stories;
    });
    //获取新闻列表
    this.getNewsList(this.navActive);
  },
  mounted() {
    //   this.busy = true;
  },
  components: {
    headerTop
  },
  watch: {
    $route(to, from) {
      //获取路由参数（当前选中的栏目）
      let formType = to.query.type;
      this.navActive = formType;
      this.getNewsList(formType);
    }
  },
  methods: {
    //获取新闻列表
    getNewsList(type) {
      this.newsList = [];
      newsApi.getNewsList(type).then(res => {
        this.newsList = res.data.data;
      });
    },

    loadTop() {
      //刷新数据
      this.getNewsList(this.navActive);
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      //   ...// 加载更多数据
      console.log(123);
      //   this.allLoaded = true; // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded();
    },
    loadMore() {
      this.busy = true;
      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          // this.list.push({ name: count++ });
        }
        this.busy = false;
      }, 1000);
      console.log(123);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  padding-top: 40px;
  .nav-bar {
    height: 0.933333rem;
    > ul {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
      text-align: center;
      height: 0.933333rem;
      background: #f4f5f6;
      white-space: nowrap;
      position: fixed;
      top: 40px;
      z-index: 100;
      li {
        width: 1.4rem;
        display: inline-block;
        line-height: 0.933333rem;
        font-size: 16px;
        .nav-active {
          color: #f54343;
          font-weight: bold;
          text-decoration: none;
        }
      }
    }
  }
  .swiper {
    height: 4.266667rem;
    position: relative;
    .swiper-item {
      .swiper-title {
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 0.8rem;
        color: #fff;
        line-height: 0.8rem;
        font-size: 14px;
        padding: 0 0.266667rem;
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .news-list {
    padding-bottom: 1.333333rem;
    .loading{
        text-align: center;
        height: 1.066667rem;
        line-height: .533333rem;
        font-size: 14px;
        color: #9a9a9a;
    }
    .news-ul01 {
      .news-ul01-li {
        margin: 0.4rem;
        border-bottom: solid 0.013333rem rgba(0, 0, 0, 0.1);
        .news-title {
          font-size: 16px;
          line-height: 24px;
        }
        .news-img {
          width: 100%;
          > li {
            width: 33.3%;
            display: inline-block;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            img {
              width: 100%;
            }
          }
          > li:first-child {
            padding-right: 0.053333rem;
          }
          > li:last-child {
            padding-left: 0.053333rem;
          }
        }
        .bottomInfo {
          color: #9a9a9a;
          margin: 0.266667rem 0 0.4rem;
          .writer {
            padding-right: 0.266667rem;
          }
          .datetime {
            float: right;
          }
        }
      }
    }
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
