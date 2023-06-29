<template>
  <div>
    <!-- Use JsonEditor component with jsonData prop and listen for update event -->
    <JsonEditor :json-data="jsonData" @update:jsonData="jsonData = $event" />

    <!-- Button: save any made changes -->
    <Button @click="saveChanges">Save</Button>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import JsonEditor from "./json-fields.vue";
import Button from "primevue/button";

export default {
  name: "JsonEditorParent",
  components: {
    JsonEditor,
  },
  data() {
    return {
      jsonData: this.jsonData || {},
    };
  },
  mounted() {
    this.fetchJsonData();
  },
  methods: {
    // Fetch jsonData from the server
    fetchJsonData() {
      axios
        .get("http://localhost:3100/config")
        .then((response) => {
          this.jsonData = response.data;
        })
        .catch((error) => {
          console.error("There was an error fetching the JSON file:", error);
        });
    },

    // Save changes to the server
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
