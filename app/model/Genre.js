const url = require('url')

class Genre {

  /**
   *
   * @param {object} [options]
   * @param {number} [options.id]
   * @param {string} [options.name]
   * @param {string} [options.picture]
   * @param {string} [options.picture_small]
   * @param {string} [options.picture_medium]
   * @param {string} [options.picture_big]
   * @param {string} [options.picture_xl]
   */
  constructor(options) {
    const opt = options || {}
    this.id = opt.id
    this.name = opt.name
    this.picture = opt.picture ? new url.URL(opt.picture) : null
    this.picture_small = opt.picture_small ? new url.URL(opt.picture_small) : null
    this.picture_medium = opt.picture_medium ? new url.URL(opt.picture_medium) : null
    this.picture_big = opt.picture_big ? new url.URL(opt.picture_big) : null
    this.picture_xl = opt.picture_xl ? new url.URL(opt.picture_xl) : null
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      picture: this.picture ? this.picture.toJSON() : null,
      picture_small: this.picture_small ? this.picture_small.toJSON() : null,
      picture_medium: this.picture_medium ? this.picture_medium.toJSON() : null,
      picture_big: this.picture_big ? this.picture_big.toJSON() : null,
      picture_xl: this.picture_xl ? this.picture_xl.toJSON() : null,
    }
  }

  static URL() {
    return new url.URL('https://api.deezer.com/genre/')
  }

  static generateURL(id) {
    return `${Genre.URL().toString()}/${id}`
  }
}

module.exports = Genre
