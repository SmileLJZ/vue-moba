<template>
  <div class="page-article" v-if="model">
    <router-link to class="d-flex py-3 px-2 border-bottom " style="text-decoration:none">
      <div @click="$router.back(-1)" class="iconfont icon-Back text-blue"></div>
      <strong class="flex-1 text-blue pl-2">{{model.title}}</strong>
      <div class="text-grey fs-xs">{{model.createdAt | date}} </div>
    </router-link>
    <div v-html="model.body" class="px-3 body fs-lg mt-3"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu1"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link
        class="py-1 text-ellipsis d-flex"
          tag="div"
          :to="`/articles/${item._id}`"
          v-for="item in model.related"
          :key="item._id"
        >
        <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{item.title}}</span>
        <span class="text-grey-1 fs-sm">{{item.createdAt | date}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  filters: {
    date(val) {
      return dayjs(val).format("YYYY-MM-DD");
    }
  },
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    };
  },
  watch: {
    id: 'fetch',
    // id(){
    //   this.fetch()
    // }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      window.console.log(res.data)
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style lang="scss">
.page-article {
  .icon-Back {
    font-size: 1.6923rem;
  }
  .body {
    p{
      padding: 0;
      margin: 0;
      color: #333333;
      font-size: 16px;
      font-family: 微软雅黑;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>
