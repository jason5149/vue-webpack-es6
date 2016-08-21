<style lang="sass">
</style>

<template>
    <div>Page B</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'This is page b',
                title: 'page b'
            }
        },
        route: {
            activate (transition) {
                // this.$root.$set('page b', this.title);
                transition.next();
            }
        }
    }
</script>
