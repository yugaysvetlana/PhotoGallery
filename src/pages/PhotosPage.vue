<template>
    <v-row>
        <PhotoForm @addPhoto="addPhoto" />
        <Photo
            v-for="photo in $store.getters.getAllPhotos"
            v-bind:photo = "photo"
            v-bind:key = "photo.id"

        />
        <PhotoDialog/>
    </v-row>
</template>

<script>
import Photo from "@/components/photo/Photo"
import PhotoForm from "@/components/photo/PhotoForm"
import PhotoDialog from "@/components/photo/PhotoDialog"

    export default {
        components : {
            Photo,
            PhotoForm,
            PhotoDialog,
        },
        data: () => ({
            photos: [],
            // currentphoto: {},
            // dialogvisible: false,
        }),
        mounted() {
            this.$store.dispatch("fetchPhotos")
        },
        methods: {
            // fetchTodo() {
            //     this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
            //         .then(response => this.photos = response.data)
            // },
            addPhoto(photo){ 
                //this.photos.push(photo)
                this.$store.commit("addPhoto", photo)
            },
            // openPhoto(photo) {
            //     this.currentphoto = photo
            //     this.dialogvisible = true
            // }
        },
    }
</script>

<style lang="scss" scoped>

</style>