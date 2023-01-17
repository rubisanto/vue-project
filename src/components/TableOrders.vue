<template>
<table>
    <tr>
        <th v-for="(head, i) in headers" :key="i">{{ head }}</th>
    </tr>
    <!-- affichage des orders -->
    <tr v-for="(order, i) in orders" :key="order.id" >
        <td>
            <button @click="$emit('supp', order.id)" class="iconSupp"><BIconTrashFill/></button>
            <button @click="editOrder(i)"><BIconPencilSquare /></button>
        </td>
        
        <td>{{ order.typePresta }}</td>
        <td>{{ order.client }}</td>
        <td>{{ order.tva }}</td>
        <td>{{ order.nbJours }}</td>
        <td>{{ order.tjmHt }}</td>
        <td>{{ totalHT(order.nbJours, order.tjmHt) }}</td>
        <!-- calculer le total ttc -->
        <td>{{ totalTTC(order) }}</td>        
        <td>{{ order.comment }}</td>
        <!-- afficher le statut avec le style associé au résultat -->
        <td :class="order.state">{{ order.state }}</td>
    </tr>

</table>

</template>

<script>
import { BIconPencilSquare, BIconTrashFill } from 'bootstrap-icons-vue';
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
    methods: {
        editOrder(i) {
            this.$emit('edit-order', i);
        },
        totalHT(nbJours, tjmHt) {
            return nbJours * tjmHt;
        },
        totalTTC(order) {
            return order.nbJours * order.tjmHt * (100+order.tva) / 100;
        },
    },
    components: {
        BIconPencilSquare,
        BIconTrashFill
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
tr:nth-child(odd) {
    background-color: #f2f2f2;
}
th, td {
    padding: 10px 10px;
}

.OPTION{
    background: var(--app-warning);
}
.CONFIRMED{
    background: var(--app-success);
}
.CANCELED{
    background: var(--app-error);
}

.iconSupp:hover {
    cursor: pointer
}
</style>