<template>
<div>
  <div class="view-breadcrumb">
    <el-breadcrumb class="ant-breadcrumb" separator-class="el-icon-arrow-right">
      <span  style="display: block;float: left">当前位置：</span>
      <el-breadcrumb-item>
        <router-link to="/console/products">产品</router-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        图标库管理
      </el-breadcrumb-item>
    </el-breadcrumb>
    <template><i class="anticon anticon-right"></i></template>
  </div>
  <div class="container-fluid">
      <el-row >
        <div class="mb-3">
        <el-col style="width: 20%">
          <el-button type="primary" @click="openAddModal">上传</el-button>
        </el-col>
        <el-col class="text-right" style="width: 70%">
          <el-input suffix-icon="iconfont icon-sousuo" style="width: 220px;" placeholder="输入名称搜索" v-model="search" v-on:keyup.enter="onSearch" @click="onSearch"></el-input>
        </el-col>
        </div>
      </el-row>
    <div class="row">
      <div  style="margin: 10px 0;" class="col-md-2 col-sm-6" v-for="item of tableData">
        <div  style="position: relative" class="img-card2" @click="modalShow(item)">
          <i class="anticon anticon-close-circle delectbutton" style="font-size: 20px;position: absolute;top:10px;right:0;z-index: 999" @click="$event.stopPropagation();delete2(item.id)">  </i>
          <img src="item.path"/>
          <p style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{item.name}}</p>
        </div>
      </div>
    </div>
    <el-container v-if="infoShow">
      <el-alert type="warning" title="没有找到图片"></el-alert>
    </el-container>
    <div class="galleryModal" v-if="galleryShow">
      <div class="gallery-modal-content">
        <div class="gm-close-btn" @click="galleryShow = false">
          <i class="anticon anticon-close-circle" style="font-size: 30px;color: #000;cursor: pointer;"></i>
        </div>
        <div class="content-left">
          <div style="display: flex;align-items: center;justify-content: center;height: 610px">
            <div class="prev arrow" style="" @click="prev()">
              <i class="anticon anticon-left"></i>
            </div>
            <div class="img-zhong">
              <img src="mainImg.path"/>
            </div>
            <div class="next arrow" @click="next()">
              <i class="anticon anticon-right"></i>
            </div>
          </div>
          <div class="thumbnail">
            <img @click="touchImg(item)" v-for="item of tumbArr" src="item.path" :class="{'item-active': item.id == mainImg.id}"/>
          </div>
        </div>
        <div class="content-right">
          <h3>{{mainImg.name}}</h3>
          <p>上传时间：{{mainImg.create_time}}</p>
          <p>图片大小：{{formatSize(mainImg.size)}}</p>
          <div style="position: absolute;bottom: 40px;left: 12px">
            <el-button @click="openEditorModel(mainImg)" type="default"> <i class="anticon anticon-edit"></i><span>编辑图片</span></el-button>
            <el-button @click="delete2(mainImg.id)" type="danger"> <i class="anticon anticon-delete"></i><span>删除图标</span></el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="clearfix" style="margin-top: 20px">
    <pagination></pagination>
    </div>
  </div>
<!--//上传模态框-->
  <el-dialog  :visible.sync="isCtVisible"  width="30%" title="上传图片">
    <el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" label-width="100px">
      <el-form-item label="上传:" prop="up">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        style="float: left">
          <el-button size="small" type="primary" style="background-color: white;line-height: 1.5;display: inline-block;color:rgba(0,0,0,.65);float: left ">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item  label="名称:" prop="name">
        <el-input v-model="ruleForm2.name" size="small" style="padding-right: 24px"></el-input>
      </el-form-item>
      <el-form-item style="margin-top: 20px">
        <el-button class="ml-2" @click="innerVisible = false">取消</el-button>
        <el-button class="text-right" type="primary" @click="innerVisible = false">确认</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <!--编辑模态框-->
  <el-dialog :visible.sync="isEdVisible "  width="30%" title="编辑图片">
    <el-form :model="ruleForm3"  :rules="rules1"ref="ruleForm3" label-width="100px">
      <el-form-item  label="图片名称:" prop="name">
        <el-input v-model="ruleForm3.name" size="small" style="padding-right: 24px"></el-input>
      </el-form-item>
      <el-form-item style="margin-top: 20px">
        <el-button class="ml-2" @click="isEdVisible = false">取消</el-button>
        <el-button class="text-right" type="primary" @click="editModalFn">确认</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</div>
</template>

<script>
  import pagination from '../../../common/pagination/pagination.vue'
    export default {
        name: "icon",
      data(){
          return{
            fileList: [],
            isCtVisible: false,
            search : '',
            current:1,
            tableData : [],
            infoShow : false,
            galleryShow: false,
            mainImg: '',
            tumbArr:[],
            isEdVisible : false,
            createBtn : true,
            editForm : {
              id: null,
              name : '',
            },
            ruleForm2:{
              up: '',
              name:''
            },
            rules: {
              up: [
                {required: true, message: '请点击上传', trigger: 'change'}
              ],
              name: [
                {required: true, message: '请输入名称', trigger: 'blur'},
              ],
            },
            ruleForm3:{
              name:''
            },
            rules1: {
              name: [
                {required: true, message: '请输入图片名称', trigger: 'blur'},
              ],
            }
          }
      },
      methods:{
        getIconImages() {},
        openAddModal(){
          this.isEdVisible = true
        },
        // 搜索
        onSearch() {
          this.current = 1;
          this.getIconImages();
        },
        modalShow(data) {
          // 必须新建个数组，不能直接赋值;
          this.galleryShow = true;
          this.mainImg = data;
          const newArr= [];
          this.tumbArr = newArr.concat(this.tableData);
          const No = this.tumbArr.indexOf(this.mainImg);
          if (No > 9) {
            const num = No - 9;
            for (let i = 0; i < num; i++) {
              const delVal = this.tumbArr.shift();
              this.tumbArr.push(delVal);
            }
          }
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        },
        openEditorModel(data) {
          this.isEdVisible = true;
          this.editForm.name = data.name;
          this.editForm.id = data.id;
        },
        delete2(id) {
          this.$alert('您是否确认要删除这项内容','提示',{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type:'warning'
          }).then(()=>{
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        editModalFn() {
          this.isEdVisible = false
        }
      },
      components:{
        pagination
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
  .img-card2{
    position: relative;
    width:100%;
    cursor: pointer;
    border-radius: 7px;
    perspective: 1000px;
    overflow: hidden;
    transform-style: preserve-3d;

    img{
      position: relative;
      width: 100%;
      object-fit:cover;
      border-radius: 7px;
      overflow: hidden;
      transition: all 0.45s ease-in-out 0s;
    }
    p{
      padding: 10px 0;
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: #ffffff;
      background: linear-gradient(to top, #000, transparent);
      position: absolute;
      bottom: -13px;
      left: 0;
    }
    .delectbutton{
      display:none;
    }
    &:hover img{
      transform:scale(1.1);
    }
    &:hover .delectbutton{display:block;

    }
  }
  .galleryModal{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #373737;
    background-color: rgba(55, 55, 55, 0.6);
    height: 100%;
    z-index: 88;

    .gallery-modal-content{
      display: flex;
      width: 1050px;
      position: relative;
      margin: 0 auto;
      top: 100px;
      background: #4d4d4d;
      .gm-close-btn{
        position: absolute;
        top: -15px;
        right: -15px;
        z-index: 2;
      }
    }
  }
  .content-left{
    padding: 20px;
    width: 700px;
    background: #9E9E9E;
    height: 700px;
  }
  .img-zhong{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 100%;
    img{
      max-width: 100%;
    }
  }
  .arrow{
    font-size: 50px;
    text-align: center;
    cursor: pointer;
  }
  .content-right{
    position: relative;
    width: 100%;
    background: #ffffff;
    padding: 20px;
    h3 {
      font-size: 18px;
    }
    p{
      margin: 20px 0;
    }
  }
  .thumbnail{
    width: 650px;
    height: 65px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    img{
      width: 65px;
      height: 65px;
      cursor: pointer;
      filter:brightness(50%)
    }
  }
  .img-active{
    border: 1px solid #00A2FF;
    filter:brightness(100%) !important;
  }
</style>
