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
import {getUserDetail} from '@/api'
export default {
  data(){
    return{
      tableData:[]
    }
  },
  watch: {

  },
  methods:{
    getUserData(){
      getUserDetail({id:2}).then(res => {
        this.tableData = res.data.results
      })
    },
  },
  mounted(){
    this.getUserData()
  }
}
</script>