const router = require('koa-router')();

router.get('/', (ctx, next) => {
  ctx.body = '知乎日报接口文档'
})

module.exports = router