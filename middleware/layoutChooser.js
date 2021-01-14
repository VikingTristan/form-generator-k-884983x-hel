export default (context) => {
  const {
    route: { params },
  } = context

  switch (params.step) {
    case 'firmaoppslag':
    case 'registrering':
      return 'special'
    case 'selskapsstruktur':
      return 'wild'
    default:
      return 'default'
  }
}
