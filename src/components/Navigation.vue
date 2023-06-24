<template>
  <nav class="navbar navbar-default navbar-fixed-top sc-hidden" role="navigation">
    <div class="container">
      <g-link class="navbar-brand" to="/"></g-link>
      <div class="logo-block">
        <g-link to="/">
          <g-image alt="Logo" src="~/favicon.png" width="90" />
        </g-link>
      </div>
      <div class="site-name-block">
        <div class="site-name">
          <h1>{{ props.siteName }}</h1>
        </div>
      </div>
      <div class="collapse navbar-collapse navbar-main-menu">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <g-link class="nav__link" to="/">Главная</g-link>
          </li>
          <li>
            <g-link class="nav__link" to="/price">Прайс-лист</g-link>
          </li>
          <li>
            <a class="anchor" href="#block-contacts">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps(['siteName'])
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';

.navbar {
  border-bottom: 1px solid $navbar-border;
  height: $navbar-height;
  background-color: $navbar-bg;
  
  &.affix {
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);

    .logo-block {

      img {
        height: 60px;
      }
    }
  }

  .navbar-main-menu {
    float: right;
  }

  .nav {
    height: $navbar-height;
    padding: 0;

    a {
      font-weight: 100;
      padding: 0 15px;
      line-height: $navbar-height;
      height: $navbar-height;
      border-bottom: 3px solid transparent;
      transition: all 0.3s;

      &.active {
        border-bottom: 3px solid $color-second;
      }
    }
  }
}

.site-name-block {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  .site-name {
    font-family: 'Crimson Text';
    font-size: 40px;
    line-height: 80px;
    font-weight: 600;
    color: $color-site-name;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    white-space: nowrap;

    h1 {
      font-size: 100%;
      margin: 0;
      line-height: 80px;
      font-weight: 600;
    }
  }
}

.logo-block {
  float: left;
  padding: 10px 0;
  margin-left: -35px;

  @media #{$s} {
    margin-left: 20px;
  }

  a {
    height: $navbar-height - 20px;
    display: inline-block;
  }

  img {
    transition: all 0.15s;
    height: 60px;

    @media #{$s} {
      height: 90px;
    }
  }
}
</style>