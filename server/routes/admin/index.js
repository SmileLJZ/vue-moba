module.exports = app => {
  const express = require('express')
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')
  const router = express.Router({
    mergeParams: true
  })

  // 创建资源
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)

    if (req.Model.modelName === 'Category') {
      if (req.body.parent) {
        let parentObj = await req.Model.findById(req.body.parent)
        let { _id } = model
        // console.log(_id)
        parentObj.children.push(_id)
        // console.log(model)
        await req.Model.findByIdAndUpdate(req.body.parent, parentObj)
      }
    }

    res.send({
      code: 200,
      mssage: model
    })
  })
  // 更新资源
  router.put('/:id', async (req, res) => {

    if (req.Model.modelName === 'Category') {
      
      let UpdateObj = await req.Model.findById(req.params.id)
      // console.log(UpdateObj)
      // 更新前的旧父级
      if (UpdateObj.parent) {
        let parentObj = await req.Model.findById(UpdateObj.parent)
        if(parentObj) {
          // console.log(parentObj)
          parentObj.children.splice(parentObj.children.findIndex(item => item._id === req.params.id), 1)

          await req.Model.findByIdAndUpdate(parentObj.id, parentObj)
        }
      }
      // 更新后的新父级
      if (req.body.parent) {
        let parentObj = await req.Model.findById(req.body.parent)
        let { _id } = UpdateObj
        // console.log(_id)
        parentObj.children.push(_id)
        // console.log(model)
        await req.Model.findByIdAndUpdate(req.body.parent, parentObj)
      }

    }

    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  // 删除资源
  router.delete('/:id', async (req, res) => {
    if (req.Model.modelName === 'Category') {
      // 删除父级分类中的表数据关联
      let deleteObj = await req.Model.findById(req.params.id)
      if (deleteObj.parent) {
        let parentObj = await req.Model.findById(deleteObj.parent)
        if(parentObj) {
          // console.log(parentObj)
          parentObj.children.splice(parentObj.children.findIndex(item => item._id === req.params.id), 1)
          await req.Model.findByIdAndUpdate(parentObj.id, parentObj)
        }
      }
      //删除所有关联的子类
      if (deleteObj.children.length!=0) {
        deleteObj.children.map(async(v) => {
          await req.Model.findByIdAndDelete(v)
          // console.log(v)
        })
      }
      // 删除子类数据
      await req.Model.findByIdAndDelete(req.params.id)
      res.send({ success: true })
    } else {
      await req.Model.findByIdAndDelete(req.params.id)
      res.send({ success: true })
    }

  })
  // 资源列表
  router.get('/', async (req, res) => {
    const queryOptions = {}
    // if (req.Model.modelName === 'Category') {
    //   queryOptions.populate = 'parent';
    // }
    // const items = await req.Model.find().setOptions(queryOptions)
    const items = await req.Model.find()
    res.send(items)
  })
  // 资源详情
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
  // 登录校验中间件
  const authMiddleware = require('../../middleware/auth')
  const resourceMiddleware = require('../../middleware/resource')
  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

  const multer = require('multer')
  const MAO = require('multer-aliyun-oss');
  const upload = multer({
    dest: __dirname + '/../../uploads'
    // storage: MAO({
    //   config: {
    //     region: 'oss-cn-zhangjiakou',
    //     accessKeyId: '替换为你的真实id',
    //     accessKeySecret: '替换为你的真实secret',
    //     bucket: 'node-vue-moba'
    //   }
    // })
  })
  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://49.234.52.214:3000/uploads/${file.filename}`;//改成服务器地址
    //  file.url = `http://localhost:3000/uploads/${file.filename}`;
    res.send(file)
  })

  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 1.根据用户名找用户

    const user = await AdminUser.findOne({ username }).select('+password')
    assert(user, 422, '用户不存在')
    // 2.校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')
    // 3.返回token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    console.log(err)
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}