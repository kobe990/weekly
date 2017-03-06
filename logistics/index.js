'use strict'

function run(config) {
  var app = require('koa')()
  var nunjucks = require('nunjucks')
  var router = require('koa-router')()
  var koaStatic = require('koa-static')
  // 配置模版路径
  nunjucks.configure(config.templatePath, { autoescape: true, watch: true })

  // 配置静态文件路径
  app.use(koaStatic(config.staticPath), {maxage: 0})

  router.get('/', function *(next) {
    this.body = nunjucks.render('index.html')
  })

  router.get('/mock/:mockFile', function *(next) {
    this.body = require("./mockdata/" + this.params.mockFile)
  })

  router.get('/test', function *(next) {
    console.log("enter test")
    while(true) {

    }
  })

  router.get('/test1', function *(next) {
    this.set('Cache-Control', 'no-cache');
    this.set('Expires', 0);
    this.set('Pragma', "no-cache");
    this.set('Cache-Control', 'no-store');
    this.body = nunjucks.render('test.html')
  })

  router.get('/detail', function *(next) {
    this.set('Cache-Control', 'no-cache');
    this.set('Expires', 0);
    this.set('Pragma', "no-cache");
    this.body = nunjucks.render('detail.html')
  })

  router.get('/home/pc.htm', function *(next) {
    console.log('enter pc.htm')
    while(true) {

    }
   // this.body = nunjucks.render('test.html')
  })

  app
    .use(router.routes())
    .use(router.allowedMethods())
  //app.use(function *() {
  //  this.response.body = nunjucks.render('index.zxa', { name: 'zxazxa' });
  //})
  app.listen(3001)
}

module.exports.run = run