<template>
  <div>
    <h2>Usage Instructions</h2>
    <ol>
      <li v-for="(instruction, index) in instructions" :key="index">
        {{ instruction }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
export default {
  name: "UsageInstructions",
  data() {
    return {
      instructions: [
        "Step 1: Open the JSON Editor.",
        "Step 2: Load a JSON file using the 'Load' button.",
        "Step 3: Modify the JSON values as needed.",
        "Step 4: Click 'Save' to apply the changes.",
      ],
    };
  },
};
</script>

<style scoped>
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
