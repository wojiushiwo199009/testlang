<template>
   <div style="margin-top: 20px">
    <div>当前语言{{$t('language')}}</div>
    <p>{{ $t('message') }}</p>
    <img :src="`${publicPath}my-image.png`">
  </div>
</template>

<script>
export default {
  name: 'HelloI18n',
  data(){
    return {
      publicPath: process.env.BASE_URL
    }
  },
  computed:{
  },
  methods:{
  },
  mounted(){

  }
}
</script>

