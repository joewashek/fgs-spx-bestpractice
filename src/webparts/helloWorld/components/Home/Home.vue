<template>
    <v-app>
        <v-content>
            <h2 class="title">Home Page</h2>
            <v-btn color="success">Success</v-btn>
            <v-btn color="error">Error</v-btn>
            <v-btn dark>
                <v-icon dark left>remove_circle</v-icon>Cancel
            </v-btn>
            <v-btn color="info">Info</v-btn>
        </v-content>
        
    </v-app>
</template>

<script>
    module.exports = require("./Home");
</script>

<style scoped>
    .homeTitle{
        color:green;
    }
</style>


