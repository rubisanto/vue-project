<template>
    <header>
        <BIconList class="x3" v-show="!statut" @click="$emit('ouvrir')"/>
        <BIconXSquare class="x3" v-show="statut"  @click="ouvrir"/>
        <h1 :style="monStyle">{{ titre }}</h1>
    </header>
</template>

<script>
import {BIconList, BIconXSquare} from 'bootstrap-icons-vue';
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
    // propriétés du composant parent
    props: {
        titre: {
            type: String
            
        },
        statut: {
            type: Boolean,
        }
    },
    // Déclaration des composants utilisés dans le template
    components: {BIconList, BIconXSquare},
    methods: {
        ouvrir() {
            console.log('ouvrir');
            this.$emit('ouvrir'); // émet un évènement au composant parent
        },
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
header {
    display: flex;
}

h1 {
    font-size: 2em;
}

.x3 {
    font-size: 2em;

}
</style>