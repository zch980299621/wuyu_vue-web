<template>
  <div class="console-body">
    <div class="console-navbar">
      <div class="d-flex flex-column flex-md-row align-items-center p-md-3 bg-black border-bottom border-black shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal text-white">
          <img class="logo" src="../../assets/images/wuyu-logo.png"> 物联网云网关管理平台
        </h5>
        <nav>
          <DropDownList>

          </DropDownList>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import DropDownList from '../../components/common/dropDownList/DropDownList.vue'
    export default {
        name: "console",
      components:{
        DropDownList
      },
    }
</script>

<style scoped lang="scss">
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

</style>
