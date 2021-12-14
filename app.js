const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser())

const index = require('./router/index')
const news = require('./router/news')
const sections = require('./router/sections')
const themes = require('./router/themes')
const hot = require('./router/hot')
const others = require('./router/others')

app.use(index.routes(), index.allowedMethods()); // 首页
app.use(news.routes(), news.allowedMethods()); // 日报
app.use(sections.routes(), sections.allowedMethods()); // 栏目
app.use(themes.routes(), themes.allowedMethods()); // 主题
app.use(hot.routes(), hot.allowedMethods()); // 热门
app.use(others.routes(), others.allowedMethods()); // 其他

app.listen(2010, () => {
  console.log('api-zhihu-daily server is starting at port 2010')
})