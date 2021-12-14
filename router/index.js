const router = require('koa-router')();

router.get('/', (ctx) => {
  ctx.body = '知乎日报接口文档'
})

module.exports = router