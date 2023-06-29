<template>
  <header>
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
header {
  text-align: center;
  margin: 0;
  padding: 20px 0;
}

.json-editor-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
