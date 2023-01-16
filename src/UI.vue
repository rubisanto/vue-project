<template>
<!-- interface affichée dans le navigateur -->
<myHeader />
<div class="page"><myNav /></div>

<myFooter />
</template>

<script>
// variables, évènements, hooks, fonctions, etc.
// importation de composants + importation dans components
import MyHeader from './components/myHeader.vue'
import MyFooter from './components/myFooter.vue'
import MyNav from './components/myNav.vue'
export default {
    name: 'UI',
    components: {
        MyHeader, MyFooter, MyNav
    }
};
</script>

<style scoped>
/* mise en forme CSS, Si "scoped" uniquement le composant */

</style>