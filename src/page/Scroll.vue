<template>
  <div class="wrap" ref="wrap">
    <div class="scroll-area">
      <div v-for="n in 50" class="item" :key="n">{{ n }}</div>
    </div>
  </div>
</template>
<script>
import IScroll from "iscroll/build/iscroll-probe";
export default {
  data() {
    return {
      scroll: null
    };
  },
  methods: {
    getData() {
      // getData().then(_=>{
      //   this.scroll.refresh();
      // })
    }
  },
  mounted() {
    // const el = this.$ref.wrap
    this.scroll = new IScroll(".wrap", {
      mouseWheel: true // 允许鼠标滚轮
    });
    // this.getData()
    // // ② 首次滑动时刷新
    // el.addEventListener('touchstart', _=>this.scroll.refresh());
  }
};
</script>
<style lang='less' scope>
.wrap {
  height: 400px;
  overflow: hidden;
}
</style>