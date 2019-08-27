<template>
  <div>
  <div class="sidebar">
    <el-menu class="sidebar-menu-ul" >
      <el-menu-item-group>
        <span title class="menu-title " style="color: white">产品</span>
        <ul>
          <el-menu-item><router-link to="/console/products/list" v-bind="{ ptype : 1 }">产品列表</router-link></el-menu-item>
          <el-menu-item><router-link to="/console/products/devices" v-bind="{ ptype : 2 }">设备管理</router-link></el-menu-item>
          <el-menu-item><router-link to="/console/products/rule" v-bind="{ ptype : 3 }">规则引擎</router-link></el-menu-item>
          <el-menu-item><router-link to="/console/products/categories" v-bind="{ ptype : 4 }">系列管理</router-link></el-menu-item>
          <el-menu-item><router-link to="/console/products/help" v-bind="{ ptype : 5}">帮助文档</router-link></el-menu-item>
        </ul>
      </el-menu-item-group>
    </el-menu>
  </div>
    <div class="main">
      <List></List>
    </div>
  </div>
</template>

<script>
  import List from './list/list.vue'
  import Devices from './devices/devices.vue'
  import Rule from './rule/rule.vue'
  import Categories from './categories/categories.vue'
    export default {
        name: "product",
      data(){
          return{
            ptype: 0
          }
      },
      components:{
        List,
        Devices,
        Rule,
        Categories
      }
    }
</script>

<style scoped lang="scss">
  $sidebar_menu_width: 240px;
  .sidebar {
    width: $sidebar_menu_width;
    position: fixed;
    bottom: 0;
    top: 60px;
  }
  .main {
    width: calc(100% - #{$sidebar_menu_width});
    position: absolute;
    right: 0;
    padding: 8px;
  }
  @media (max-width: 768px) {
    .sidebar {
      top: 105px;
    }
  }
  .sidebar-menu-ul {
    width: 100%;
    height: 100%;
    background: #182644 !important;
    .menu-title {
      font-size: 16px;
      height: 60px;
      line-height: 60px;
      color: #fff !important;
    }
    .ant-menu-item {
      -webkit-transition-property: background-color;
      -webkit-transition-duration: 0.3s;
      -webkit-transition-timing-function: ease;
    }
    .ant-menu-item-selected {
      background: linear-gradient(to right, #2D3A61 , #424F76,#2D3A61 ) !important;
    }
  }
</style>
