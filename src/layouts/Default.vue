<template>
  <div>

    <Navigation :siteName="$static.metadata.siteName" />

    <header class="header sc-hidden">
      <div class="container">
        
      </div>
    </header>

    <div class="content">

    </div>

    <div class="scroll-to-top"></div>

    <footer class="footer sc-hidden">

    </footer>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  components: {
    Navigation,
  },
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
