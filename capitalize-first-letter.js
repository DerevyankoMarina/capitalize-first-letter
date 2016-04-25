module.exports = function capitalizeFirstLetter(str) {
 return str.replace(/\b\w/g, function(x){
  return x.toUpperCase()
 })
}