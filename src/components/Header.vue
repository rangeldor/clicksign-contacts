<template>
<v-row>
    <v-col cols="2">
        <LogoIcon />
    </v-col>

    <v-col cols="2">
        <CreateContactButton v-if="hasContact"/>
    </v-col>

    <v-col cols="8">
    pesquisa
    </v-col>
</v-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LogoIcon from '@/icons/LogoIcon.vue'
import CreateContactButton from '@/components/CreateContactButton.vue'
import { useContactsStore } from '@/stores/contacts'

const contactsStore = useContactsStore()
const hasContact = computed(() => contactsStore.contacts.length > 0)
</script>