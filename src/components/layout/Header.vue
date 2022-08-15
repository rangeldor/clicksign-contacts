<template>
<v-row>
    <v-col cols="2">
        <LogoIcon />
    </v-col>

    <v-col cols="2">
        <CreateContactButton v-if="hasContact"/>
    </v-col>

    <v-col cols="8">
        <SearchButton />
    </v-col>
</v-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LogoIcon from '@/icons/LogoIcon.vue'
import CreateContactButton from '@/components/button/CreateContactButton.vue'
import { useContactsStore } from '@/stores/contacts'
import SearchButton from '@/components/button/SearchButton.vue'

const contactsStore = useContactsStore()
const hasContact = computed(() => contactsStore.contacts.length > 0)
</script>