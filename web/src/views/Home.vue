<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, i) in banners" :key="i">
        <a tag="div" :href="item.url">
          <img class="w-100" :src="item.image" alt />
        </a>
      </swiper-slide>

      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->

    <div class="entry nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div :class="{'entry-hidden': !isEntry}" class="hidden-height d-flex flex-wrap">
        <a class="entry-list nav-item mb-3" :href="item.url" v-for="(item,i) in spriteData" :key="i">
          <i :class="item.class" class="sprite sprite-news"></i>
          <div >{{item.text}}</div>
        </a>
      </div>
      <div class="entry-btn t-center" @click="entryBtnClick">
        <i :class="{is_entry:!isEntry}"></i>
        <span class="py-3">{{isEntry?'收起':'展开'}}</span>
      </div>
    </div>
    <!-- end of nav icons -->

    <m-list-card icon="menu1" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(news, i) in category.newsList"
          :key="i"
        >
          <span :class="news.nameClass">{{news.categoryName}}</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem;">
          <router-link
            tag="div"
            :to="`/heroes/${hero._id}`"
            class="p-2 text-center"
            style="width: 20%;"
            v-for="(hero, i) in category.heroList"
            :key="i"
          >
            <img :src="hero.avatar" class="w-100" />
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>

    <m-card icon="menu1" title="精彩视频"></m-card>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      },
      newsCats: [],
      heroCats: [],
      banners: [],
      //精灵图数据
      spriteData: [
        {
          text: "爆料站",
          class: "sprite_blz",
          url: "https://pvp.qq.com/m/m201706/coming/index.htm"
        },
        {
          text: "故事站",
          class: "sprite_gsz",
          url:
            "https://pvp.qq.com/act/a20160510story/index.htm?ADTAG=PC.QrCode.TG"
        },
        {
          text: "周边商城",
          class: "sprite_zbsc",
          url: "https://pvp.qq.com/mall/m"
        },
        {
          text: "体验服",
          class: "sprite_tyf",
          url: "https://pvp.qq.com/cp/a20161116tyf/page01.htm"
        },
        {
          text: "新人专区",
          class: "sprite_xrzq",
          url: "https://pvp.qq.com/m/m201606/goCenter.shtml"
        },
        {
          text: "荣耀传承",
          class: "sprite_rycc",
          url: "https://pvp.qq.com/m/memory/index.shtml"
        },
        {
          text: "王者营地",
          class: "sprite_wzyd",
          url:
            "https://image.ttwz.qq.com/wzry/wzryzs_download_4001.htm?ADTAG=mpvp.qq.com"
        },
        {
          text: "公众号",
          class: "sprite_gzh",
          url:
            "https://game.weixin.qq.com/cgi-bin/comm/openlink?noticeid=90102708&appid=wx95a3a4d7c627e07d&url=https%3A%2F%2Fgame.weixin.qq.com%2Fcgi-bin%2Fh5%2Fstatic%2Fsubscribe%2Findex.html%3Fappid%3Dwx95a3a4d7c627e07d#wechat_redirect"
        },
        {
          text: "版本介绍",
          class: "sprite_bbjs",
          url: "https://pvp.qq.com/cp/a20190320bbgxsmm/index.html"
        },
        {
          text: "对局环境",
          class: "sprite_djhj",
          url: "https://pvp.qq.com/cp/a20190917station/index.html"
        },
        {
          text: "无限王者团",
          class: "sprite_wxwzt",
          url: "https://pvp.qq.com/cp/a20190827boundlessp/index.html"
        },
        {
          text: "创意互动营",
          class: "sprite_cyhdy",
          url: "https://pvp.qq.com/m/hdy/p1/index.html"
        }
      ],
      //收起展开
      isEntry: false
    };
  },
  methods: {
    entryBtnClick() {
      this.isEntry = !this.isEntry;
    },
    async fetchBanners() {
      const res = await this.$http.get("/banners/list",{params:{name:'首页轮播图'}});
      this.banners = res.data.items;
    },
    async fetchNewsCats() {
      let res = await this.$http.get("news/list");

      res.data.forEach(v => {
        v.newsList.forEach(news => {
          // window.console.log(news.categoryName)
          switch (
            news.categoryName //每种分类赋予不同的样式名
          ) {
            case "新闻":
              news.nameClass = "new-category-lightgodenrod";
              break;
            case "公告":
              news.nameClass = "new-category-gold";
              break;
            case "活动":
              news.nameClass = "new-category-mediumpurpul";
              break;
            case "赛事":
              news.nameClass = "new-category-blue";
              break;
            default:
              news.nameClass = "new-category-lightgodenrod";
              break;
          }
        });
      });

      // window.console.log(res.data)
      this.newsCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heroes/list");
      this.heroCats = res.data;
    }
  },
  created() {
    this.fetchBanners();
    this.fetchNewsCats();
    this.fetchHeroCats();
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}


//精灵图部分
.entry {
  border-top: 0.04rem solid #d4d9de;
  border-bottom: 0.04rem solid #d4d9de;
  .hidden-height {
    height: 12rem;
    transition: all 0.1s;
    &.entry-hidden {
      height: 3.6rem;
      overflow: hidden;
    }
  }
  .entry-list {
    display: block;
    position: relative;
    width: 25%;
    float: left;
    text-align: center;
    font-size: 0.48rem;
    // padding: 0.52rem 0;
    text-decoration: none;
    overflow: hidden;
    i {
      display: inline-block;
      background: url("https://game.gtimg.cn/images/yxzj/m/m201706/images/bg/index.png")
        no-repeat;
      background-size: 23.4375rem 28.4375rem;
      width: 1.5625rem;
      height: 1.5625rem;
      // 爆料站
      &.sprite_blz {
        background-position: -14rem -4.1875rem;
      }
      // 故事站
      &.sprite_gsz {
        background-position: -19.875rem -4.25rem;
      }
      // 周边商场
      &.sprite_zbsc {
        background-position: -8.1875rem -0.25rem;
      }
      // 体验服
      &.sprite_tyf {
        background-position: -2.3125rem -4.1875rem;
      }
      // 新人专区
      &.sprite_xrzq {
        background-position: -19.9375rem -0.3125rem;
      }
      // 荣耀传承
      &.sprite_rycc {
        background-position: -8rem -4.125rem;
      }
      // 王者营地
      &.sprite_wzyd {
        background-position: -13.875rem -0.25rem;
      }
      // 公众号
      &.sprite_gzh {
        background-position: 0rem -26.125rem;
      }
      // 版本介绍
      &.sprite_bbjs {
        background: url("https://game.gtimg.cn/images/yxzj/m/m201706/images/bg/version-icon.png")
          no-repeat;
        background-size: 1.5625rem ;
      }
      //对局环境
       &.sprite_djhj {
        background: url("https://game.gtimg.cn/images/yxzj/m/m201706/images/bg/djhj.png")
          no-repeat;
        background-size: 1.5625rem ;
      }
      //无限王者团
     &.sprite_wxwzt {
        background: url("https://game.gtimg.cn/images/yxzj/m/m201706/images/bg/wxwzt.png")
          no-repeat;
        background-size: 1.5625rem ;
      }
      //创意互动营
      &.sprite_cyhdy {
        background: url("https://game.gtimg.cn/images/yxzj/m/m201706/images/bg/cyhdy.png")
          no-repeat;
        background-size: 1.5625rem ;
      }





    &::after {
      position: absolute;
      top: 0.32rem;
      right: -0.02rem;
      display: block;
      height: 3rem;
      width: 1px;
      background: #d4d9de;
      content: "";
    }

    &:nth-child(4n)::after {
      width: 0;
    }
  }
}
//收起展开按钮
.entry-btn {
  height: 2rem;
  background-color: #f9f9f9;
  line-height: 2rem;
  i {
    display: inline-block;
    margin-right: .48rem;
    background: url("https://game.gtimg.cn/images/yxzj/m/m201706/images/bg/index.png")
      no-repeat -8.8125rem -14.5rem;
    background-size: 23.4375rem 28.4375rem;
    width: 0.625rem;
    height: 0.625rem;
    color: #333;
    // transition: all 1s;
    // transform: rotate(180deg);
    &.is_entry {
      transform: rotate(180deg);
    }
  }
}
}
</style>
