<template>
  <header  :class="{'fixed-header': fixed}" :style="{'z-index': zIndex}">
    <div class="d-flex flex-column flex-md-row align-items-center p-2 px-md-4 mb-3" :style="{'background-color': bgColor}" >
      <h5 class="my-0 mr-md-auto font-weight-normal" :style="{color : textColor}"><img class="mb-1" src="../assets/images/wuyu-logo.png" style="height: 45px;"> 物联网云网关管理平台</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link slot="Home" :style="{color : textColor}" to="/" class="p-2" >首页</router-link>
        <a class="p-2" :style="{color : textColor}">产品案例</a>
        <a class="p-2" :style="{color : textColor}">关于我们</a>
        <a class="p-2" :style="{color : textColor}">联系我们</a>
        <router-link  :style="{color : textColor}" class="p-2"  to="/console">控制台</router-link>
      </nav>
      <router-link  slot="login" to="/login" class="btn btn-outline-primary btn-sm" v-if="is_guest">登录</router-link>
      <div v-else="!is_guest">
        <el-dropdown trigger="click">
          <a class="ant-dropdown-link" :style="{color : textColor}">
            <el-avatar style="vertical-align: middle;background-color: rgb(0, 189, 154);"  icon="anticon anticon-user" ></el-avatar>
          </a>
          <el-dropdown-menu>
            <el-dropdown-item>
              <a rel="noopener noreferrer">个人中心</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a rel="noopener noreferrer" :click="signout()">退出账号</a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <router-view></router-view>
  </header>
</template>

<script>
    export default {
      name: "Header",
      data() {
        return {
          is_guest: true,
          textColor: '#343a40',
          bgColor: '#ffffff',
          fixed: true,
          zIndex: 1,

        }
      },
      methods: {
        signout(){

        }
      }
    }
</script>

<style scoped lang="scss">
  .fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  header .active {
    border: 1px #1a87c7 dashed;
    border-radius: 5px;
  }
</style>
