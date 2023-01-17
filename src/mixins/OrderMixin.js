export default {
  data() {
    return {
      cpt: 0,
      orders: [] /*
          {
            tjmHt: 1200,
            nbJours: 100,
            tva: 20,
            state: 'CONFIRMED',
            typePresta: 'Formation',
            client: 'M2I',
            comment: 'Merci pour la commande',
            id: 1
          },
          {
            tjmHt: 1000,
            nbJours: 20,
            tva: 20,
            state: 'CANCELED',
            typePresta: 'Coaching',
            client: 'MI2',
            comment: 'Oups',
            id: 22
          },
          {
            tjmHt: 1300,
            nbJours: 10,
            tva: 20,
            state: 'OPTION',
            typePresta: 'Formation',
            client: 'MI6',
            comment: 'En attente de la commande',
            id: 33
          }
        ]*/,
    };
  },
  created() {
    // localStorage.setItem(key, value) stocke la valeur value (texte) dans la clé key
    //localStorage.getitem(key) récupère la valeur de la clé key
    //localStorage.remove(key) supprime la valeur de key
    //localStorage.clear() supprime toutes les clés
    console.log("récupération du contenu dans le LocalStorage");
    if (localStorage.getItem("orders")) {
      // récupération des orders et transformation String -> JSON
      this.orders = JSON.parse(localStorage.getItem("orders"));
      // vrai si connexion internet console.log(navigator.onLine);
      // PWA: Progressive Web App
    }
  },
  methods: {
    /* CRUD: Create, Read, Update, Delete */
    increment() {
      this.cpt++;
    },
    decrement() {
      this.cpt--;
    },
    chgSts(id, sts) {
      /*console.log(id);
        console.log(sts);*/
      // ici on travaille directement sur le tableau original
      this.orders.forEach((order) => {
        if (order.id === id) order.state = sts;
      });
      console.log(this.orders);
      this.save();
      // on crée un nouveau tableau qu'il faudra utiliser pour remplacer l'original
      /*let nouveauTableau = this.orders.map((order) => {
          if(order.id === id) order.state = sts;
          return order;
        });
        console.log(nouveauTableau);*/
    },
    save() {
      // stockage dans le localStorage après transformation du JSON en String
      localStorage.setItem("orders", JSON.stringify(this.orders));
      localStorage.setItem("truc", "muche");
    },
  },
};
