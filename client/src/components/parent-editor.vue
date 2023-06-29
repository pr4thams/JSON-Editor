<template>
  <div>
    <JsonEditor :json-data="jsonData" @update:jsonData="jsonData = $event" />
    <button @click="saveChanges">Save</button>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import JsonEditor from "./json-fields.vue";
export default {
  name: "JsonEditorParent",
  components: {
    JsonEditor,
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
        console.error("There was an error fetching the JSON file:", error);
      });
  },
  methods: {
    async saveChanges() {
      try {
        const response = await axios.post(
          "http://localhost:3100/config",
          this.jsonData
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
