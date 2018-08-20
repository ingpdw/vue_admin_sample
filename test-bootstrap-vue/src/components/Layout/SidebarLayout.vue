<template>
  <div class="wrapper">
    <Sidebar :isShowSlider="isShowSlider"></Sidebar>
    <div class="content-wrapper">
      <Navbar @toggle="toggle"></Navbar>
      <div class="content">
        <slot>
          <Dropdown></Dropdown>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>

import Sidebar from '../Sidebar/index.vue';
import Navbar from '../Navbar/index.vue';
import Dropdown from '../Dropdown/index.vue';

export default {
  props: ['menu'],
  components: {
    Sidebar,
    Navbar,
    Dropdown,
  },
  data() {
    return {
      isShowSlider: true
    };
  },
  methods: {
    toggle() {

      this.isShowSlider = !this.isShowSlider;
      console.log(this.isShowSlider)
    }
  },
};
</script>

<style scoped>
  .wrapper {
    display: flex;
    width: 100%;
  }
  .content-wrapper {
    min-height: 100vh;
    flex-grow: 1;
    transition: all 0.3s ease;
  }

  .content {
    padding: 20px;
  }
</style>
