<template>
  <div>
  <div class="view-breadcrumb">
    <el-breadcrumb class="ant-breadcrumb" separator-class="el-icon-arrow-right">
      <span  style="display: block;float: left">当前位置：</span>
      <el-breadcrumb-item>
        测试页面
      </el-breadcrumb-item>
    </el-breadcrumb>
    <template><i class="anticon anticon-right"></i></template>
  </div>
    <div class="container-fluid">
      <h5>测试页面</h5>
    </div>
  </div>
</template>

<script>
    export default {
        name: "news"
    }
</script>

<style scoped lang="scss">
  .view-breadcrumb {
    border-bottom: 1px #d6d6d6 dashed;
    background-color: inherit;
    padding:0.25rem 0 0.5rem 0;
    margin-bottom: 15px;
  }
  .ant-breadcrumb{
    font-family: "Monospaced Number","Chinese Quote",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0,0,0,.65);
  }
  .ant-row{
    margin-left: 0;
    margin-right: 0;
    height: auto;
    zoom: 1;
    display: block;
    box-sizing: border-box;
    position: relative;
  }
  .ant-btn {
    line-height: 1.5;
    display: inline-block;
    font-weight: 400;
    cursor: pointer;
    background-image: none;
    border: 1px solid #d9d9d9;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    height: 32px;
    position: relative;
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    white-space: nowrap;
    text-align: center;
    touch-action: manipulation;
  }
  .ant-btn-primary{
    color: white;
    background-color: #1890ff;
    border-color: #1890ff;
  }
  // 按钮组和其它组件对不齐
     .ant-btn-group{
       position: relative;
       line-height: 1.5!important;
     }
</style>
