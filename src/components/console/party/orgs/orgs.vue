<template>
  <div>
    <div class="view-breadcrumb">
      <el-breadcrumb class="ant-breadcrumb" separator-class="el-icon-arrow-right">
        <span  style="display: block;float: left">当前位置：</span>
        <el-breadcrumb-item>
          <router-link to="/console/party">组织</router-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          所属组织
        </el-breadcrumb-item>
      </el-breadcrumb>
      <template><i class="anticon anticon-right"></i></template>
    </div>
    <div class="container-fluid">
      <div class="mb-3" style="float: left">
            <el-button type="primary" @click="isVisible = true" style="margin-bottom: 20px">创建组织</el-button>
        <el-container v-if="Org.length<1"><el-alert title="没有数据" type="warning"></el-alert></el-container>
        <div class="row">
          <div v-for="item of Org">
            <div class="col-md-6 col-lg-4 col-xl-3 mb-3">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>{{item.name}}</span>
                  <el-button style="float: right; padding: 3px 0" type="text" @click="openEdModel(item)">编辑</el-button>
                </div>
                  <p class="text-truncate">企业key：{{item.key}}</p>
                  <p class="text-truncate">企业描述：{{item.note || '-'}}</p>
                  <p>是否认证：<span v-if="item.certified === 1">是</span><span v-if="item.certified === 0">否</span></p>
                  <el-button size="small"  type="primary" @click="showDeleteConfirm(item.id)">退出企业</el-button>
              </el-card>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--创建组织-->
    <el-dialog  :visible.sync="isVisible"  width="30%" title="创建组织">
      <div>
        <el-form :model="ruleForm5" :rules="rules2" ref="ruleForm5" label-width="100px">
          <el-form-item  label="名称" prop="name">
            <el-input v-model="ruleForm5.name" placeholder="请输入组织名称"></el-input>
          </el-form-item>
          <el-form-item  label="描述" prop="note">
            <el-input v-model="ruleForm5.note" placeholder="请输入组织描述"></el-input>
          </el-form-item>
          <el-form-item  label="规模" prop="sacle">
            <el-input v-model="ruleForm5.sacle" placeholder="请输入组织规模"></el-input>
          </el-form-item>
          <el-form-item  label="执照号码" prop="licenceCode">
            <el-input v-model="ruleForm5.licenceCode" placeholder="请输入执照号码"></el-input>
          </el-form-item>
          <el-form-item style="margin-top: 20px">
            <el-button class="text-right" type="primary" @click="addOrg()">确认</el-button>
            <el-button class="ml-2" @click="isVisible = false">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
    <!--编辑组织-->
    <el-dialog  :visible.sync="isEdVisible"  width="30%" title="编辑组织">
      <div>
        <el-form :model="ruleForm6" :rules="rules3" ref="ruleForm6" label-width="100px">
          <el-form-item  label="名称" prop="name">
            <el-input v-model="ruleForm6.name" placeholder="请输入组织名称"></el-input>
          </el-form-item>
          <el-form-item  label="描述" prop="note">
            <el-input v-model="ruleForm6.note" placeholder="请输入组织描述"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "orgs",
      data(){
          return{
            isVisible : false,
            isEdVisible: false,
            editId: null,
            Org: [],
            ruleForm5:{
                name: '',
              note: '',
              sacle: '',
              licenceCode: ''
            },
            rules2: {
              name: [
                {required: true, message: '请输入组织名称', trigger: 'change'}
              ],
              note: [
                {required: true, message: '请输入组织描述', trigger: 'change'}
              ],
              sacle: [
                {required: true, message: '请输入组织规模', trigger: 'change'}
              ],
              licenceCode: [
                {required: true, message: '请输入执照号码', trigger: 'change'}
              ],
            },
            edObj : {
              name : null,
              note : null
            },
            ruleForm6: {
              name: '',
              note: '',
            },
            rules3: {
              name: [
                {required: true, message: '请输入组织名称', trigger: 'change'}
              ],
              note: [
                {required: true, message: '请输入组织描述', trigger: 'change'}
              ],
            }
          }
      },
      methods:{
        showDeleteConfirm(org_id){
          this.$confirm('确定退出该企业吗？')
        },
        openEdModel(item) {
          this.edObj.name = item.name;
          this.edObj.note = item.note;
          this.isEdVisible = true;
          this.editId = item.id;
        },
        addOrg(){
          this.isVisible = false;
          let obj = {
            name : this.createObj.name,
            note : this.createObj.note,
            licence_code : this.createObj.licenceCode,
            scale : this.createObj.scale
          }
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
  .box-card {
    width: 480px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>
