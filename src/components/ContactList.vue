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
                :style="{ backgroundColor: isHighlight(contact.id) ? setHighlightColor() : '#fff'}"
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
import { computed, ref } from 'vue'
import { useContactsStore } from '@/stores/contacts'
import UpdateContact from '@/components/UpdateContact.vue'
import ContactListItem from '@/components/ContactListItem.vue'
import DeleteContact from '@/components/DeleteContact.vue'

const contactsStore = useContactsStore()
const contactsAscendingOrdered = computed(() => { 
    const contactsOrdered = contactsStore.contacts.sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    })

    return contactsOrdered
})

const isHighlight = (id: number) => contactsStore.createdItemId === id
const setHighlightColorDefault = ref<string>('#fff3f2')
const setHighlightColor = () => {
    setTimeout(() => setHighlightColorDefault, 1000)

    return '#fff3f2'  
}
</script>

<style lang="scss" scoped>
.v-table .v-table__wrapper > table > tbody > tr:hover { background-color: #fff3f2 !important; }

</style>