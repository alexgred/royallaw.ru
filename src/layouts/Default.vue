<template>
  <div>

    <Navigation :siteName="$static.metadata.siteName" />

    <Header />

    <div class="content">
      <slot />
    </div>

    <ScrollToTop />

    <Footer />
  </div>
</template>

<script setup>
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import ScrollToTop from '~/components/ScrollToTop';
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
/* .sc-hidden {
  opacity: 0;
}

.sc-visible {
  opacity: 1;
}

.animated {
  animation-duration: 0.6s;
} */
</style>
