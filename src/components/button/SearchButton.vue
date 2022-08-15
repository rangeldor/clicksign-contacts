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
import { useContactsStore } from '@/stores/contacts'

const contactsStore = useContactsStore()
</script>