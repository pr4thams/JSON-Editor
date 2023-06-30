<template>
    <div class="instruction-container">
      <div class="instruction-box">
        <h2>Usage Instructions</h2>
        <ol>
          <li v-for="(instruction, index) in instructions" :key="index">
            {{ instruction }}
          </li>
        </ol>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: "UsageInstructions",
    data() {
      return {
        instructions: [
          "Open the JSON Editor.",
          "Load a JSON file using the 'Load' button.",
          "Modify the JSON values as needed.",
          "Click 'Save' to apply the changes.",
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .instruction-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .instruction-box {
    border: 2px solid gray;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  ol {
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 10px;
  }
  </style>
  