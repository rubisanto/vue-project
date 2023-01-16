<template>
    <MyHeader />
    <div class="page">
      <MyNav />
      <main>
        
        Contenu de la page
    <p v-if="ok"> Contenu affiché si ok est vrai </p>
    <p v-else> Contenu affiché si ok est faux </p>
    <p v-show="ok"> Contenu affiché si ok est vrai  en v show</p>
    <p v-show="!ok"> Contenu affiché si ok est faux en v show</p>
    <ul>
        <li v-for="i in 10" :key="i">{{ i }}</li>
    </ul>
    <span v-for="(i, j) in [3,5,7,9,2,8,3]" :key="j"> Valeur de i: {{ i }} ayant l'index {{ j }} <br></span>
    <button v-on:click.once="maFonction">
        Cliquez ici
    </button>

    <button @click="maFonction">
        ou cliquez la 
    </button>
    <div @click.left="lclicl" @click.right.prevent="rclic" @keypress.up="keyup">Une souris verte</div>

    </main>
    </div>
    <MyFooter />
  </template>
  
  <script>
  // le template => interface affichée dans le navigateur 
  // script => variables, évènements, hooks, ...
  //style => mise en forme CSS. Si "scoped" uniquement le composant 
  //import des composants + déclaration dans 'components'
  import MyHeader from './components/MyHeader.vue';
  import MyFooter from './components/MyFooter.vue';
  import MyNav from './components/MyNav.vue';
  
  export default({
    name: 'UI',
    data() {
      return {
        ok: true
      }
    },
    methods: {
      maFonction() {
        alert('Vous avez cliqué');
      },
        lclicl() {
            alert('Vous avez cliqué sur la souris gauche');
        },
        rclic() {
            alert('Vous avez cliqué sur la souris droite');
        },
        keyup() {
            alert('Vous avez cliqué sur la touche haut');
        }
    },
    components: { MyHeader, MyNav, MyFooter}
  });
  </script>
  
  <style scoped>
  
  
  </style>