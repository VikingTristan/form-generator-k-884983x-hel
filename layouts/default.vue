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
    <Nuxt />
  </div>
</template>
<script>
export default {
  mounted() {
    window.dg.script.initAll()
  },
}
</script>
