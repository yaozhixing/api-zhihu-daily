const router = require('koa-router')();
const request = require('../request/request');

// 热门列表
router.get('/news/hot', async (ctx) => {
  ctx.body = await request({
    url: '/3/news/hot',
    method: 'GET'
  })
})

module.exports = router