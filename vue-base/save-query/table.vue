<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      search: {
        a: "",
        b: "",
        c: ""
      },
      // 搜索条件改变的时候page修改为 1
      isFilterChange: false,
      pager: {
        Page: 1,
        Per_page: 10,
        total: 0
      }
    };
  },
  methods: {
    // 获取列表
    getList() {
      let queryObj = {
        Page: this.pager.Page,
        Per_page: this.pager.Per_page
      };
      Object.assign(queryObj, rest);
      this.setHistory(this.$route.path, { ...this.search }, this.pager);
      this.api
        .getdata(queryObj)
        .then(res => {
          let { data, meta } = res.data;
          if (res.status === 200) {
            this.tableData = data;
            this.pager.Page = meta.Page;
            this.pager.Per_page = meta.Per_page;
            this.pager.total = meta.Total;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    search: {
      deep: true,
      handler() {
        if (this.isFilterChange) {
          this.pager.Page = 1;
        }
        this.getList();
      }
    }
  },
  created() {
    this.getHistory(this.$route.path, historyItem => {
      const { pager, queryData } = historyItem;
      if (queryData) {
        this.search = queryData;
        this.pager = pager;
      } else {
        this.getList();
      }
      this.$nextTick(() => {
        this.isFilterChange = true;
      });
    });
  }
};
</script>

<style lang="less" scoped></style>
