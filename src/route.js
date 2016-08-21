export default (router) => {
    router.map({
        '/': {
            name: 'home',
            component(resolve) {
                return require(['./components/home.vue'], resolve);
            }
        },
        '/a': {
            name: 'a',
            component(resolve) {
                return require(['./components/a.vue'], resolve);
            }
        },
        '/b': {
            name: 'b',
            component(resolve) {
                return require(['./components/b.vue'], resolve);
            }
        }
    })
}
