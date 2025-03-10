<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-v-slot -->
<template>
    <div v-if= "!showPatientDetail" class="patients">
        <h2 class= "patients__title">Mantenimiento</h2>
        
        <section class="patients__search">
            <v-text-field v-model= "inputSearch" class="patients__search__input" label="Buscar por numero de serie, tipo de equipo o fabricante" />
            <v-btn color="#1A9A8B" icon="mdi-plus" />
        </section>
        <section class="patients__table">
            <v-data-table
                :headers="headers"
                :items="maintenanceFilter"
                :items-per-page="10"
                class="elevation-1"
                :cellProps="{ style: { 'background-color': '#A0DAD0DE' } }"
                :headerProps="{ style: { 'background-color': '#167A6E', 'text-align': 'center' } }"
            >
                <template v-slot:no-data>
                    <v-alert :value="true" color="error" icon="mdi-alert">
                        No se encontraron registros de mantenimiento
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
    <PatientDetail v-else :patient="patientDetail" @goBack="showPatientDetail = false" />
</template>

<script setup>
import { ref, computed } from "vue";
import PatientDetail from "../components/patients/PatientTreatmentsList.vue";

const showPatientDetail = ref(false);
const patientDetail = ref(null);
const inputSearch = ref("");

const headers = [
    {
        title: "Numero de serie",
        align: "center",
        key: "serialNumber"
    },
    {
        title: "Tipo de equipo",
        align: "center",
        key: "equipmentType"
    },
    {
        title: "Fabricante",
        align: "center",
        key: "manufacturer"
    }
];
const maintenanceList = [
    {
        serialNumber: "123456",
        equipmentType: "Equipo 1",
        manufacturer: "Fabricante 1"
    },
    {
        serialNumber: "123457",
        equipmentType: "Equipo 2",
        manufacturer: "Fabricante 2"
    },
    {
        serialNumber: "123458",
        equipmentType: "Equipo 3",
        manufacturer: "Fabricante 3"
    },
    {
        serialNumber: "123459",
        equipmentType: "Equipo 4",
        manufacturer: "Fabricante 4"
    }
];

const maintenanceFilter = computed(() => {
    return maintenanceList.filter((maintenance) => {
        return (maintenance.serialNumber.includes(inputSearch.value) || maintenance.equipmentType.includes(inputSearch.value) || maintenance.manufacturer.includes(inputSearch.value));
    });
});


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