<template>
    <header>
        <ul>
            <li>
                <p>
                    Pages Visited: {{ pagesVisited }} - <span @click="resetCounter">Reset</span> (Vuex)
                </p>
            </li>
            <br />
            <li v-for="link in links">
                <router-link :to="link.path">{{ link.name }}</router-link>
            </li>
        </ul>
    </header>
</template>

<script>

    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                links: [
                    { path: '/home', name: 'Home' },
                    { path: '/about', name: 'About' },
                    { path: '/contact', name: 'Contact' }
                ]
            }
        },
        computed: {
          ...mapGetters({
            pagesVisited: 'pagesVisited',
          }),
        },
        methods: {
            resetCounter() { this.$store.dispatch('reset') }
        }
    }

</script>

<style lang="scss" scoped>
    header {
        ul {
            margin: 0;
            padding: 0;
            li {
                list-style: none;
                display: inline-block;
                a, p {
                    color: black;
                    padding: 0px 10px;
                    text-decoration: none;
                    &:hover {
                        color: black;
                    }
                }
                p {
                    font-size: 12px;
                    color: gray;
                    &:hover { color: gray; }
                    span {
                        cursor: pointer;
                        color: black;
                    }
                }
            }
        }
    }
</style>
