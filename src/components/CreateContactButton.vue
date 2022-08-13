<template>
    <v-btn class="create-button" rounded="pill" color="clicksign-light-yellowish-green" @click.prevent="toggleDialog">
        <v-icon start icon="mdi-plus"/>
        Criar contato
    </v-btn>

    <v-dialog v-model="dialog" max-width="400">
       <CreateUpdateContact @close-dialog="toggleDialog"/>
    </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CreateUpdateContact from '@/components/CreateUpdateContact.vue'

const dialog = ref<boolean>(false)

const toggleDialog = () => {
    dialog.value = !dialog.value
}
</script>

<style scoped>
.create-button {
    margin-top: 1.5rem;
    color: #fa7268 !important;
}
</style>