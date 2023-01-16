<template>
    <header>
        <h1 :style="monStyle">{{ titre }}</h1>
    </header>
</template>

<script>
export default ({
    name: 'MyHeader',
    data() {
        return {
            titre: 'Mon CRM',
            monStyle: {
                color: 'red'
            }
        }
    },
    beforeCreate() {
        console.log('avant la création du composant');
    },
    created() {
        console.log('après la création du composant');
    },
    beforeMount() {
        console.log('avant le montage du composant');
    },
    mounted() {
        console.log('composant chargé dans le navigateur pret ');
       
    },
    beforeUpdate() {
        console.log('avant la mise à jour du composant');
    },
    updated() {
        console.log('après la mise à jour du composant');
    },
    beforeUnmount() {
        console.log('avant le démontage du composant');
    },
    
});
</script>

<style scoped>
h1 {
    font-size: 2em;
}
</style>