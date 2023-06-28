<template>
  <header>
    <h1>JSON Editor</h1>
  </header>
  <jsonEditor />
</template>

<script lang="ts">
import axios from "axios";
import jsonEditor from "./components/json-editor.vue";

export default {
  name: "App",
  components: {
    jsonEditor,
  },
  data() {
    return {
      jsonData: {},
    };
  },
  mounted() {
    axios
      .get("http://localhost:3100/config")
      .then((response) => {
        this.jsonData = response.data;
      })
      .catch((error) => {
        console.log("There was an error:", error);
      });
  },
};
</script>
