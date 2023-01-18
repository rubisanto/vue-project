<template>
<table>
    <!-- headers -->
    <tr>
        <th v-for="(head, i) in headers" :key="i"> {{ head }} </th>
    </tr>
    <!-- affichage des clients -->
    <tr v-for="client in clients" :key="client.id">
    <td> 
    <BIconPencilSquare @click="go(client.id)" class="update"/>
    <BIconTrashFill @click="$emit('supp', client.id)" class="iconSupp"/>
    </td>
    <td>{{ client.compagny }}</td>
    <td>{{ client.firstname }}</td>
    <td>{{ client.lastname }}</td>
    <td>{{ client.phone }}</td>
    <td>{{ client.mobile }}</td>
    <td>{{ client.mail }}</td>
    </tr>
</table>

</template>

<script>
import { BIconPencilSquare, BIconTrashFill } from 'bootstrap-icons-vue';

export default ({
    name: 'TableClients', 
    props: {
        clients: Object,
        headers: Object
    },
    components: {
        BIconPencilSquare,
        BIconTrashFill
    },
    methods: {
        go(id){
            this.$router.push({name: 'editclient', params: {id: id}});
        }
    }
})
</script>

<style scoped>
table {
  width: 90%;
  margin: 20px auto;
  border: 1px solid silver;
  border-collapse: collapse;
  font-size: 1.4em;
}
th {
  background: var(--app-dark);
  color: var(--app-light);
}
th, td {
  padding: 10px 0px;
}
tr:nth-child(odd) {
  background: var(--app-dark);
  color: var(--app-light);
}
select {
  width: 100%;
  font-size: 1em;
  text-align: center;
}
.OPTION {
  background: var(--app-warning);
}
.CONFIRMED {
  background: var(--app-success);
}
.CANCELED {
  background: var(--app-error);
}
.iconSupp:hover {
  cursor: pointer;
}
.update:hover {
  cursor: pointer;
}
</style>