var router = require('koa-router')();
const sleep = function(sec) {
  setTimeout(function() {
    console.log('start');
  }, sec)
}

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };

  await ctx.render('index', {
  })

  console.time(`${ctx.method} ${ctx.url}`);
  return next().then(() => {
    console.timeEnd(`${ctx.method} ${ctx.url}`);
  });

})

module.exports = router;
