Vue.use(vueRouter)

var app  = Vue.extend({});

var router = new vueRouter({
    history: true, //html5模式 去掉锚点
    saveScrollPosition: true
});

var Foo = Vue.extend({
  template: '<p>This is foo!</p>'
})

router.map({
    '/index': {
        component: Foo
    }
})

router.start(app, '#jesse')
