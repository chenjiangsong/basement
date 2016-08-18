

Vue.use(vueRouter)

var app  = Vue.extend({});

var router = new vueRouter({
    history: true, //html5模式 去掉锚点
    saveScrollPosition: true
});

router.map({
    '/index': {
        component: require('../components/index.vue')
    }
})

router.start(app, '#jesse')
