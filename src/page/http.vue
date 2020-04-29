<template>
  <div class="http">

  </div>
</template>
<script>
export default {
  data(){
    return{
      user:[]
    }
  },
  methods:{
    getUserData(){
    //   this.$get('/test').then(res)=>{
    //   console.log(res,'res')
    // }
    }
  },
  mounted(){
    this.getUserData()
  }
}
</script>