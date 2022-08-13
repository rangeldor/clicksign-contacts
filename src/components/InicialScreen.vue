<template>
<v-row>
    <v-col cols="12">
        <div class="d-flex flex-column justify-center align-center inicial-screen__book">
            <BookIcon />

            <span class="inicial-screen__description">Nenhum contato foi criado ainda</span>
        
            <CreateContactButton />
        </div>
    </v-col>
</v-row>
</template>

<script setup lang="ts">
import BookIcon from '@/icons/BookIcon.vue'
import CreateContactButton from '@/components/CreateContactButton.vue'
</script>

<style lang="scss" scoped>
.inicial-screen {
    &__book {
        margin-top: 7rem;
    }

    &__description {
        margin-top: 1.5rem;
        color: '#2a2d3b';
    }
}
</style>