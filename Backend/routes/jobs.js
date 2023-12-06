const express = require("express");

const router = express.Router();

const {
  getAllJobs,
  getJob,
  upadateJob,
  deleteJob,
  createJob,
} = require("../controllers/jobs");
      
router.route('/').post(createJob).get(getAllJobs)

router.route('/:id').get(getJob).delete(deleteJob).patch(upadateJob)

module.exports = router