<template>
  <footer class="footer sc-hidden">
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-xs-6">
            <div class="block-copyright text-left">
              <div class="block-content block copyright">
                &copy; {{ year }} Royal Law
              </div>
              <div class="block-content block developer">
                <a href="mailto:alexgred.dev`@`gmail.com">Разработка сайта</a>
              </div>
            </div>
          </div>
          <div class="col-xs-6"> 
            <div class="block-social text-right">
              <div class="block-content block">
                <div class="social-links">
                  <a href="https://vk.com/" class="icon-vk social-link"></a>
                  <a href="https://instagram.com/" class="icon-inst social-link"></a>
                  <a href="https://facebook.com/" class="icon-fb social-link"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';

.footer {
  background: #cccccc;
  padding: 20px 0 10px;

  .footer-top {
    padding: 30px 0;
  }

  .footer-bottom {
    padding: 20px 0;

    .developer {

      a {
        font-weight: 500;
      }
    }
  }
}

*[class|="icon"] {
  width: $icon-size;
  height: $icon-size;
  position: relative;
  margin-right: 4px;
  display: inline-block;

  @media #{$s} {
    margin-right: 5px;
  }
  
  &:before {
    content: '';
    display: block;
    font-family: $font-icon;
    font-size: 18px;
    width: $icon-size;
    height: $icon-size;
    line-height: $icon-size;
    color: $icon-color;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    background: $icon-bg;
    text-align: center;
    transition: all 0.3s;
  }

  &:hover:before {
    background: $icon-bg-hover;
    color: $icon-color-hover;
  }
}

.icon-fb:before {
  content: '\f09a';
}

.icon-inst:before {
  content: '\f16d';
}

.icon-vk:before {
  content: '\f189';
}
</style>