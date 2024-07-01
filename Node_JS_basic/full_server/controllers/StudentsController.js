const { readDatabase } = require('../utils');

class StudentsController {
  /**
   * Returns all students grouped by major.
   * @param {Object} req Express request object.
   * @param {Object} res Express response object.
   */
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.databaseFile);
      const response = `
        This is the list of our students
        Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}
        Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}
      `;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }

  /**
   * Returns students by major.
   * @param {Object} req Express request object.
   * @param {Object} res Express response object.
   */
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(req.databaseFile);
      const list = students[major].join(', ');
      const response = `List: ${list}`;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }
}

module.exports = StudentsController;
