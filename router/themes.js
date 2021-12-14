const router = require('koa-router')();
const request = require('../request/request');

// 主题列表
router.get('/themes/list', async (ctx) => {
  ctx.body = await request({
    url: '/4/themes',
    method: 'GET'
  })
})

// 主题详情
router.get('/themes/detail/:id', async (ctx) => {
  const { id } = ctx.params
  ctx.body = await request({
    url: `/4/theme/${id}`,
    method: 'GET'
  })
})

// 主题详情
router.get('/themes/:id/before/:newId', async (ctx) => {
  const { id, newId } = ctx.params
  ctx.body = await request({
    url: `/4/theme/${id}/before/${newId}`,
    method: 'GET'
  })
})

module.exports = router