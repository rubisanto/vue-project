<template>
  <!-- n'afficher le tableau que si il y a des éléments dans orders 
      sinon message pour dire qu'il n'y a rien à afficher -->
  <table>
    <tr>
      <th v-for="(head, i) in headers" :key="i">{{ head }}</th>
    </tr>
    <!-- affichage des orders -->
    <tr v-for="order in orders" :key="order.id">
      <td>
        <BIconPencilSquare @click="go(order.id)" class="update"/>
        <!-- pour la suppression un demande au parent de supprimer l'élément du tableau orders -->
        <b-icon-trash-fill @click="$emit('supp', order.id)" class="iconSupp"/>
      </td>
      <td>{{ order.typePresta }}</td>
      <td>{{ order.client }}</td>
      <td>{{  order.tva }}</td>
      <td>{{ order.nbJours }}</td>
      <td>{{ order.tjmHt }}</td>
      <td>
        {{ totalHT(order.nbJours, order.tjmHt)}}
      </td>
      <td>
        {{ totalTTC(order) }}
      </td>
      <td>{{  order.comment }}</td>
      <td :class="order.state">
        <select v-model="order.state" @change="$emit('chgSts', order)" :class="order.state">
          <option class="CONFIRMED">CONFIRMED</option>
          <option class="OPTION">OPTION</option>
          <option class="CANCELED">CANCELED</option>
        </select>
      </td>
    </tr>
  </table>
</template>

<script>
// bi-pencil-square => BIconPencilSquare
import { BIconPencilSquare, BIconTrashFill } from 'bootstrap-icons-vue';
export default({
  name: 'TableOrders',
  props: {
    orders: Object,
    headers: Object
  },
  /* on se sert des hooks pour afficher un spinner de chargement */
  created() {
    console.log('loader lancé')
  },  
  mounted() {
    console.log('loader supprimé');
  },
  methods: {
    totalHT(nbJours, tjmHt) {
      return nbJours * tjmHt
    },
    totalTTC({nbJours, tjmHt, tva}) {
      return (nbJours * tjmHt * (100+tva)/100);
    },
    go(id) {
      //console.log(id);
      //redirection vers editorder/:id via $router
      this.$router.push({name: 'editorder', params: {id: id}});
    }
  },
  /* ne pas oublier de déclarer les composants importés */
  components: { BIconPencilSquare, BIconTrashFill }
});
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