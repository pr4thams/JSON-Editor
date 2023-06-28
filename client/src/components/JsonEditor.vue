<template>
  <div>
    <div v-for="(value, key, index) in jsonData" :key="index">
      <div v-if="Array.isArray(value)" class="json-array">
        <div>{{ key }}:</div>
        <div
          v-for="(item, itemIndex) in value"
          :key="itemIndex"
          class="nested json-array-item"
        >
          <JsonEditor v-if="isObject(item)" :json-data="item" />
          <div v-else>{{ item }}</div>
        </div>
      </div>
      <div v-else-if="isObject(value)" class="json-object">
        <div>{{ key }}:</div>
        <div class="nested">
          <JsonEditor :json-data="value" />
        </div>
      </div>
      <div v-else class="json-primitive">
        <label>{{ key }}:</label>
        <input
          v-model="jsonData[key]"
          @input="$emit('update:jsonData', jsonData)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
  name: "JsonEditor",
  props: {
    jsonData: Object,
  },
  methods: {
    isObject(item: null) {
      return typeof item === "object" && !Array.isArray(item) && item !== null;
    },
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

<style scoped>
.json-field {
  margin-bottom: 10px;
}
.json-array .json-array-item,
.json-object {
  padding-left: 30px;
  border-left: 1px solid #888;
  margin-bottom: 10px;
}
</style>
