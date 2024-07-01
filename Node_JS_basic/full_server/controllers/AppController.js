class AppController {
  /**
   * Returns the homepage message.
   * @param {Object} req Express request object.
   * @param {Object} res Express response object.
   */
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!\n');
  }
}

module.exports = AppController;
