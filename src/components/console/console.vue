<template>
  <div class="console-body">
    <div class="console-navbar">
      <div class="d-flex flex-column flex-md-row align-items-center p-md-3 bg-black border-bottom border-black shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal text-white">
          <img class="logo" src="../../assets/images/wuyu-logo.png"> 物联网云网关管理平台
        </h5>
        <nav class="my-2 my-md-0">
          <el-dropdown>
            <el-button type="dashed">个人<i class="el-icon-arrow-down el-icon--right"></i></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-checkbox v-for="item of Org" :key="item.id" style="margin-left: 10px">
                <el-dropdown-item :class="{'ant-dropdown-menu-item-selected': item.user}">
                  <a @click="loadOrg">{{item.user}}</a>
                </el-dropdown-item>
              </el-checkbox>
            </el-dropdown-menu>
          </el-dropdown>
          <a class="p-3 text-white">
            <el-badge>
              <i class="fas fa-bell text-white" aria-hidden="true" style="font-size: 17px;" ></i>
            </el-badge>
          </a>
          <a class="p-3 text-white">帮助与文档</a>
          <el-dropdown placement="bottomRight">
            <div style="width: 121px;height: 20px;float: left">
              <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>
              <span class="el-dropdown-link">admin</span><i class="el-icon-arrow-down el-icon--right"></i>
            <el-dropdown-menu>
              <el-dropdown-item>
                <a rel="noopener noreferrer">个人中心</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a rel="noopener noreferrer" href="/">平台首页</a>
              </el-dropdown-item>
              <el-dropdown-item>
                <a rel="noopener noreferrer" @click="signout()">退出账号</a>
              </el-dropdown-item>
            </el-dropdown-menu>
            </div>
          </el-dropdown>
        </nav>
      </div>
    </div>
    <div class="console-sidebar" >
      <div class="menu active" active="menu-selected">
        <el-tooltip title="产品" placement="right">
          <router-link to="/console/products"  :class.native="{active: ctype ==1 }" @click.native="loadComponent(1)"><i class="fas fa-gem"></i></router-link>
        </el-tooltip>
      </div>
      <div class="menu active" active="menu-selected">
        <el-tooltip title="应用" placement="right">
          <router-link to="/console/applications"  :class.native="{active: ctype ==2 }" @click.native="loadComponent(2)"><i class="fab fa-adn"></i></router-link>
        </el-tooltip>
      </div>
      <div class="menu active" active="menu-selected" @click="drawer = !drawer">
        <el-tooltip title="组织" placement="right" >
          <router-link to="/console/party" :class.native="{active: ctype ==3 }" @click.native="loadComponent(3)" ><i class="fas fa-user-friends"></i></router-link>
        </el-tooltip>
      </div>
      <div class="menu active" active="menu-selected" >
        <el-tooltip title="消息" placement="right" >
          <router-link to="/console/news" :class.native="{active: ctype ==4 }" @click.native="loadComponent(4)">
            <i class="fas fa-comment"></i>
            <span class="message-count" v-if="message_count > 0">{{message_count > 99 ? "99+" : message_count}}</span>
          </router-link>
        </el-tooltip>
      </div>
      <div class="menu setting" active="menu-selected" linkActiveClass="myActive">
        <el-tooltip title="设置" placement="top">
          <router-link to="/console/settings" ><i class="fas fa-cog fa-spin" aria-hidden="true"></i></router-link>
        </el-tooltip>
      </div>
    </div>
    <div class="console-content">
      <Products v-if="ctype ==1"></Products>
      <Application v-else-if="ctype ==2"></Application>
      <Party v-else-if="ctype ==3"></Party>
      <News v-else-if="ctype ==4"></News>
      <Setting v-else></Setting>
    </div>
  </div>
</template>

<script>
  import Products from './products/products.vue'
  import Application from './applications/applications.vue'
  import Party from './party/party.vue'
  import News from './news/news.vue'
  import Setting from './settings/settings.vue'

    export default {
        name: "console",
      data(){
        return{
          drawer: false,
          ctype:1,
          AttachOrg: [],
          AuthUser: [],
          message_count : 0,
          Org :[
            {id :Date.now(), user:'个人' }
            ],
        }
      },
      created(){
        this.loadOrg()
      },
      methods: {
          loadOrg(){
            var orgAttach = {id: Date.now(),user: this.Org.user};
            var Org =JSON.parse(localStorage.getItem('cnts')||'[]');
            Org.unshift(orgAttach);
            localStorage.getItem('cmts',JSON.stringify(Org));
          },
        loadComponent(ctype) {
          if (ctype != null) {
            this.ctype = ctype;
          }
        }
        },
        components: {
          Products,
          Application,
          Party,
          News,
          Setting
        },
      }
</script>

<style scoped lang="scss">
  .el-dropdown-link {
    cursor: pointer;
    color: #ffffff;
    margin-top: 10px;
  }
  $sidebar_menu_width: 60px;
  $sidebar_menu_height: 45px;
  .console-body {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;

  .console-sidebar {
    bottom: 0;
  //top: $sidebar_menu_width;
    width: $sidebar_menu_width;
    height: calc(100% - #{$sidebar_menu_width});
    background-color: #09122A; // #001529
  position: fixed;
    text-align: center;
  //.logo {
    //  background-image: url(/assets/images/motong.png);
    //  width: 100%;
    //  height: $sidebar_menu_width;
    //  background-repeat: no-repeat;
    //  background-position: center;
    //  background-size: 35px;
    //}

  .menu {
    font-size: 20px;
    color: #a2a2a2;
    height: $sidebar_menu_height;
    line-height: $sidebar_menu_height;

  a {
    color: #a2a2a2;
    display: block;
  }

  &:hover {
     background-color: rgba(255, 255, 255, 0.08);
   }
  }

  .menu-line {
    border-bottom: 1px rgba(255, 255, 255, 0.2) dashed;
    margin: 10px 0;
  }

  .menu.menu-selected {
    background-color: #5D81D7; // #108ee9
  //background-image: linear-gradient(to left, #48c6ef 0%, #6f86d6 100%);
  //background-image: linear-gradient(to left, #ff0844 0%, #ca0468 100%);
    background-image: linear-gradient(to right, #118DE9, #6280D6);
  }

  .menu.menu-selected a {
    color: white !important;
  }

  .setting {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  }

  .console-navbar {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
  & > div:first-child {
      height: $sidebar_menu_width;
    }
  .bg-black {
    background-color: #000000!important;
  }
  .border-black {
    border-color: #000000!important;
  }

  .logo {
    height: calc(#{$sidebar_menu_width} - 10px); // 摩通
  //height: calc(#{$sidebar_menu_width} - 25px);   // 物语云
  }
  }

  .console-content {
    position: absolute;
    bottom: 0;
    top: $sidebar_menu_width;
    right: 0;
    left: $sidebar_menu_width;
    overflow: auto;
  }

  @media (max-width: 768px) {
    .console-sidebar {
      height: calc(100% - #{$sidebar_menu_width} - #{$sidebar_menu_height});
    //top: calc(#{$sidebar_menu_height} + #{$sidebar_menu_width});
    }
    .console-content {
      top: calc(#{$sidebar_menu_height} + #{$sidebar_menu_width});
    }
    .console-navbar > div:first-child {
      height: calc(#{$sidebar_menu_height} + #{$sidebar_menu_width});
    }
  }
  }

  .message-count-link {
    position: relative;
  .message-count {
    position: absolute;
    right: 18px;
    overflow: hidden;
    transform: translateX(50%);
    top: 0;
    height: 20px;
    border-radius: 10px;
    min-width: 20px;
    background: #f04134;
    color: #fff;
    line-height: 20px;
    text-align: center;
    padding: 0 6px;
    font-size: 12px;
    white-space: nowrap;
    transform-origin: -10% center;
    font-family: tahoma;
  }
  }
  .active{

    font-size: 28px;
    color: antiquewhite;

  }
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }

</style>
