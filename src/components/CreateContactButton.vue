<template>
    <v-btn class="create-button" rounded="pill" color="clicksign-light-yellowish-green" size="small" @click.prevent="toggleDialog">
        <v-icon start icon="mdi-plus"/>
        Criar contato
    </v-btn>

    <v-dialog v-model="contactsStore.createDialog" max-width="400">
       <CreateContact />
    </v-dialog>
</template>

<script setup lang="ts">
import CreateContact from '@/components/CreateContact.vue'
import { useContactsStore } from '@/stores/contacts'

const contactsStore = useContactsStore()
const toggleDialog = () => {
    contactsStore.createDialog = !contactsStore.createDialog
}
</script>

<style scoped>
.create-button {
    color: #fa7268 !important;
}
</style>