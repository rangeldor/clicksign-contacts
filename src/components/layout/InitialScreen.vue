<template>
<v-row>
    <v-col cols="12">
        <div class="d-flex flex-column justify-center align-center initial-screen__book">
            <BookIcon />

            <span class="initial-screen__description">Nenhum contato foi criado ainda</span>
        
            <span  class="initial-screen__create-button">
                <CreateContactButton/>
            </span>
        </div>
    </v-col>
</v-row>
</template>

<script setup lang="ts">
import BookIcon from '@/icons/BookIcon.vue'
import CreateContactButton from '@/components/button/CreateContactButton.vue'
</script>

<style lang="scss" scoped>
.initial-screen {
    &__book {
        margin-top: 7rem;
    }

    &__description {
        margin-top: 1.5rem;
        color: '#2a2d3b';
    }

    &__create-button {
        margin-top: 1.5rem;
    }
}
</style>