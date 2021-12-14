const router = require('koa-router')();
const request = require('../request/request');

// 栏目列表
router.get('/sections/list', async (ctx) => {
  ctx.body = await request({
    url: '/3/sections',
    method: 'GET'
  })
})

// 栏目详情
router.get('/sections/detail/:id', async (ctx) => {
  const { id } = ctx.params
  ctx.body = await request({
    url: `/3/section/${id}`,
    method: 'GET'
  })
})

module.exports = router