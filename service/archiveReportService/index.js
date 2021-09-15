const createArchiveReport= require('./createArchiveReport');
const fetchArchiveReport = require('./fetchArchiveReport');
const findArchiveById = require('./findArchiveById');
const updateArchiveReport = require('./updateArchiveReport');
const deleteArchive = require('./deleteArchive');
const groupArchiveCategory = require('./groupArchiveCategory');

module.exports = {
  createArchiveReport,
  fetchArchiveReport,
  findArchiveById,
  updateArchiveReport,
  deleteArchive,
  groupArchiveCategory,
};