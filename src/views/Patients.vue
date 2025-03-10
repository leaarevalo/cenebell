<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-v-slot -->
<template>
    <div v-if= "!showPatientDetail" class="patients">
        <h2 class= "patients__title">Pacientes</h2>
        
        <section class="patients__search">
            <v-text-field class="patients__search__input" label="Buscar" />
            <v-btn color="#1A9A8B" icon="mdi-plus" />
        </section>
        <section class="patients__table">
            <v-data-table
                :headers="headers"
                :items="patients"
                :items-per-page="10"
                class="elevation-1"
                :cellProps="{ style: { 'background-color': '#A0DAD0DE' } }"
                :headerProps="{ style: { 'background-color': '#167A6E' } }"
                :footerProps="{ style: { 'background-color': '#167A6E' } }"
            >
                <template v-slot:no-data>
                    <v-alert :value="true" color="error" icon="mdi-alert">
                        No se encontraron pacientes
                    </v-alert>
                </template>
                <template v-slot:item.actions="{ item }">
                    <div>
                        <v-icon @click="handlePatientDetail(item)">mdi-eye-outline</v-icon>
                        <v-icon @click="deleteItem(item)">mdi-delete-outline</v-icon>
                    </div> 
                </template>
            </v-data-table>
        </section>
             
    </div>
    <PatientDetail v-else :patient="patientDetail" />
</template>

<script setup>
import { ref } from "vue";
import PatientDetail from "../components/patients/PatientTreatmentsList.vue";

const showPatientDetail = ref(false);
const patientDetail = ref(null);

const headers = [
    {
        title: "Apellido y nombre",
        align: "center",
        key: "name"
    },
    {
        title: "DNI",
        align: "center",
        key: "dni"
    },
    {
        title: "Obra social",
        align: "center",
        key: "socialWork"
    },
    {
        title: "Acciones",
        align: "center",
        key: "actions",
        sortable: false
    }
];
const patients = [{
    name: "Juan Perez",
    dni: "12345678",
    socialWork: "OSDE"
},
{
    name: "Maria Rodriguez",
    dni: "87654321",
    socialWork: "Swiss Medical"
},
{
    name: "Pedro Gomez",
    dni: "45678912",
    socialWork: "Galeno"
},
{
    name: "Juan Perez",
    dni: "12345678",
    socialWork: "OSDE"
},
{
    name: "Maria Rodriguez",
    dni: "87654321",
    socialWork: "Swiss Medical"
},
{
    name: "Pedro Gomez",
    dni: "45678912",
    socialWork: "Galeno"
}
];

const handlePatientDetail = (patient) => {
    console.log(patient);
    patientDetail.value = patient;
    showPatientDetail.value = true;
}
</script>

<style lang="scss" scoped>
.patients {
    &__title {
        color: #167A6E;
        font-size: 24px;
        margin-bottom: 16px;
    }
    &__search {
        display: flex;
        flex-direction: row;
        margin-bottom: 16px;
        &__input {
            flex: 1;
            margin-right: 300px;
        }
    }
    &__table {
        background-color: #A0DAD0DE;
    }
}
</style>