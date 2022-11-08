<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <button type="button" @click="$emit('handle-click')">Click</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    message: {
      type: String,
      required: false,
    }
  },
  data() {
    return {};
  },
};
</script>
