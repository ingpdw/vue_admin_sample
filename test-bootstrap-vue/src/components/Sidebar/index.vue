<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="/" class="simple-text">
          vue guide
        </a>
      </div>
      <ul class="nav">
        <nc-menu v-for="(link,index) in sidebarMenus"
          :key="link.name + index"
          :link="link">
        </nc-menu>
      </ul>
    </div>
  </div>
</template>
<script>
import ncMenu from './ncMenu.vue'

export default {
  components: {
    ncMenu,
  },
  props: {
    sidebarMenus: {
      type: Array,
      default: () => [
        {name: 'table', icon: 'nc-notes', path: 'table' },
        {name: 'chart', icon: 'nc-chart-pie-35', path: 'chart' },
        {name: 'dropdown', icon: 'nc-bag', path: 'dropdown' },
        {name: 'icon', icon: 'nc-quote', path: 'icon' },
      ]
    },
  },
}
</script>
<style>
</style>
