const upperCaseFirstLetter = str => str.replace(str.charAt(0), str.charAt(0).toUpperCase())

const lowerCaseFirstLetter = str => str.replace(str.charAt(0), str.charAt(0).toLowerCase())

module.exports = {
  upperCaseFirstLetter,
  lowerCaseFirstLetter
}