const router = require('koa-router')();
const request = require('../request/request');

// 启动界面图像获取
router.get('/start-image/:size', async (ctx) => {
  const { size } = ctx.params
  ctx.body = await request({
    url: `/4/start-image/${size}`,
    method: 'GET'
  })
})

// 软件版本号查询-安卓
router.get('/version/android/:version', async (ctx) => {
  const { version } = ctx.params
  ctx.body = await request({
    url: `/4/version/android/${version}`,
    method: 'GET'
  })
})

// 软件版本号查询-ios
router.get('/version/ios/:version', async (ctx) => {
  const { version } = ctx.params
  ctx.body = await request({
    url: `/4/version/ios/${version}`,
    method: 'GET'
  })
})

module.exports = router