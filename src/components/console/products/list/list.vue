<template>
  <div>
  <div class="view-breadcrumb">
    <el-breadcrumb class="ant-breadcrumb">
      <span  style="display: block;float: left">当前位置：</span>
      <el-breadcrumb-item>
        <router-link to="/console/products">产品</router-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        产品列表
      </el-breadcrumb-item>
    </el-breadcrumb>
    <template><i class="anticon anticon-right"></i></template>
  </div>
  <div class="container-fluid">
    <el-row class="mb-3 ant-row">
      <el-col style="width: 30%">
        <button class="ant-btn ant-btn-primary" @click="showAddProductModal()" >
          <span><i class="el-icon-plus"></i> 新增产品 </span>
        </button>
        <el-select class="ml-2" style="width: 120px;" v-model="category_id">
            <el-option value=" '' " label="全部系列"></el-option>
            <el-option v-for="item of categories" :key="item.id" value="item.id" label="item.name"></el-option>
        </el-select>
      </el-col>
      <el-col class="text-right" style="width: 70%">
        <el-input suffix-icon="iconfont icon-sousuo" style="width: 220px;" placeholder="输入型号、名称关键字" v-model="search" v-on:keyup.enter="onSearch" @click="onSearch">
        </el-input>
        <el-button class="ml-2 ant-btn-group" style="padding: 0">
          <button class="ant-btn-primary" title="卡片展示" placement="top" type="templateId ==1 ? 'primary' : 'default'" @click="loadComponent(1)"><i class="fa fa-th-large" aria-hidden="true"></i></button>
          <button style="border-bottom-right-radius: 4px;border-top-right-radius: 4px;"  class="ant-btn-primary" title="列表展示" placement="top" type="templateId ==2 ? 'primary' : 'default'" @click="loadComponent(2)"><i class="fa fa-list" aria-hidden="true"></i></button>
        </el-button>
      </el-col>
    </el-row>
    <!--卡片展示/列表展示-->
    <el-container v-if="templateId == 1">
      <ProductCard  v-bind:Product="Product"  v-bind:ProductCategory="ProductCategory"  onsubmit="submitUpdateData($event)"></ProductCard>
    </el-container>
    <el-container v-if="templateId == 2">
      <ProductTable v-bind:Product="Product" v-bind:ProductCategory="ProductCategory"  onsubmit="submitUpdateData($event)"></ProductTable>
    </el-container>
    <div class="text-right">
      <pagination ></pagination>
    </div>
  </div>
  <el-dialog  :visible.sync="isVisible"  width="30%" title="新建产品">
    <div>
      <el-form :model="ruleForm1" :rules="rules" ref="ruleForm1" label-width="100px">
        <el-form-item  label="产品系列" prop="category">
          <el-select v-model="ruleForm1.category" placeholder="请选择产品系列">
            <el-option v-for="item of ProductCategory" :key="item.id" label="item.name">
            </el-option>
          </el-select>
          <el-button title="没有合适的系列？点击添加" @click="add_category()"><i class="el-icon-plus"></i></el-button>
        </el-form-item>
          <el-form-item  label="名称" prop="name">
            <el-input v-model="ruleForm1.name"></el-input>
          </el-form-item>
          <el-form-item  label="型号" prop="type">
            <el-input v-model="ruleForm1.type"></el-input>
          </el-form-item>
          <el-form-item  label="数据格式" prop="form">
            <el-select v-model="ruleForm1.form" placeholder="请选择数据格式">
              <el-option label="Alink JSON" value="Alink"></el-option>
              <el-option label="透传/自定义" value="open"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item  label="描述" prop="note">
            <el-input type="textarea" v-model="ruleForm1.note"></el-input>
          </el-form-item>
          <el-dialog :visible.sync="innerVisible" title="新增系列" width="30%" >
            <el-form :model="ruleForm">
              <el-form-item label="名称" prop="name" :rules="{ required: true,message: '请输入名称'}">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="描述" prop="note">
                <el-input type="textarea" v-model="ruleForm.note"></el-input>
              </el-form-item>
              <el-form-item style="margin-top: 20px">
                <el-button class="text-right" type="primary" @click="innerVisible = false">确认</el-button>
                <el-button class="ml-2" @click="innerVisible = false">取消</el-button>
              </el-form-item>
            </el-form>

          </el-dialog>

      </el-form>
    </div>
  </el-dialog>
  </div>
</template>

<script>
  import ProductCard from './products-card/products-card.vue'
  import ProductTable from './products-table/products-table.vue'
  import pagination from '../../../common/pagination/pagination.vue'
    export default {
        name: "list",
      data(){
        return{
          isVisible : false,
          innerVisible : false,
          category_id: '',
          search : '',
          value: '' ,
          page :1,
          pageSize : 8,
          templateId:1,
          categories :{
            id: "",
        name: "",
        note: "",
        owner_id: "",
        product_count: 0,
          },
          Product:[],
          ProductCategory:[],
          Pagination:[],
          ruleForm: {
            name: '',
            note: '',
          },
          ruleForm1:{
            category : '',
            name: '',
            type: '',
            form: '',
            note: ''
          },
          rules:{
            category:[
              {required: true,message: '请选择产品系列',trigger: 'change'}
            ],
            name:[
              { required: true,message: '请输入名称',trigger: 'blur'},
            ],
            type:[
               { required: true,message: '请输入产品型号',trigger: 'blur'},
            ],
            form:[
              { required: true,message: '请选择数据格式',trigger: 'change'},
            ],
          }
        }
      },
      created(){
        this.keyupEnter()
      },
      methods:{
        showAddProductModal(){
          this.isVisible = true;
        },
        keyupEnter() {
          document.onkeydown = e => {
            let body = document.getElementsByTagName('body')[0]
            if (e.keyCode === 13 && e.target.baseURI.match(/inputbook/) && e.target === body) {
              console.log('enter')
              this.onSearch()
            }
          }
        },
        onSearch:function () {
            this.page = 1;
            this.category_id = '';
            if (this.validate()) {
              this.getProducts();
            }
        },
        getProducts(){

        },
        loadComponent(templateId) {
          this.templateId = templateId;
        },
        submitUpdateData($event) {
          this.getProducts();
        },
        pageIndexChange($event){
          this.page = $event;
          this.getProducts();
        },
        add_category(){
          this.innerVisible = true;
        },
      },
      components:{
        ProductCard,
        ProductTable,
        pagination,
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
