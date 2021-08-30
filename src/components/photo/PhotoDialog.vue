<template>
    <v-dialog
        max-width="500"
        v-model="$store.getters.getDialogVisible"
        @click:outside="$store.commit('hideDialog')"
    >
        <v-card>
            <v-card-title>{{ $store.getters.getCurrentPhoto.title }}</v-card-title>
            <v-card-text>
                <v-img :src="$store.getters.getCurrentPhoto.url" />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>