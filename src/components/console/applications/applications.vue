<template>
  <div>
    <div class="sidebar">
      <el-menu class="sidebar-menu-ul" >
        <el-menu-item-group>
          <span title class="menu-title " style="color: white">应用管理</span>
          <ul>
            <el-menu-item><router-link to="/console/applications/overview" :class.native="{active: atype ==1 }" @click.native="loadComponent(1)">应用列表</router-link></el-menu-item>
            <el-menu-item><router-link to="/console/applications/analysis" :class.native="{active: atype ==2 }" @click.native="loadComponent(2)">应用分析</router-link></el-menu-item>
          </ul>
        </el-menu-item-group>
      </el-menu>
    </div>
    <div class="main">
      <Overview v-if="atype ==1"></Overview>
      <Analysis v-else="atype ==2"></Analysis>
    </div>
  </div>
</template>

<script>
  import Overview from './overview/overview.vue'
  import Analysis from './analysis/analysis.vue'
    export default {
        name: "applications",
      data(){
          return{
          atype:1
          }
      },
      methods:{
        loadComponent(atype){
          this.atype = atype;
        }
      },
      components:{
        Overview,
        Analysis
      }
    }
</script>

<style scoped lang="scss">
  .router-link-exact-active,.active{
    color: white;
    font-weight: bold;
  }
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
