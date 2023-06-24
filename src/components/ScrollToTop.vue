<template>
  <div class="scroll-to-top"></div>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';

.scroll-to-top {
  display: none;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  z-index: 1000;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  &:before {
    display: block;
    content: '\f106';
    font-family: $font-icon;
    position: absolute;
    left: 50%;
    line-height: 46px;
    font-size: 40px;
    transform: translateX(-50%);
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>