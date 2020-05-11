<template>
  <div class="http">
    <span>http请求示例</span>
     <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
    </el-table>
  </div>

</template>
<script>
export default {
  data(){
    return{
      tableData:[]
    }
  },
  methods:{
    getUserData(){
      this.$get('/getUser').then(res => {
        console.log(res,'res')
        this.tableData = res.results
      })
    }
  },
  mounted(){
    console.log(this, this.$get,'this')
    this.getUserData()
  }
}
</script>