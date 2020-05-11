<template>
  <div class="home">
   <!--在前端HTML页面中使用 count-->
    <HelloWorld :msg="count"/>
  </div>
</template>
 
<script>
import HelloWorld from '@/components/HelloWorld.vue'
import {mapActions, mapState} from 'vuex' //注册 action 和 state
 
export default {
  name: 'home',
  computed: {
    //在这里映射 store.state.count，使用方法和 computed 里的其他属性一样
    ...mapState([
      'count'
    ]),
  },
  created() {
    this.incrementStep();
  },
  methods: {
    //在这里引入 action 里的方法，使用方法和 methods 里的其他方法一样
    ...mapActions([
      'incrementStep'
    ]),
  },
  components: {
    HelloWorld
  }
}
</script>