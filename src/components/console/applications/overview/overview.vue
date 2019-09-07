<template>
  <div>
    <div class="view-breadcrumb">
      <el-breadcrumb class="ant-breadcrumb" separator-class="el-icon-arrow-right">
        <span  style="display: block;float: left">当前位置：</span>
        <el-breadcrumb-item>
          <router-link to="/console/applications">应用管理</router-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          应用列表
        </el-breadcrumb-item>
      </el-breadcrumb>
      <template><i class="anticon anticon-right"></i></template>
    </div>
    <div class="container-fluid">
      <el-row class="mb-4 ant-row">
        <el-col style="width: 25%">
          <button class="ant-btn ant-btn-primary" @click="showAddProductModal()" >
            <span><i class="el-icon-plus"></i> 新增产品 </span>
          </button>
        </el-col>
        <el-col class="text-right" style="width: 75%">
          <el-select v-model="value" placeholder="全部应用">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-table
        :data="basicTable"  ref="basicTable"  style="width: 100%" >
        <el-table-column  label="应用名称" width="180" prop="{basicTable.name}">{{basicTable.name}}</el-table-column>
        <el-table-column  label="应用描述" width="150" prop="{basicTable.note}">{{basicTable.note}}</el-table-column>
        <el-table-column  label="应用key" width="130" prop="{basicTable.key}">{{basicTable.key}}</el-table-column>
        <el-table-column  label="应用Secret"  width="300" prop="{basicTable.secret}">{{basicTable.secret}}</el-table-column>
        <el-table-column  label="应用类别"  width="130" prop="{basicTable.type}">{{translateType(basicTable.type)}}</el-table-column>
        <el-table-column  label="应用模式"  width="130" prop="{basicTable.mode == 1 ? 'web应用' : 'mobile应用'}">{{basicTable.mode}}</el-table-column>
        <el-table-column  label="创建时间"  width="180" prop="{basicTable.create_time}">{{basicTable.create_time}}</el-table-column>
        <el-table-column label="操作" ><template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
        </el-table-column>
      </el-table>
    </div>
    <!--增加应用-->
    <el-dialog  :visible.sync="isVisible"  width="30%" title="增加应用">
      <div>
      <el-form :model="ruleForm4" :rules="rules4" ref="ruleForm4" label-width="100px">
        <el-form-item label="应用名称:" prop="name">
          <el-input v-model="ruleForm4.name" ></el-input>
        </el-form-item>
        <el-form-item label="应用描述:" prop="note">
          <el-input v-model="ruleForm4.note" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="应用模式:" prop="model">
          <el-select v-model="ruleForm4.model" placeholder="请选择应用模式">
            <el-option label="web应用" value="web"></el-option>
            <el-option label="mobile应用" value="mobile"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="margin-top: 20px">
          <el-button class="text-right" type="primary" @click="create()">确认</el-button>
          <el-button class="ml-2" @click="isVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "overview",
      data(){
          return {
            isVisible: false,
            options: [{
              value: '选项1',
              label: '全部应用'
            }, {
              value: '选项2',
              label: '托管应用'
            }, {
              value: '选项3',
              label: '第三方应用'
            }, {
              value: '选项4',
              label: 'IOS'
            }, {
              value: '选项5',
              label: 'Android'
            }],
            value: '',
            basicTable: [{
              name: '',
              note: '',
              key: '',
              secret: '',
              type: '',
              mode: 1,
              create_time: 0,
            }],
            ruleForm4: {
              name: '',
              note: '',
              model: '',
            },
            rules4: {
              name: [
                {required: true, message: '应用名称不能为空', trigger: 'blur'},
                {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
              ],
              note: [
                {required: true, message: '应用描述不能为空', trigger: 'blur'}
              ],
              model:[
                {required: true, message: '应用类别不能为空', trigger: 'change'}
              ]
            },
            webTypeValue: 1,
        mobileTypeValue: 0,
          }
      },
      methods: {
        showAddProductModal() {
          this.isVisible = true;
        },
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        },
        create(){
          let type;
          if (this.mode === 1) {
            type = this.webTypeValue;
          } else {
            type = this.mobileTypeValue;
          }
          const body = {
            name : this.name,
            note : this.note,
            mode : this.mode,
            type : type
          }
          this.isVisible = false;
          this.getList();
        },
        translateType(value) {
          switch (value) {
            case 1:
              return '托管应用';
            case 2:
              return '第三方应用';
            case 3:
              return 'IOS';
            case 4:
              return 'Android';
          }
        },
        getList(){
          console.log(11111)
          this.$http.get("api/applications?currentPage=${currentPage}&pageSize=${pageSize}&search=${search}").then(result => {
              console.log(result.data)
          })
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
