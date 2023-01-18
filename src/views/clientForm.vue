<template>
<h1>{{ title }}</h1>
<div>
    <p>
        <label>Compagnie: </label>
        <input v-model="client.compagny" placeholder="compagnies" />
    </p>
    <p>
        <label>Prénom: </label>
        <input v-model="client.firstname" placeholder="prénom" />
    </p>
    <p>
        <label>Nom: </label>
        <input v-model="client.lastname" placeholder="nom" />
    </p>
    <p>
        <label>Téléphone: </label>
        <input v-model="client.phone" placeholder="téléphone" />
    </p>
    <p>
        <label>Mobile: </label>
        <input v-model="client.mobile" placeholder="mobile" />
    </p>
    <p>
        <label>Mail: </label>
        <input v-model="client.mail" placeholder="mail" />
    </p>
    <p class="center">
        <button @click="save">{{ $route.params.id ? 'Modifier' : 'Ajouter' }}</button>

    </p>
</div>
</template>

<script>
import ClientMixin from '../mixins/ClientMixin';
export default({
    name: 'clientForm',
    data(){
        return {
            title: 'Ajouter un client',
            client: {
                compagny: '',
                firstname: '',
                lastname: '',
                phone: '',
                mobile: '',
                mail: '',
            }
        }
    },
    mounted(){
        if(this.$route.params.id){
            this.title = 'Modifier un client';
            this.client = this.recupClient(this.$route.params.id);
        }
    
    },
    mixins: [ClientMixin]
})

</script>

<style scoped>  
 p {
    margin: 20px 0px;
  }
  label {
    display: block;
    width: 90%;
    margin: 5px auto;
    font-size: 1.5em;
  }
  input {
    display: block;
    width: 90%;
    margin: 0 auto;
    padding: 5px;
    font-size: 1.5em;
    border-radius: 5px;
  }
  .center {
    text-align: center;
  }
  button {
    margin: 0 auto;
    padding: 5px;
    font-size: 1.5em;
    border-radius: 5px;
    background: var(--app-dark);
    color: var(--app-light);
  }
</style>