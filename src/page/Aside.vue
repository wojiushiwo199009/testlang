<template>
  <el-aside>
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>{{$t('menu1')}}
        </template>
          <el-menu-item index="1-1">
            <router-link to="/home">{{$t('home')}}</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/scroll">{{$t('scroll')}}</router-link>
          </el-menu-item>
          <el-menu-item index="1-3">
            <router-link to="/http">{{$t('http')}}</router-link>
          </el-menu-item>
          <el-menu-item index="1-3">
            <router-link to="/i18n">{{$t('i18n')}}</router-link>
          </el-menu-item>
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