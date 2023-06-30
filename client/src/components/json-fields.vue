<template>
  <div>
    <!-- Iteratively process each key/value pair in jsonData -->
    <div v-for="(value, key, index) in jsonData" :key="index">
      <div v-if="Array.isArray(value)" class="json-array">
        <div>{{ key }}:</div>

        <!-- Iteratively process each item in the array -->
        <div
          v-for="(item, itemIndex) in value"
          :key="itemIndex"
          class="json-array-item"
        >
          <!-- Recursively process each object in the array using JsonEditor -->
          <JsonEditor v-if="isObject(item)" :json-data="item" />
          <!-- Editable field for primitive values -->
          <div v-else class="json-primitive">
            <input
              class="rounded-input"
              v-model="jsonData[key]"
              @input="$emit('update:jsonData', jsonData)"
            />
          </div>
        </div>
      </div>

      <!-- Check if value is an object -->
      <div v-else-if="isObject(value)" class="json-object">
        <div>{{ key }}:</div>

        <!-- Recursively process the object using JsonEditor -->
        <div>
          <JsonEditor :json-data="value" />
        </div>
      </div>

      <!-- For non-array and non-object values -->
      <div v-else class="json-primitive">
        <label>{{ key }}:</label>
        <input
          class="rounded-input"
          v-model="jsonData[key]"
          @input="$emit('update:jsonData', jsonData)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "JsonEditor",
  component: {},
  props: {
    jsonData: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    // Check if an item is a non-null, non-array object
    isObject(item: null) {
      return typeof item === "object" && !Array.isArray(item) && item !== null;
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
.rounded-input {
  border-radius: 10px;
  background-color: rgb(80, 76, 76);
  padding: 3px 10px;
  border: none;
  color: rgb(255, 255, 255);
}
</style>
