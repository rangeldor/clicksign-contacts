<template>
    <v-card rounded="lg" class="contact__card">
        <v-card-header>
            <v-card-header-text>
                <v-card-title class="contact__title font-weight-regular">Excluir contato</v-card-title>
            </v-card-header-text>
        </v-card-header>

        <v-divider />

        <v-card-text>
            Deseja realmente excluir o contato?
        </v-card-text>

        <v-divider />

        <v-card-actions class="d-flex justify-end">
            <v-btn color="clicksign-orange" variant="text" size="small" rounded="pill" @click.prevent="cancel">Cancelar</v-btn>
            <v-btn color="clicksign-orange" variant="elevated" size="small" rounded="pill" @click.prevent="deleteContact">Excluir</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { useContactsStore } from '@/stores/contacts'

const contactsStore = useContactsStore()

const cancel = () => contactsStore.deleteDialog = !contactsStore.deleteDialog

const deleteContact = () => {
    contactsStore.delete(contactsStore.contactId)
    contactsStore.deleteDialog = !contactsStore.deleteDialog
}

</script>

<style lang="scss" scoped>
.contact {
    &__card {
        width: 27rem;
    }

    &__title {
        font-size: 1rem;
        color: #2a2d3b;
    }
}
</style>