class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let arr = string.split(" ")
    let newArr = [];
    arr.forEach(word => {
      if(!exceptions.includes(word)) {
        newArr = [...newArr, this.capitalize(word)]
      } else {
        newArr = [...newArr, word.toLowerCase()]
      }
    })
    newArr[0] = Formatter.capitalize(newArr[0])
    return newArr.join(" ")
  }
}
