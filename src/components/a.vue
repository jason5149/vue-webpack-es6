<style lang="sass">
</style>

<template>
    <div>Page A</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'This is page a',
                title: 'page a'
            }
        },
        route: {
            activate (transition) {
                // this.$root.$set('page a', this.title);
                transition.next();
            }
        }
    }
</script>
