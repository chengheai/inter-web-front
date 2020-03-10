<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in levelList"
        :key="item.path"
        :to="item.redirect || item.path"
      >
        {{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      levelList: []
    };
  },
  name: "Breadcrumb",

  methods: {
    //面包屑
    getBreadcrumb() {
      let matched = this.$route;
      let id = this.$route.query.id || this.$route.params.id;
      this.levelList = [
        {
          path: matched.fullPath,
          title: matched.meta.title
        }
      ];
      if (matched.meta.top) {
        this.levelList.unshift({
          path: matched.meta.top.path,
          title: matched.meta.top.title,
          redirect: matched.meta.top.path.endsWith("/")
            ? `${matched.meta.top.path}${id}`
            : ""
        });
        if (matched.meta.top.top) {
          this.levelList.unshift({
            path: matched.meta.top.top.path,
            title: matched.meta.top.top.title
          });
          if (matched.meta.top.top.top) {
            this.levelList.unshift({
              path: matched.meta.top.top.top.path,
              title: matched.meta.top.top.top.title
            });
          }
        }
      }
    }
  },
  watch: {
    $route(to, from) {
      this.getBreadcrumb();
    }
  },
  mounted() {
    this.getBreadcrumb();
  }
};
</script>
<style lang="less"></style>
