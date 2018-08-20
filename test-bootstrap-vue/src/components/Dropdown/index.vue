<template>
  <b-dropdown :text="selectedItem.name" :variant="variant">
    <b-dropdown-item
      v-for="(item, index) in items"
      v-if="!item.divider"
      @click.prevent="selected(index)">
      {{item.name}}
    </b-dropdown-item>
    <b-dropdown-divider v-else></b-dropdown-divider>
  </b-dropdown>
</template>

<script>
export default {
  name: 'ncDropdown',
  props: {
    variant: {
      type: String,
      default: 'outline-danger',
    },
    items: {
      type : Array,
      default: () => [
        {name: 'first name', value: 'first'},
        {name: 'Second', value: 'Second'},
        {name: 'Third', value: 'Third'},
        {divider: true},
        {name: 'something else', value: 'something'},
      ],
    },
  },
  data() {
    return {
      selectedItem: { name: '', value: '' },
    };
  },
  mounted() {
    this.selectedItem = this.items[0];
  },
  methods: {
    selected(index) {
      this.selectedItem = this.items[index];
      this.$emit('selected', this.selectedItem.value);
    }
  }
};
</script>
