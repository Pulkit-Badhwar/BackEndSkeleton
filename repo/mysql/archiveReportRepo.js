// Id, Category, Report, PublishDate, description, originalFileName, Key(S3 Bucket), S3 eTag, s3BucketName, req.user.email (created_by), created_At (current_time)

function save(archive) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO app_archive_report (category, report, publishDate, description, originalFileName, s3key, etag, bucketName, createdBy, createdAt) VALUES ?';
    const values = [[archive.category, archive.report, archive.publishDate, archive.description, archive.originalFileName, archive.s3key, archive.etag, archive.bucketName, archive.createdBy, archive.createdAt]];
    mysqlCon.query(sql, [values], (err, result) => {
      if (err) {
        logger.error(`archiveRepo :: save :: error : ${JSON.stringify(archive)}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function find(offset, pageSize) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM app_archive_report ORDER BY id limit ?,?';
    mysqlCon.query(sql, [offset, pageSize], (err, result) => {
      if (err) {
        logger.error(`archiveRepo :: error :: find :: ${err}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function countAllRecords() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT COUNT(*) as count FROM app_archive_report';
    mysqlCon.query(sql, (err, result) => {
      if (err) {
        logger.error(`archiveReportRepo :: error :: find :: ${err}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function update(archiveId, updated) {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE app_archive_report SET ? where id = ?';
    mysqlCon.query(sql, [updated, archiveId], (err, result) => {
      if (err) {
        logger.error(`app_archive_report :: update :: error : id : ${archiveId} :: updated : ${JSON.stringify(updated)}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function removeById(archiveId) {
  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM app_archive_report where id = ?';
    mysqlCon.query(sql, [archiveId], (err, result) => {
      if (err) {
        logger.error(`app_report_archive :: removeById :: error : archiveId : ${archiveId}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function findById(archiveId) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM app_archive_report where id = ?';
    mysqlCon.query(sql, [archiveId], (err, result) => {
      if (err) {
        logger.error(`app_archive_report :: findById :: error :: ${archiveId}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function findByCategoryAndReportAndRangeWithPagination(category, report, startDate, endDate, offset, pageSize) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM app_archive_report where publishDate >= ? AND publishDate <= ? AND category = ? AND report = ? ORDER BY publishDate DESC LIMIT ?,?';
    mysqlCon.query(sql, [startDate, endDate, category, report, offset, pageSize], (err, result) => {
      if (err) {
        logger.error(`app_archive_report :: findByCategoryAndRangeWithPagination :: error :: startDate: ${startDate} :: endDate : ${endDate} :: category : ${JSON.stringify(category)} :: report : ${JSON.stringify(report)}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function countByCategoryAndReportAndRange(category, report, startDate, endDate) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT count(id) as count FROM app_archive_report where publishDate >= ? AND publishDate <= ? AND category = ? AND report = ?';
    mysqlCon.query(sql, [startDate, endDate, category, report], (err, result) => {
      if (err) {
        logger.error(`app_archive_report :: countAll :: error :: startDate: ${startDate} :: endDate : ${endDate} :: category : ${JSON.stringify(category)} :: report : ${JSON.stringify(report)}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function findByCategoryAndReportWithPagination(category, report, offset, pageSize) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM app_archive_report where category = ? AND report = ? ORDER BY publishDate DESC LIMIT ?,?';
    mysqlCon.query(sql, [category, report, offset, pageSize], (err, result) => {
      if (err) {
        logger.error(`app_archive_report :: findByCategoryAndReportWithPagination :: error :: category : ${JSON.stringify(category)} :: report : ${JSON.stringify(report)}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function countByCategoryAndReport(category, report) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT count(id) as count FROM app_archive_report where category = ? AND report = ?';
    mysqlCon.query(sql, [category, report], (err, result) => {
      if (err) {
        logger.error(`app_archive_report :: countCategoryAndReport :: error :: category : ${JSON.stringify(category)} :: report : ${JSON.stringify(report)}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function findByCategoryAndRangeWithPagination(category, startDate, endDate, offset, pageSize) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM app_archive_report where publishDate >= ? AND publishDate <= ? AND category = ? ORDER BY publishDate DESC LIMIT ?,?';
    mysqlCon.query(sql, [startDate, endDate, category, offset, pageSize], (err, result) => {
      if (err) {
        logger.error(`app_archive_report :: findByCategoryAndRangeWithPagination :: error :: startDate: ${startDate} :: endDate : ${endDate} :: category : ${JSON.stringify(category)}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function countByCategoryAndRange(category, startDate, endDate) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT count(id) as count FROM app_archive_report where publishDate >= ? AND publishDate <= ? AND category = ?';
    mysqlCon.query(sql, [startDate, endDate, category], (err, result) => {
      if (err) {
        logger.error(`app_archive_report :: countCategoryAndRange :: error :: startDate: ${startDate} :: endDate : ${endDate} :: category : ${JSON.stringify(category)}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function findByCategoryWithPagination(category, offset, pageSize) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM app_archive_report where category = ? ORDER BY publishDate DESC LIMIT ?,?';
    mysqlCon.query(sql, [category, offset, pageSize], (err, result) => {
      if (err) {
        logger.error(`app_archive_report :: findByCategoryWithPagination :: error ::  category : ${JSON.stringify(category)}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function countByCategory(category) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT count(id) as count FROM app_archive_report where category = ?';
    mysqlCon.query(sql, [category], (err, result) => {
      if (err) {
        logger.error(`app_archive_report :: countCategory :: error ::  category : ${JSON.stringify(category)}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function findByRangeWithPagination(startDate, endDate, offset, pageSize) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM app_archive_report where publishDate >= ? AND publishDate <= ? ORDER BY publishDate DESC LIMIT ?,?';
    mysqlCon.query(sql, [startDate, endDate, offset, pageSize], (err, result) => {
      if (err) {
        logger.error(`app_archive_report :: findByRangeWithPagination :: error :: startDate: ${startDate} :: endDate : ${endDate}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function countByRange(startDate, endDate) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT count(id) as count FROM app_archive_report where publishDate >= ? AND publishDate <= ?';
    mysqlCon.query(sql, [startDate, endDate], (err, result) => {
      if (err) {
        logger.error(`app_archive_report :: countRange :: error :: startDate: ${startDate} :: endDate : ${endDate}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

module.exports = {
  save,
  find,
  countAllRecords,
  update,
  removeById,
  findById,
  findByCategoryAndReportAndRangeWithPagination,
  countByCategoryAndReportAndRange,
  findByCategoryAndReportWithPagination,
  countByCategoryAndReport,
  findByCategoryAndRangeWithPagination,
  countByCategoryAndRange,
  findByCategoryWithPagination,
  countByCategory,
  findByRangeWithPagination,
  countByRange,
};