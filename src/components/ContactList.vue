<template>
    <div>
lista de contatos
    </div>
</template>

<script setup lang="ts">
import { useContactsStore } from '@/stores/contacts'

const contactsStore = useContactsStore()
</script>