<template>
  <header class="header sc-hidden">
    <div class="container">
      <div class="header-content text-center">
        <div class="page-description">Юридические услуги для Бизнеса и частных лиц</div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import '~/assets/scss/_variables.scss';

.header {
  margin: $navbar-height 0 0;
  padding: 28px 0;
  background: $header-bg;

  .header-content {

    .page-title {
      color: $header-text;
      font-size: 30px;
      line-height: 1;
      text-transform: uppercase;
      font-weight: 100;
      margin: 15px 0;
    }

    .page-description {
      color: #fff;
      font-size: 28px;
      width: 90%;
      margin: 2px auto;
      font-weight: 500;

      @media #{$s} {
        width: 350px;
      }
    }
  }
}
</style>