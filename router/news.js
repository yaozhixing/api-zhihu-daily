const router = require('koa-router')();
const request = require('../request/request');

// 最新日报列表
router.get('/news/latest', async (ctx) => {
  ctx.body = await request({
    url: '/4/news/latest',
    method: 'GET'
  })
})

// 过往日报列表
router.get('/news/before/:date', async (ctx) => {
  const { date } = ctx.params
  ctx.body = await request({
    url: `/4/news/before/${date}`,
    method: 'GET'
  })
})

// 日报内容
router.get('/news/detail/:id', async (ctx) => {
  const { id } = ctx.params
  ctx.body = await request({
    url: `/4/news/${id}`,
    method: 'GET'
  })
})

// 日报内容-评论点赞
router.get('/news/detail/others/:id', async (ctx) => {
  const { id } = ctx.params
  ctx.body = await request({
    url: `/4/story-extra/${id}`,
    method: 'GET'
  })
})

// 长评论
router.get('/news/detail/long-comments/:id', async (ctx) => {
  const { id } = ctx.params
  ctx.body = await request({
    url: `/4/story/${id}/long-comments`,
    method: 'GET'
  })
})

// 短评论
router.get('/news/detail/short-comments/:id', async (ctx) => {
  const { id } = ctx.params
  ctx.body = await request({
    url: `/4/story/${id}/short-comments`,
    method: 'GET'
  })
})

// 推荐者
router.get('/news/detail/recommenders/:id', async (ctx) => {
  const { id } = ctx.params
  ctx.body = await request({
    url: `/4/story/${id}/recommenders`,
    method: 'GET'
  })
})

module.exports = router