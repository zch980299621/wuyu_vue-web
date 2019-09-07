<template>
  <div>
    <div class="view-breadcrumb">
      <el-breadcrumb class="ant-breadcrumb" separator-class="el-icon-arrow-right">
        <span  style="display: block;float: left">当前位置：</span>
        <el-breadcrumb-item>
          <router-link to="/console/products">产品</router-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          系列管理
        </el-breadcrumb-item>
      </el-breadcrumb>
      <template><i class="anticon anticon-right"></i></template>
    </div>
    <div class="container-fluid">
      <div class="mb-3">
        <el-row >
          <el-col style="width: 20%">
            <el-button type="primary" @click="showCategory_from('add',category_id)">新增</el-button>
          </el-col>
          <el-col class="text-right" style="width: 70%">
            <el-input suffix-icon="iconfont icon-sousuo" style="width: 220px;" placeholder="输入名称搜索" v-model="search" v-on:keyup.enter="onSearch" @click="onSearch"></el-input>
          </el-col>
        </el-row>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="名称" width="340"></el-table-column>
        <el-table-column prop="number" label="数量" width="250"></el-table-column>
        <el-table-column prop="note" label="描述" width="250"></el-table-column>
        <el-table-column label="操作" ><template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "categories",
      data(){
          return{
            modal_type: '',
            category_id: '',
            search : '',
            loading : true,
            tableData: [{
              name: '水培箱测试',
              number: 0,
              note: '没有描述'
            }]
          }
      },
      methods: {
        showCategory_from(modal_type,category_id) {
           this.modal_type = modal_type;
           if (modal_type == 'add') {
             const v = {name : '',note: ''};
             this.showCategory_from(modal_type,v);
           }else if (modal_type == 'update' && category_id == null) {
             this.category_id=category_id;
             const v = {name: data.data.name, note: data.data.note};
             this.category_from.showModal(modal_type, v);
           }
        },
        onSearch:function () {
          this.page = 1;
          this.category_id = '';
          if (this.validate()) {
            this.getCategories();
          }
        },
        getCategories() {
          this.loading = true;
        },
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        }
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
</style>
