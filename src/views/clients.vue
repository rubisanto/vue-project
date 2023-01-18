<template>
<ClientsSlot></ClientsSlot>
<TableClients :clients="clients" :headers="headers" @supp="supp" ></TableClients>
<!-- bouton pour ajouter client -->
<router-link to="/addclient">
    Ajouter un client
</router-link>
</template>

<script>
import ClientsSlot from '../components/ClientsSlot.vue';
import TableClients from '../components/TableClients.vue';
import ClientMixin from '../mixins/ClientMixin';

export default({
  name: 'Clients',
  data(){
    return {
        headers: [
        "Actions",
        "compagny",
        "firstname",
        "lastname",
        "phone",
        "mobile",
        "mail"
        ]
    }

  },
  components: { ClientsSlot, TableClients },
  mixins: [ClientMixin]
});
</script>

<style scoped>
a {
  font-size: 1.5em;
  text-decoration: none;
  border: 1px solid blue;
  padding: 2px;
  margin-left: 60px;
}
</style>