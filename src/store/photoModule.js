import axios from 'axios'

export default {
    state: {
        photos: [],
        dialogVisible: false,
        currentPhoto: {}
    },
    mutations: {
        setPhotos(state, payoad){
            state.photos = payoad
        },
        showDialog(state){
            state.dialogVisible = true
        },
        hideDialog(state){
            state.dialogVisible = false
        },
        setCurrentPhoto(state, payoad){
            state.currentPhoto = payoad
        },
        addPhoto(state, photo){
            state.photos.push(photo)
        }
    },
    getters: {
        getAllPhotos(state){
            return state.photos
        },
        getDialogVisible(state){
            return state.dialogVisible
        },
        getCurrentPhoto(state){
            return state.currentPhoto
        }
    },
    actions: {
        fetchPhotos(context) {
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
                .then(response => context.commit("setPhotos", response.data))
        },
    }
}