//user
const  AuthUser ={
  userid: "",
nickname: "",
username: "",
mobile:  "",
email: "",
sex: 0,
create_time: "",
key: "",
secret: "",
party_type: 0,
real_name: "",

icon: "",
icon_local: "",
}
//org
const Org ={
  certified: 0,
  certified_time: "",
  industry: 0,
  licence_code: "",
  licence_image: "",
  name: "",
  note: "",
  id: "",
  scale: 0,
  secret: "",
  key: "",
}
const AttachOrg ={
  party_id: "",
  party_type: "",  // personal | organization
  party_name: "",
}

const OrgUser ={
  create_time: "",
  nickname: "",
  real_name: "",
  user_id: "",
  username: "",
  mobile: "",
  email: "",
  user_role: 0,
  sex: 0,
}

//product
const Product={
  owner_id: "",
id: "",
category_id: "",
category_name: "",
code: "",
name: "",
note: "",
icon: "",
poster: "",
secret: "",
auth :0,
encode: "",
enabled: 0,
deleted: 0,
delete_user: "",
delete_time: "",
create_user: "",
create_time: "",
protocols: "",
}

//ProductCategory
const ProductCategory={
  id: "",
name: "",
note: "",
owner_id: "",
product_count: 0,
}

//Pagination
const Pagination = {
  first: 0, // 首页
current: 0, // 当前页
before: 0, // 当前页面的前一页
next: 0,  // 当前页面的下一页
last: 0,  // 记录集中的最后一页
total_pages: 0, // 总页数
total_items: 0, // 总记录条数
pageSize: 0, // 每页数量
}
export default {
  AuthUser,
  AttachOrg,
  OrgUser,
  Org,
  Product,
  ProductCategory,
  Pagination
}

