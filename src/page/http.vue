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
import {getUser} from '@/api'
// import service from '@/api/axios'
export default {
  data(){
    return{
      tableData:[]
    }
  },
  methods:{
    getUserData(){
      getUser().then(res => {
        this.tableData = res.data.results
      })
    },
  },
  mounted(){
    this.getUserData()
    //主动取消请求的方法
    // setTimeout(()=>{
    //   service.cancle('CancleToken')
    // },100)
    
  }
}
</script>