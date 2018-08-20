<template>
  <router-link :to="link.path" tag="li">
    <a class="nav-link">
      <i v-if="link.icon" class="nc-icon" :class="link.icon"></i>
      <p>{{link.name}}</p>
    </a>
  </router-link>
</template>

<script>
export default {
  props: ['link'],
  methods: {
    goto (path) {
      location.href = path;
    }
  }
}
</script>
