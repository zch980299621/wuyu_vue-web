<template>
  <div>
  <div class="view-breadcrumb">
    <el-breadcrumb  class="ant-breadcrumb"  separator-class="el-icon-arrow-right">
      <span  style="display: block;float: left">当前位置：</span>
      <el-breadcrumb-item >
        <router-link to="/console/products">产品</router-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        设备管理
      </el-breadcrumb-item>
    </el-breadcrumb>
    <template><i class="anticon anticon-right"></i></template>
  </div>
    <div class="container-fluid" >
      <el-row class="mb-4 ant-row">
        <el-col style="width: 25%">
        <el-select style="width: 120px;" v-model="selectedValue" onchange="selectedValue=$event;selectedChange()" value="select">
          <el-option v-for="item of devicesSelects" :key="item.id" value="item.id" label="item.name"></el-option>
        </el-select>
        <el-button type="primary" style="margin-left: 10px;" :disabled="!selectedValue" @click="isCtVisible = true">增加设备</el-button>
        </el-col>
      </el-row>
      <div class="clearfix">
        <h2 class="title fa-pull-left">设备列表</h2>
        <el-button class="fa-pull-right"  type="primary" @click="refresh()" size="small">
          <i class="anticon anticon-reload"></i>
          刷新
        </el-button>
      <div class="card" style="width:100%;">
        <div class="row">
          <div class="col-md-4 text-center">
            <p>设备总数</p>
            <div>{{total}}</div>
          </div>
          <div class="col-md-4 border-two text-center">
            <p>在线设备数</p>
            <div class="text-success">{{online}}</div>
          </div>
          <div class="col-md-4 text-center">
            <p>激活设备数</p>
            <div class="text-primary"> {{activation}}</div>
          </div>
        </div>
      </div>
      <div class="clearfix" style="width: 100%;margin: 20px 0">
        <div class="fa-pull-left">
          <el-button  :disabled="true" type="primary" style="margin: 0 10px 10px 0" @click="deleteAll()">批量删除</el-button>
          <el-button  :disabled="true" type="primary" style="margin: 0 10px 10px 0" @click="disabledAll()">禁用</el-button>
          <el-button  :disabled="true" type="primary" style="margin: 0 10px 10px 0" @click="disabledAll()">启用</el-button>
        </div>
        <div class="fa-pull-right">
          <div style="width: 300px;">
            <el-input placeholder="输入设备名称" style="width: 200px" v-model="searchValue"></el-input>
            <el-button type="primary" @click="search()">搜索</el-button>
          </div>
        </div>
      </div>
        <el-table
        :data="tableData"  ref="multipleTable"  tooltip-effect="dark"  style="width: 100%"  @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="80"></el-table-column>
          <el-table-column  label="设备名称" width="250"><template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column  prop="product_name"  label="所属产品" width="250"></el-table-column>
          <el-table-column  label="Secret" width="400" ><template slot-scope="scope">{{ tableData.secretShow ? scope.row.secret : '****************' }}
          <button v-if="!tableData.secretShow" @click="tableData.secretShow = true" style="margin-left: 20px;border-radius: 10px" ><i class="fa fa-eye"></i></button>
          <button v-if="tableData.secretShow" @click="tableData.secretShow = false" style="margin-left: 20px;border-radius: 10px" ><i class="fa fa-eye-slash"></i></button>
          </template>
          </el-table-column>
          <el-table-column prop="status" label="在线状态"  width="180">
          </el-table-column>
          <el-table-column label="操作" ><template slot-scope="scope">
            <router-link to="/console/products/{data.product_id/devices/testyfGZSTKJZN01">查看</router-link>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
          </el-table-column>
        </el-table>
        <pagination ></pagination>
    </div>
  </div>
    <div>
      <DeiveDetail></DeiveDetail>
    </div>
  </div>
</template>

<script>
  import pagination from '../../../common/pagination/pagination.vue'
  import DeiveDetail from './device-detail.vue'
    export default {
        name: "devices",
      data(){
          return{
            data:[],
            selectedValue : '',
            devicesSelects :[],
            selectedProduct : {name: ' '},
            isCtVisible : false,
            total : 0,
            online: 0,
            activation:0,
            searchValue : '',
            tableData: [{
              name: 'testlcTPX02',
              product_name : '土培箱测试',
              secret: '**************** ',
              status: '离线',
              secretShow: ''
            },]
          }
      },
      methods:{
        selectedChange() {
          this.devicesSelects.forEach((v, k) => {
            if (this.selectedValue === v.id) {
              this.selectedProduct = v;
            }
          });
          this.getList();
          this.getStatistic();
        },
        refresh(){
          this.getList();
          this.getStatistic();
        },
        getList(){

        },
        getStatistic(){

        },
        deleteAll(){

        },
        disabledAll(){

        },
        search(){
          this.getList(this.searchValue);
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        }
      },
      components:{
        pagination,
        DeiveDetail
      }
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
  .title{
    font-size: 18px;
    margin: 20px 0;
  }
  .border-two{
    border-left: 1px solid #dadada;
    border-right: 1px solid #dadada;
  }
  .card{
    padding: 15px 24px !important;
    border: 1px solid #e8e8e8;
  p{
    font-size: 20px;
  }
  div{
    font-size: 24px;
  }
  }
</style>
