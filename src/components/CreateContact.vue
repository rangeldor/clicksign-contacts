<template>
    <v-card rounded="lg" class="contact__card">
        <v-card-header>
            <v-card-header-text>
                <v-card-title class="contact__title font-weight-regular">Criar novo contato</v-card-title>
            </v-card-header-text>
        </v-card-header>

        <v-divider />

        <v-card-text>
            <v-form ref="formRef">
                <label for="name">Nome</label>
                <v-text-field
                    v-model="form.name"
                    density="compact"
                    variant="outlined"
                    required
                />

                <label for="email">E-mail</label>
                <v-text-field
                    v-model="form.email"    
                    density="compact"
                    variant="outlined"            
                />

                <label for="phone">Telefone</label>
                <v-text-field
                    v-model="form.phone"     
                    density="compact"
                    variant="outlined"      
                />
            </v-form>
        </v-card-text>

        <v-divider />

        <v-card-actions class="d-flex justify-end">
            <v-btn color="clicksign-orange" variant="text" size="small" rounded="pill" @click.prevent="resetForm">Cancelar</v-btn>
            <v-btn color="clicksign-orange" variant="elevated" size="small" rounded="pill" :disabled="!canSave" @click.prevent="createContact">Salvar</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useContactsStore } from '@/stores/contacts'
import { IContact } from '@/interfaces/contacts'

const contactsStore = useContactsStore()

const emit = defineEmits<{(e: 'close-dialog'): void }>()
const formRef = ref<HTMLFormElement>()
const canSave = computed(() => form.value.name !== '')

const resetForm = () => {    
    formRef.value?.reset()
    contactsStore.createDialog = !contactsStore.createDialog
}

const form = ref<IContact>({
    id: 0,
    name: '',
    email: '',
    phone: ''
})

const createContact = () => {
    form.value.id = Math.random()
    contactsStore.create(form.value)
    contactsStore.createDialog = !contactsStore.createDialog
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