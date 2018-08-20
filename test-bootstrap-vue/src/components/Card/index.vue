<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">
        <slot name="title"></slot>
      </h4>
      <p class="card-category">
        <slot name="description"></slot>
      </p>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ncCard',
}
</script>
<style>
</style>
