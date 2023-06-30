<template>
  <div>
    <header class="navbar">
      <h1>JSON Editor</h1>
    </header>
    <!-- Main Container -->
    <div class="main-container">
      <UsageInstructions class="instructions" />
      <!-- JSON Editor Component -->
      <div class="json-editor-container">
        <JsonEditorComponent />
      </div>
    </div>
    <footer class="footer">
    <div class="footer-text">
      <p>Desgined Through Vue.js. Maintained By Pratham.</p>
      <p>Currently v1.0. Hosted on Vercel</p>
      <a href="https://github.com/pr4thams/JSON-Editor" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/pr4thams/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </footer>
  </div>
</template>

<script lang="ts">
import JsonEditorComponent from "./components/parent-editor.vue";
import UsageInstructions from "./components/usage-instructions.vue";

export default {
  name: "App",
  components: {
    UsageInstructions,
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

/* New CSS */
.main-container {
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

.instructions,
.json-editor-container {
  margin: 0 50px;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: rgb(70, 69, 69);
  color: white;
  left: 0;
  bottom: 0;
  width: 100%;
}
.footer p,
.footer a {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
