<template>
  <Layout>
    <div class="block-about block sc-hidden">
      <div class="container">
        <div class="block-title">
          <h2>О нас</h2>
        </div>
        <div class="block-content">
          <div class="row">
            <div class="col-xs-12 col-sm-8">
                <p>Для нас главной задачей является достижение целей и интересов наших клиентов. И этому способствует неукоснительное соблюдение нами основных принципов нашей работы:</p> 
                <ul>
                  <li>Индивидуальный подход к каждому Клиенту;</li>
                  <li>предоставление Клиентам полной и достоверной информации для совместного принятия решений;</li>
                  <li>работа на результат.</li>
                </ul>
                <p>Качество оказываемой правовой помощи всегда высоко ценилось на рынке юридических услуг, для того чтобы оправдывать ожидания наших клиентов мы непрерывно осуществляем мониторинг изменений законодательства и работаем с оглядкой на грядущие новеллы.</p>
                <p>В отношении наших услуг мы предлагаем гибкую ценовую политику, что сделало предоставление юридических услуг доступнее как для компаний и индивидуальных предпринимателей, так и для физических лиц. Но самое главное, что при снижении стоимости услуг мы не снижаем их качества!</p>
                <p>Мы также четко придерживаемся политики конфиденциальности по отношению к нашим клиентам. Задать интересующие вопросы можно прямо сейчас. Просто заполните форму обратной связи и получите помощь юриста в самые короткие сроки.</p>
            </div>
            <div class="col-xs-12 col-sm-4">
              <div class="block-contact-info">
                <div class="contact-info-item">
                  <div class="title">
                    Телефон
                  </div>
                  <div class="info">
                    <a href="tel:+79181335500">+7 (918) 133-55-00</a>
                  </div>
                </div>
                <div class="contact-info-item">
                  <div class="title">
                    E-mail
                  </div>
                  <div class="info">
                    <a href="mailto:a.vlasenko@royallaw.ru">a.vlasenko@royallaw.ru</a>
                  </div>
                </div>
                <div class="contact-info-item">
                  <div class="title">
                    Адрес
                  </div>
                  <div class="info">
                    г. Краснодар, Краснодарский край, РФ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block-areas block sc-hidden">
      <div class="container">
        <div class="block-title">
          <h3>Сферы практики</h3>
        </div>
        <div class="block-content">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-lg-3">
              <div class="areas-item">
                <div class="areas-title">
                  Консультирование
                </div>
                <div class="areas-description">
                  В целях оптимизации материальных затрат Доверителей на юридическую помощь консультируем юридические и физические  лица по всему спектру правовых вопросов как в устной, так и в письменной форме.
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-3">
              <div class="areas-item">
                <div class="areas-title">
                  Представительство
                </div>
                <div class="areas-description">
                  Представительство и ведение дел в судах является приоритетным направлением нашей работы. Мы готовы защищать ваши интересы на любой стадии процесса в арбитраже и судах общей юрисдикции, исполнительном производстве.
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-3">
              <div class="areas-item">
                <div class="areas-title">
                  Подготовка документов
                </div>
                <div class="areas-description">
                  Осуществляем подготовку и составление договоров, соглашений, заявлений, жалоб, претензий и прочих документов с учетом норм действующего законодательства, правоприменительной судебной практики.
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-3">
              <div class="areas-item">
                <div class="areas-title">
                  Ознакомление с материалами дел
                </div>
                <div class="areas-description">
                  Осуществляем ознакомление с материалами дел и  получение документов во всех судебных инстанциях, органах ФССП и в прочих учреждениях в кратчайшие сроки. Отправим результаты удобным для вас способом.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="block-contacts" class="block-contacts block sc-hidden">
      <div class="container">
        <div class="block-content">
          <div class="row">
            <div class="hidden-xs col-xs-6 col-sm-4">
              <div class="contacts-item text-center">
                <h4 class="email-title contacts-title">
                  E-mail
                </h4>
                <div class="email-content contacts-text">
                  <a href="mailto:a.vlasenko@royallaw.ru">a.vlasenko@royallaw.ru</a>
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-sm-4">
              <div class="contacts-item text-center">
                <h4 class="address-title contacts-title">
                  Адрес
                </h4>
                <div class="address-text contacts-text">
                  г. Краснодар, Краснодарский край, РФ
                </div>
              </div>
            </div>
            <div class="col-xs-6 col-sm-4">
              <div class="contacts-item text-center">
                <h4 class="call-title contacts-title">
                  Телефон
                </h4>
                <div class="address-text contacts-text">
                  <a href="tel:+79181335500">+7 (918) 133-55-00</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Form />
  </Layout>
</template>

<script>
import Form from '~/components/Form';

export default {
  components: {
    Form
  },
  metaInfo: {
    title: 'Royal Law',
    meta: [
      {
        name: 'description',
        content: 'Консультирование, представительство в судах, подготовка документов и договоров, а также любые виды юридеческих услуг.'
      },
      {
        name: 'keywords',
        content: 'консультирование, представительство, подготовка документов, договоры'
      }
    ]
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
