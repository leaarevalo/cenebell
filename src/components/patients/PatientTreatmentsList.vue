<!-- eslint-disable vue/valid-v-slot -->
<template>
    <div class="patients-treatments">
        <Header @goBack="handleGoBack" :title="patient.name" subtitle="Historial" />
        <section>
            <v-data-table
                :headers="columns"
                :items="items"
                :items-per-page="5"
                class="elevation-1"
                :cellProps="{ style: { 'background-color': 'white', 'font-family': 'Montserrat' } }"
                :headerProps="{ style: { 'background-color': '#167A6E', 'text-align': 'start' } }"
            >
                <template v-slot:item="{ item }">
                    <tr>
                        <td :style="{ 'text-align': 'start' }">{{ item.date }}</td>
                        <td :style="{ 'text-align': 'end' }">
                            <v-icon class="patients-treatments__actions__icon" @click="handlePatientDetail(item)">mdi-eye-outline</v-icon>
                            <v-icon class="patients-treatments__actions__icon" @click="handlePatientDetail(item)">mdi-pencil</v-icon>
                            <v-icon class="patients-treatments__actions__icon" @click="deleteItem(item)">mdi-delete-outline</v-icon>
                            <v-icon class="patients-treatments__actions__icon" @click="deleteItem(item)">mdi-trash-can-outline</v-icon>
                        </td>

                    </tr>
                </template>
                <template v-slot:no-data>
                    <v-alert :value="true" color="error" icon="mdi-alert">
                        No se encontraron tratamientos
                    </v-alert>
                </template>
            </v-data-table>
        </section>     
    </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
import Header from "../Header.vue";


defineProps({
    patient: {
        type: Object,
        default: null
    }
})
const emit = defineEmits(["goBack"]);

const items = [
    {
        name: "Tratamiento 1",
        date: "01/01/2021",
        status: "En curso"
    },
    {
        name: "Tratamiento 2",
        date: "01/01/2021",
        status: "Finalizado"
    },
    {
        name: "Tratamiento 3",
        date: "01/01/2021",
        status: "En curso"
    },
    {
        name: "Tratamiento 4",
        date: "01/01/2021",
        status: "Finalizado"
    }
]
const columns = [
    {
        title: "Planillas de Dialisis",
        key: "date",
        align: "start"
    },
    {
        title: "",
        align: "end",
        key: "actions",
        sortable: false
    }
]

const handleGoBack = () => {
    emit("goBack");
}
</script>

<style lang="scss" scoped>
.patients-treatments {
    &__header  {
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
    &__actions {
        &__icon {
            margin-right: 16px;
        }
    }
}
</style>