<template>
  <div class="car_brands">
    <slot name="brands"></slot>
    <br />
    <slot name="Other"></slot>
    <hr />
    <br />
    <slot></slot>
  </div>
</template>
<script setup></script>
<style scoped>
.car_brands {
  border: 1px solid;
  padding: 10px 20px;
  margin-top: 10px;
}

.car_brands ::v-deep li {
  color: red;
}
</style>
