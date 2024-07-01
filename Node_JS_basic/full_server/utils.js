const fs = require('fs').promises;

/**
 * Reads the database asynchronously.
 * @param {string} filePath Path to the database file.
 * @returns {Promise<Object>} Object containing arrays of first names per field.
 */
async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const students = {
      CS: [],
      SWE: [],
    };

    lines.forEach((line) => {
      if (line.trim() !== '') {
        const [firstName, field] = line.split(',');
        if (field === 'CS' || field === 'SWE') {
          students[field].push(firstName.trim());
        }
      }
    });

    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = { readDatabase };
