<template>
    <v-col cols="4">
        <v-card @click="openPhoto">
            <v-card-title> {{newName}} </v-card-title>
            <v-img 
                :src="photo.url"
                width="200"
                height="200"
            />
        </v-card>
    </v-col>
</template>

<script>
    export default {

        props: {
            photo: {
                type: Object,
                required: true,
            }
        },
        methods: {
            openPhoto(){
                this.$store.commit("showDialog")
                this.$store.commit("setCurrentPhoto", this.photo)
            }
        },
        computed: {
            newName() {
                return this.photo.title + ' - ' + this.photo.id
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>