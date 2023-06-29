<template>
  <header>
    <h1>JSON Editor</h1>
  </header>
  <jsonEditor />
</template>

<script lang="ts">
import jsonEditor from "./components/parent-editor.vue";

export default {
  name: "App",
  components: {
    jsonEditor,
  },
};
</script>
