<template>
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer
        permanent
        class=""
        v-if="$route.path !== '/'"
      >
        <v-list density="compact" nav>
            <v-list-item
                title="Cenebell"
            >
            </v-list-item>
          <v-list-item
            prepend-icon="mdi-home-outline"
            title="Inicio"
            value="home"
            @click="$router({ path: '/'})"
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-folder-multiple-outline"
            title="Pacientes"
            value="patients"
            @click="$router({ path: '/patients'})"
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-calendar-month-outline"
            title="Agenda"
            value="appointments"
            @click="$router({ path: '/appointments'})"
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-text-box-outline"
            title="Insumos"
            value="supplies"
            @click="$router({ path: '/supplies'})"
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-wrench-outline"
            title="Mantenimiento"
            value="maintenance"
            @click="$router({ path: '/maintenance'})"
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-chart-box-outline"
            title="Indicadores"
            value="indicators"
            @click="$router({ path: '/indicators'})"
          >
          </v-list-item>
        </v-list>
        <template v-slot:append>
          <v-list-item
            prepend-icon="mdi-logout"
            title="Salir"
            value="logout"
            @click="logout"
          >
          </v-list-item>
        </template>
      </v-navigation-drawer>
  
      <v-main
        class="d-flex align-center justify-center"
        style="min-height: 300px"
      >
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-layout>
  </template>
  
  <script>
  import { useRouter } from "vue-router";
  export default {
    name: "MainView",
    setup() {
      const router = useRouter();
      const logout = () => {
        router.replace("/");
      };
      return { logout };
    },
  };
  </script>