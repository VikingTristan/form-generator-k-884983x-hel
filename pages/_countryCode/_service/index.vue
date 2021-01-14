<script>
export default {
  validate({ params, redirect }) {
    // just move user to the company lookup page for its respective service
    redirect(`/${params.countryCode}/${params.service}/firmaoppslag`)
  },
}
</script>
