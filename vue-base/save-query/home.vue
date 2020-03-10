<template>
  <div>
    <el-scrollbar style="height:100%; ">
      <el-menu
        :collapse-transition="false"
        @select="handleSelect"
        :default-active="defaultpath"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        background-color="#001429"
        text-color="#ccc"
        active-text-color="#409EFF"
      >
        <template v-for="item in menutree">
          <!-- 多级菜单外壳 -->
          <el-submenu
            v-if="item.MenuInfos && item.MenuInfos.length"
            :index="item.Code"
            :key="item.Code"
          >
            <template slot="title">
              <i :class="item.Icon || icon[item.Code]"></i>
              <span>{{ item.Name }}</span>
            </template>

            <!-- 二级菜单 -->
            <template v-for="itemChild in item.MenuInfos">
              <el-submenu
                v-if="itemChild.MenuInfos && itemChild.MenuInfos.length"
                :index="itemChild.Code"
                :key="itemChild.Code"
              >
                <template slot="title">
                  <!-- <i :class="itemChild.Icon || icon"></i> -->
                  <span>{{ itemChild.Name }}</span>
                </template>
                <template v-for="itemChild_Child in itemChild.MenuInfos">
                  <el-menu-item
                    :index="itemChild_Child.Code"
                    :key="itemChild_Child.Code"
                  >
                    <i :class="itemChild_Child.Icon || icon"></i>
                    <span slot="title">{{ itemChild_Child.Name }}</span>
                  </el-menu-item>
                </template>
                <!-- 三级菜单 -->
              </el-submenu>

              <el-menu-item
                v-else
                :index="itemChild.Code"
                :key="itemChild.Code"
              >
                <!-- <i :class="itemChild.Icon || icon"></i> -->
                <span slot="title">{{ itemChild.Name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>

          <el-menu-item v-else :index="item.Code" :key="item.Code">
            <i :class="item.Icon || icon[item.Code]"></i>
            <span slot="title">{{ item.Name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect(key, keyPath) {
      // 切换item的时候清除sessionStrage
      this.removeHistory();
      this.$router.push({ name: key, parmas: "top" });
    }
  }
};
</script>

<style lang="scss" scoped></style>
