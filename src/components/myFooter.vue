<template>
    <footer>
        Copyright &copy; {{ annee }} - Moi - Tous droits réservés
    </footer>
</template>


<script>
export default ({
    name: 'MyFooter',
    data() {
        return {
            annee: new Date().getFullYear()
        }
    },
});
</script>

<style scoped>
footer {
    text-align: center;
}
</style>