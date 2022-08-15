<template>
    <ContactList v-if="hasContact"/>
    <InitialScreen v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import InitialScreen from '@/components/layout/InitialScreen.vue'
import ContactList from '@/components/contact/ContactList.vue'
import { useContactsStore } from '@/stores/contacts'

const contactsStore = useContactsStore()
const hasContact = computed(() => contactsStore.contacts.length > 0)
</script>
