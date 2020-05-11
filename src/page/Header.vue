<template>
  <div class="home-header">
    <el-header>
      <div class="home-title">AAAAA</div>
      <div class='home-user'>
        <el-dropdown>
          <i class="el-icon-setting"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </div>
       <div class='home-user'>
        <el-dropdown>
          <i class="el-icon-setting"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>中文</el-dropdown-item>
            <el-dropdown-item>英文</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>中英文</span>
      </div>
    </el-header>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>
<style lang="less" scope>
.home-header {
  .home-title {
    text-align: center;
    display: inline-block;
  }
  .home-user{
    text-align: right;
    float: right;
  }
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
}
</style>