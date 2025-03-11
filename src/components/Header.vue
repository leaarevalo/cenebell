<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section class="header">
            <v-icon class="header__icon" @click="handleGoBack()">mdi-arrow-left</v-icon>
            <h3 class="header__title">{{ title }}</h3>
            <h5 class="header__subtitle">{{ subtitle }}</h5>
        </section>
</template>


<script setup>
import { defineEmits, defineProps } from "vue";

defineProps({
    title: {
        type: String,
        default: ""
    },
    subtitle: {
        type: String,
        default: ""
    }
})

const emit = defineEmits(["goBack"]);

const handleGoBack = () => {
    emit("goBack");
};
</script>

<style lang="scss" scoped>
.header  {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 16px;
    font-family: 'Montserrat';

    &__icon {
        display: block;
        position: absolute;
        left: 260px;
        top: 16px;
        width: 44px;
        font-size: 32px;
        cursor: pointer;
        color: #167A6E
    }

    &__title {
        font-family: 'Montserrat';
        font-size: 48px;
        font-weight: 600;
        color: #000000;
    }

    &__subtitle {
        font-family: 'Montserrat';
        font-size: 40px;
        font-weight: 600;
        color: #1A9A8B;
    }
    }
</style>