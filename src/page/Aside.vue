<template>
  <el-aside>
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>导航一
        </template>
          <el-menu-item index="1-1">
            <router-link to="/home">Home</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/about">about</router-link>
          </el-menu-item>
          <el-menu-item index="1-3">
            <router-link to="/http">Http</router-link>
          </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>导航二
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  name: "Aside",
  data() {
    return {};
  }
};
</script>
<style lang="less" scope>
.el-aside {
  float: left;
  height: calc(100vh - 60px);
  color: #333;
  text-align: center;
  line-height: 200px;
  .el-menu{
    height: 100%;
  }
}
</style>