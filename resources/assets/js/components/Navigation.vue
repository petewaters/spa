<template>
    <div>
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <router-link :to="{ name: 'home' }" class="navbar-brand">SPA</router-link>
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        &nbsp;
                    </ul>

                    <ul class="nav navbar-nav navbar-right" v-if="!authenticated">
                        <li><router-link :to="{ name: 'login' }">Login</router-link></li>
                        <li><router-link :to="{ name: 'register' }">Register</router-link></li>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right" v-if="authenticated">
                        <li><router-link :to="{ name: 'dashboard'}">Dashboard</router-link></li>
                        <li class="dropdown">
                            <router-link :to="{ name: 'dashboard' }" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                Pete Waters<span class="caret"></span>
                            </router-link>

                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <a href="#" @click.prevent="signout">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: mapGetters({
            user: 'auth/user',
            authenticated: 'auth/authenticated'
        }),
        methods: {
            ...mapActions({
                logout: 'auth/logout'
            }),
            signout () {
                this.logout().then(() => {
                    this.$router.replace({ name: 'home' })
                })
            }
        }
    }
</script>