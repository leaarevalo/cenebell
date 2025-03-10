<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-v-slot -->
<template>
    <div v-if= "!showPatientDetail" class="patients">
        <h2 class= "patients__title">Insumos</h2>
        
        <section class="patients__search">
            <v-text-field v-model= "inputSearch" class="patients__search__input" label="Buscar por nombre, tipo u ID" />
            <v-btn color="#1A9A8B" icon="mdi-plus" />
        </section>
        <section class="patients__table">
            <v-data-table
                :headers="headers"
                :items="suppliesFilter"
                :items-per-page="10"
                class="elevation-1"
                :cellProps="{ style: { 'background-color': '#A0DAD0DE' } }"
                :headerProps="{ style: { 'background-color': '#167A6E', 'text-align': 'center' } }"
            >
                <template v-slot:no-data>
                    <v-alert :value="true" color="error" icon="mdi-alert">
                        No se encontraron insumos
                    </v-alert>
                </template>
                <!-- <template v-slot:item.actions="{ item }">
                    <div>
                        <v-icon @click="handlePatientDetail(item)">mdi-eye-outline</v-icon>
                        <v-icon @click="deleteItem(item)">mdi-delete-outline</v-icon>
                    </div> 
                </template> -->
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
        title: "ID",
        align: "center",
        key: "supplyId"
    },
    {
        title: "Nombre",
        align: "center",
        key: "name"
    },
    {
        title: "Tipo",
        align: "center",
        key: "type"
    },
    {
        title: "Stock",
        align: "center",
        key: "stock",
    },
    {
        title: "Fecha de cad.",
        align: "center",
        key: "expirationDate"
    }
];
const supplies = [
    {
        supplyId: "1",
        name: "Insumo 1",
        type: "Tipo 1",
        stock: 10,
        expirationDate: "01/01/2021"
    },
    {
        supplyId: "2",
        name: "Insumo 2",
        type: "Tipo 2",
        stock: 20,
        expirationDate: "01/01/2021"
    },
    {
        supplyId: "3",
        name: "Insumo 3",
        type: "Tipo 3",
        stock: 30,
        expirationDate: "01/01/2021"
    },
    {
        supplyId: "4",
        name: "Insumo 4",
        type: "Tipo 4",
        stock: 40,
        expirationDate: "01/01/2021"
    }
];
const suppliesFilter = computed(() => {
    return supplies.filter((supply) => {
        return (supply.supplyId.includes(inputSearch.value) || supply.name.toLowerCase().includes(inputSearch.value.toLowerCase()) || supply.type.toLowerCase().includes(inputSearch.value.toLowerCase()));
    });
});
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