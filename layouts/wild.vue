<template>
  <div>
    <header class="topbar topbar-xl-wide">
      <nuxt-link class="topbar-logo" to="/">
        <img
          src="https://design.swedbankpay.com/v/4.8.1/img/swedbankpay-logo-h.svg"
          alt="swedbankpay-logo"
          class="logotype-horizontal logotype-md"
        />
      </nuxt-link>
    </header>
    <div class="row">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <div class="row">
          <div class="col-12">
            <h1>Wild layout!</h1>
          </div>
        </div>
        <div class="col-xl-5 col-sm-6">
          <a href="#" class="cards cards-secondary">
            <img
              src="https://design.swedbankpay.com/v/4.8.1/img/documentation/cards/img-example.png"
            />
            <div class="cards-content">
              <span class="h4">Title</span
              ><span>Write the supportive paragraph here.</span>
            </div>
            <i class="material-icons">arrow_forward</i>
          </a>
        </div>
      </div>
      <div class="col-12">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Wild',
  mounted() {
    window.dg.script.initAll()
  },
}
</script>
