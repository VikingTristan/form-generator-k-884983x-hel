export default function (req, res, next) {
  console.log(`Mock API request: ${req.method} ${req.url}`)
  next()
}
