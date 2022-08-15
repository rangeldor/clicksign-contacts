<template>
    <v-table class="mt-10">
        <thead>
            <tr>
                <th class="text-left text-clicksign-bluey-grey font-weight-regular">
                Contatos
                </th>
                <th class="text-left text-clicksign-bluey-grey font-weight-regular">
                Email
                </th>
                <th class="text-left text-clicksign-bluey-grey font-weight-regular">
                Telefone
                </th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="contact in contactsAscendingOrdered"
                :key="contact.id"
                :class="{'highlight': isHighlight(contact.id)}"
            >
                <ContactListItem :contact="contact"/>
            </tr>
        </tbody>
    </v-table>

    <v-dialog v-model="contactsStore.updateDialog" max-width="400">
        <UpdateContact />
    </v-dialog>

    <v-dialog v-model="contactsStore.deleteDialog" max-width="400">
        <DeleteContact />
    </v-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContactsStore } from '@/stores/contacts'
import UpdateContact from '@/components/form/UpdateContact.vue'
import ContactListItem from '@/components/contact/ContactListItem.vue'
import DeleteContact from '@/components/form/DeleteContact.vue'

const contactsStore = useContactsStore()
const contactsAscendingOrdered = computed(() => { 
    if (contactsStore.searchedName !== '') return filterContactsBySearchedName()

    return getOrderedContacts()
})

const getOrderedContacts = () => {
    const contactsOrdered = contactsStore.contacts.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    })

    return contactsOrdered
}

const filterContactsBySearchedName = () => {
    const cloneContacts = Object.assign(getOrderedContacts(), [])
    return cloneContacts.filter(contact => contact.name.startsWith(contactsStore.searchedName))
}

const isHighlight = (contactId: number) => contactsStore.createdItemId === contactId

</script>

<style scoped>
.v-table .v-table__wrapper > table > tbody > tr:hover { background-color: #fff3f2; }

@keyframes highlight {
    0% { background-color: #fff3f2; }
    99% { background-color: #fff3f2; }
    100% { background-color: transparent; }
}

.highlight {
    animation-name: highlight;
    animation-duration: 10s;
}
</style>