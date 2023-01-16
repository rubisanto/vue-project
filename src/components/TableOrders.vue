<template>
<table>
    <tr>
        <th v-for="(head, i) in headers" :key="i">{{ head }}</th>
    </tr>
    <!-- affichage des orders -->
    
</table>

</template>

<script>
export default ({
    name: 'TableOrders',
    props: {
        orders: {
            type: Object,
        },
        headers: {
            type: Object,
        }
    },
})
</script>

<style scoped>
table{
    
    width: 90%;
    margin: 40px auto;
    border: 1px solid silver;
    border-collapse: collapse;
}
</style>