<template>
    <nav :class="{open: statut, close: !statut}">
        <ul>
            <li>Orders</li>
            <li>Clients</li>
           
        </ul>
        <!-- emit est pour transmettre au composant parent  -->
        <button @click="$emit('chgTitre')">Changer le titre</button>
    </nav>
</template>

<script>
export default ({
    name: 'MyNav',
    props: {
        statut: {
            type: Boolean,
        }
    },
    
    mounted() {
        console.log('this.statut: ', this.statut);
    },
    methods: {
        chgTitre() {
            this.$emit('chgTitre');
        }
    }
})
</script>

<style scoped>
.close {
    display: none;
}

.open {
    display: block;
}
</style>