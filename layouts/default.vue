<template>
  <div>
    <header class="topbar">
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
        <p>Default layout</p>
      </div>
      <div class="col-12">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Default',
  mounted() {
    window.dg.script.initAll()
  },
}
</script>
