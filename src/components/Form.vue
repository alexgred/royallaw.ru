<template>
  <div id="contacts-form" class="block-form block sc-hidden">
    <div class="container">
      <div class="block-title">
        <h3>Свяжитесь с нами</h3>
      </div>
      <div class="block-description">
        <p>Используйте данную форму, для того чтобы задать интересующий вас правовой вопрос, пожалуйста будьте настолько конкретными, на сколько это возможно.</p>
      </div>
      <div class="block-content">
        <form action="" id="contacts" method="POST" role="form" class="form-contacts">
          <div class="form-group name">
            <input type="text" class="form-control name" name="name" id="name" placeholder="Имя*" required />
          </div>
          <div class="form-group phone-number">
            <input type="text" class="form-control phone" name="phone-number" id="phone" placeholder="Телефон*" required />
          </div>
          <div class="form-group email">
            <input type="email" name="email" class="form-control email" id="email" placeholder="E-mail" />
          </div>
          <div class="form-group question">
            <textarea name="question" id="question" class="form-control question" rows="5" placeholder="Вопрос"></textarea>
          </div>

          <Button :primary="true" name="Отправить" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '~/components/Button';
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';

</style>