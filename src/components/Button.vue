<template>
  <button type="submit" class="btn" :class="classBtn">{{ props.name }}</button>
</template>

<script setup>
const props = defineProps({
  name: String,
  primary: Boolean
});
const classBtn = props.primary ? 'btn-primary' : 'btn-default';
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';

</style>