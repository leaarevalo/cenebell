<template>
    <Header @goBack="handleGoBack" title="Nuevo paciente"/>
    <form @submit.prevent="handlePatientCreate">
        <v-row>
            <v-col cols="12" sm="6">
                <v-text-field
                    v-model="patient.name"
                    label="Apellido y nombre"
                    required
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-date-input v-model="patient.dateOfBirth" label="Fecha de nacimiento" variant="solo" prepend-icon=""></v-date-input>
            </v-col>
        </v-row>  
        <v-row>
            <v-col>
                <v-text-field
                    v-model="patient.dni"
                    label="DNI"
                    required
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field
                    v-model="patient.age"
                    label="Años"
                    required
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6">
                <v-select v-model="socialWorkSelected" label="Obra social" :items="socialWorks" />
            </v-col>
            <v-col cols="12" sm="6">
                <p class="" :style="{'text-align': 'start'}">Necesita transporte?</p>
                <v-switch class="ml-3" v-model="patient.transport" :label="patient.transport ? 'Sí' : 'No'" inset color="success" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12">
                <v-text-field
                    v-model="patient.address"
                    label="Domicilio"
                    required
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12">
                <v-select :items="daysOfWeek" v-model="daysSelected" label="Días de atención" chips multiple />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12">
                <v-date-input v-model="patient.startTreatmentDate" label="Fecha de inicio de tratamiento"></v-date-input>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6">
                <v-btn color="#1A9A8B" type="submit">Guardar</v-btn>
            </v-col>
            <v-col cols="12" sm="6">
                <v-btn color="#9ac7c1" @click="handleGoBack">Cancelar</v-btn>
            </v-col>
        </v-row>
    </form>   
</template>

<script setup>
import { ref, defineEmits } from "vue";
import Header from "../Header.vue";

const emit = defineEmits(["goBack", "onPatientCreate"]);

const socialWorks = [
    "OSDE",
    "Swiss Medical",
    "Galeno",
    "PAMI",
    "Otra"
];
const daysOfWeek = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
];

const socialWorkSelected = ref([]);
const daysSelected = ref([]);

const patient = ref({
    name: "",
    dateOfBirth: new Date(),
    age: "",
    address: "",
    transport: false,
    days: [],
    startTreatmentDate: new Date(),
    dni: "",
    socialWork: ""
});

const handleGoBack = () => {
    emit("goBack");
};

const handlePatientCreate = () => {
    patient.value.socialWork = socialWorkSelected.value;
    patient.value.days = daysSelected.value;
    patient.value.dateOfBirth = patient.value.dateOfBirth.toISOString().split("T")[0];
    patient.value.startTreatmentDate = patient.value.startTreatmentDate.toISOString().split("T")[0];
    emit("onPatientCreate", patient.value);
    handleGoBack();
};

</script>

<style lang="scss" scoped>
</style>
