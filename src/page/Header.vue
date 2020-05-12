<template>
  <div class="home-header">
    <el-header>
      <div class="home-title">AAAAA</div>
      <div class='home-user'>
        <el-dropdown>
          <span class='el-dropdown-link'>
            <i class="el-icon-user"></i>
            <span>{{$t('user')}}</span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
       <div class='home-user'>
        <el-dropdown @command="handleCommand">
          <span class='el-dropdown-link'>
            <i class="el-icon-setting"></i>
            <span>{{$t('language')}} </span>
            <span> {{$t('hello')}}</span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command='zh'>中文</el-dropdown-item>
            <el-dropdown-item command='en'>英文</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
  </div>
</template>
<script>
// import {setCookie} from '@/utils'
export default {
  name: "Header",
  data() {
    return {
      language:'zh',
    };
  },
  methods:{
    setCookie(cname, cvalue, exdays) {
      // var d = new Date();
      // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      // var expires = "expires=" + d.toGMTString();
      // document.cookie = cname + "=" + cvalue + "; " + expires;
      document.cookie = cname + "=" + cvalue + "; " 
    },
    handleCommand(command){
      console.log(command,this,this.$i18n.locale, this.$t('message'),'com')
      this.$i18n.locale=command
      this.language=command
      this.$cookieStore.setCookie('language',command,1)
      console.log(document.cookie)
    }
  },
  mounted(){
    console.log(this,this.setCookie,'this')
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
    margin-left:10px;
    .el-dropdown-link {
      cursor: pointer;
      color: #409EFF;
    }
  }
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
}
</style>