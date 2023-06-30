<template>
  <header class="navbar">
    <h1>JSON Editor</h1>
  </header>

  <!-- JSON Editor Component -->
  <div class="json-editor-container">
    <JsonEditorComponent />
  </div>
</template>

<script lang="ts">
import JsonEditorComponent from "./components/parent-editor.vue";

export default {
  name: "App",
  components: {
    JsonEditorComponent,
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  background-color: rgb(70, 69, 69);
  margin-bottom: 15px;
}

.json-editor-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
