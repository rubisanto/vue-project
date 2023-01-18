export default {
  data() {
    return {
      cpt: 0,
      urlApi: "http://localhost:3000/clients/",
      client: {},
      clients: [],
    };
  },
  created() {
    this.axios
      .get(this.urlApi)
      .then((response) => {
        this.clients = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return this.clients;
  },
  methods: {
    supp(id) {
      this.axios
        .delete(this.urlApi + id)
        .then((response) => {
          // rechargement de la page
          this.$router.go();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    save() {
      console.log(this.client);
      //   modification
      if (this.client.id) {
        this.axios
          .put(this.urlApi + this.client.id, this.client)
          .then((response) => {
            this.$router.push("/clients");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        // création d'un nouveau client
        this.$http
          .post(this.urlApi, this.client)
          .then((response) => {
            // redirection vers tableau clients
            this.$router.push("/clients");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    recupClient(id) {
      this.axios
        .get(this.urlApi + id)
        .then((response) => {
          this.client = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
      return this.client;
    },
  },
};
