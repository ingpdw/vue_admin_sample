<template>
  <b-navbar type="light" variant="light">
    <span class="navbar-toggler-icon" @click.prevent="toggle"></span>
    <slot></slot>
    <Search></Search>
  </b-navbar>
</template>

<script>
import Search from '../Search/index.vue';
import Dropdown from '../Dropdown/index.vue';

export default {
  name: 'Navbar',
  components: {
    Search,
    Dropdown,
  },
  methods: {
    toggle() {
      this.$emit('toggle');
    }
  }
};
</script>
