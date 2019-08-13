<template>
  <header class="fixed-header">
  <div class="d-flex flex-column flex-md-row align-items-center p-2 px-md-4 mb-3" >
    <h5 class="my-0 mr-md-auto font-weight-normal" ><img class="mb-1" src="../assets/images/wuyu-logo.png" style="height: 45px;"> 物联网云网关管理平台</h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <a class="p-2" >首页</a>
      <a class="p-2" >产品案例</a>
      <a class="p-2" >关于我们</a>
      <a class="p-2" >联系我们</a>
      <a class="p-2" >控制台</a>
    </nav>
    <a class="btn btn-outline-primary btn-sm" >登录</a>
    <div>
        <a class="ant-dropdown-link" >
          <span style="vertical-align: middle;background-color: rgb(0, 189, 154);" ></span> <i class="anticon anticon-down"></i>
        </a>
        <ul >
          <li>
            <a rel="noopener noreferrer">个人中心</a>
          </li>
          <li >
            <a rel="noopener noreferrer" >退出账号</a>
          </li>
        </ul>
    </div>
  </div>
  </header>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min.js'
    export default {
        name: "Header"
    }
</script>

<style>
  .fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  header .active {
    border: 1px #1a87c7 dashed;
    border-radius: 5px;
  }
</style>
