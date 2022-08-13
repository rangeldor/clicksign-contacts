<template>
    <v-card rounded="lg">
        <v-card-header>
            <v-card-header-text>
                <v-card-title class="contact__title font-weight-regular">{{ tittleName }}</v-card-title>
            </v-card-header-text>
        </v-card-header>

        <v-divider />

        <v-card-text>
            <v-form ref="formRef">
                <v-text-field
                    v-model="form.name"
                    label="Nome"
                    required
                />

                <v-text-field
                    v-model="form.email"
                    label="E-mail"                    
                />

                <v-text-field
                    v-model="form.phone"
                    label="Telefone"                    
                />
            </v-form>
        </v-card-text>

        <v-divider />

        <v-card-actions class="d-flex justify-end">
            <v-btn color="clicksign-orange" variant="text" size="small" rounded="pill" @click.prevent="handleCancel">Cancelar</v-btn>
            <v-btn color="clicksign-orange" variant="elevated" size="small" rounded="pill" :disabled="!canSave" @click.prevent="handleSave">Salvar</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue'

interface Props {
  id?: number
  update?: boolean
}

const emit = defineEmits<{(e: 'close-dialog'): void }>()
const props = withDefaults(defineProps<Props>(), {
  id: 0, 
  update: false
})
const { update } = toRefs(props)

const formRef = ref<HTMLFormElement>()
const resetForm = () => {    
    formRef.value?.reset()
    emit('close-dialog')
}

const handleCancel = () => {
    resetForm()    
}

const handleSave = () => {
    update.value ? updateContact() : createContact()
    resetForm()
}

const createContact = () => {
    console.log('chegou create')   
}

const updateContact = () => {
    console.log('chegou update')   
}

const form = ref({
    name: '',
    email: '',
    phone: ''
})

const tittleName = computed(() => update.value ? 'Editar contato' : 'Criar novo contato')
const canSave = computed(() => form.value.name !== '')
</script>

<style lang="scss" scoped>
.contact {
    &__title {
        font-size: 1rem;
        color: #2a2d3b;
    }
}
</style>