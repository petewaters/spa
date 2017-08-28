<template>
    <div>
        Dashboard

        {{ index }}
    </div>
</template>

<script>
    export default {
        data () {
            return {
                index: null
            }
        },
        mounted () {
            axios.get('/api/dashboard').then((response) => {
                this.index = response.data.data
            })
        }
    }
</script>