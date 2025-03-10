<template>
  <div>
    <h1>Bienvenido usuario</h1>
    <section class="menu__container">
        <div v-for="item in menuItems" :key="item.title" class="menu__box">
            <RouterLink :to="item.link" class="menu__box__content">
                <v-icon>{{ item.icon }}</v-icon>
                <p>{{ item.title }}</p>
            </RouterLink>
        </div>
    </section>
  </div>
</template>

<script setup>

const menuItems = [
    {
        title: 'Pacientes',
        icon: 'mdi-view-dashboard',
        link: '/patients'
    },
    {
        title: "Insumos",
        icon: 'mdi-forum',
        link: '/supplies'
    },
    {
        title: "Agenda",
        icon: 'mdi-forum',
        link: '/appointments'
    },
    {
        title: "Indicadores",
        icon: 'mdi-forum',
        link: '/indicators'
    },
    {
        title: "Mantenimiento",
        icon: 'mdi-forum',
        link: '/maintenance'
    }
]
</script>

<style lang="scss" scoped>
.menu {
    &__container {
        display: grid;
        grid-template-columns: repeat(2, 464px);
        padding: 16px;
        justify-content: center;
        
    }
    &__box {
        width: 420px;
        height: 128px;
        border: 16px solid #1A9A8B;
        border-radius: 16px;
        margin: 16px;

        &__content {
            background-color: #97C8C3;
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: 16px 167px;
            justify-content: center;
            align-items: center;
            padding: 16px;
            font-family: 'Montserrat', sans-serif;
            font-size: 24px;
            font-weight: 600;
            color: white;
            text-decoration: none;
            
            p {
                margin-left: 16px;
            }
        }
    }
}
</style>