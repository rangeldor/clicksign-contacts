<template>
    <v-text-field v-model="contactsStore.searchedName" density="compact">
        <template v-slot:label>
            Buscar... 
            <v-icon style="vertical-align: middle">
                mdi-file-find
            </v-icon>
        </template>
    </v-text-field>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useContactsStore } from '@/stores/contacts'

const contactsStore = useContactsStore()
// const searchedName = ref<string>('')
// const filterContactsBySearch = () => { 
//     if (searchedName.value !== '') {
//         contactsStore.contacts = contactsStore.contacts.filter(contact => contact.name.startsWith(searchedName.value))
//     }
// }
</script>