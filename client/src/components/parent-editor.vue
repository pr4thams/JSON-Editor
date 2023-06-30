<template>
  <div>
    <!-- Confirmation message -->
    <div v-if="showConfirmation" class="confirmation">
      Changes saved successfully!
    </div>
    <!-- Use JsonEditor component with jsonData prop and listen for update event -->
    <JsonEditor :json-data="jsonData" @update:jsonData="jsonData = $event" />
    <!-- Button: save any made changes -->
    <button class="save-button" @click="saveChanges">Save</button>
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
      jsonData: this.jsonData || {},
      showConfirmation: false,
    };
  },
  mounted() {
    this.fetchJsonData();
  },
  methods: {
    // Fetch jsonData from the server
    fetchJsonData() {
      axios
        .get("http://localhost:3000/config")
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
          "http://localhost:3000/config",
          this.jsonData
        );
        console.log(response.data);
        this.showConfirmation = true;
        setTimeout(() => {
          this.showConfirmation = false;
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.save-button {
  padding: 10px 20px;
  font-size: 17px;
  border-radius: 20px;
  background-color: darkgrey;
  color: black;
  border: none;
  cursor: pointer;
  margin-bottom: 15px;
}
.save-button:hover {
  background-color: rgb(90, 90, 96);
}
.confirmation {
  text-align: center;
  padding: 10px;
  background-color: green;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
