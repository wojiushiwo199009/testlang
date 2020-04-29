<template>
  <div>
    <Header></Header>
    <div class="home-aside-main">
      <Aside></Aside>
      <el-main>
        <router-view />
      </el-main>
    </div>
  </div>
</template>
<script>
import Header from "@/page/Header";
import Aside from "@/page/Aside";
export default {
  name: "Home",
  components: {
    Header,
    Aside
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.home-aside-main {
  overflow: auto;
}
</style>