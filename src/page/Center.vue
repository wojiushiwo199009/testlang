<template>
  <el-main>
    <el-table :data="tableData">
      <el-table-column prop="date" label="日期" width="140"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </el-main>
</template>
<script>
export default {
  name: "Center",
  data() {
    const item = {
      date: "2016-03-03",
      name: "gjx",
      address: "sjz"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>
<style lang="less" scope>
.el-main {
  float: left;
  width: calc(100% - 300px);
}
</style>