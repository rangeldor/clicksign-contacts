<template>
<td>
    <v-avatar color="red" class="mr-2" size="small">
      <span class="text-white">{{ firstLetter }}</span>
    </v-avatar>
    {{ contact.name }}
</td>
<td>{{ contact.email }}</td>
<td>{{ contact.phone }}</td>
<td>
    <v-btn
        class="ma-2"
        color="blue-darken-3"
        size="small"
        icon="mdi-pencil-outline"
        @click.prevent="handleUpdate()"
    />

    <v-btn
        class="ma-2"
        color="red-darken-3"
        size="small"
        icon="mdi-delete"
        @click.prevent="handleDelete()"
    />
</td>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { useContactsStore } from '@/stores/contacts'
import { IContact } from '@/interfaces/contacts'

interface Props {
  contact: IContact
}

const props = defineProps<Props>()
const { contact } = toRefs(props)

const contactsStore = useContactsStore()

const firstLetter = computed(() => contact.value.name.charAt(0).toUpperCase())

const handleUpdate = () => {
    contactsStore.setContactById(contact.value.id)
    contactsStore.updateDialog = !contactsStore.updateDialog
}

const handleDelete = () => {
    contactsStore.contactId = contact.value.id
    contactsStore.deleteDialog = !contactsStore.deleteDialog
}

</script>
