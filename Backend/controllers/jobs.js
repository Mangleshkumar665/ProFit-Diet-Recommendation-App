const Job = require("../models/jobs");

const { StatusCodes } = require("http-status-codes");

const { BadRequestError, NotFoundError } = require("../errors");

const createJob = async (req, res) => {
  try {
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json(job);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getAllJobs = async (req, res) => {
  try {
    const allJobs = await Job.find({ createdBy: req.user.userId }).sort(
      "createdAt"
    );

    // console.log(allJobs)
    res.status(StatusCodes.ACCEPTED).json({ allJobs });
  } catch (error) {
    res.send(error);
  }
};

const getJob = async (req, res) => {
  const jobId = req.params.id;
  const userId = req.user.userId;

  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId,
  });

  if (!job) {
    res.status(StatusCodes.NOT_FOUND).json({ msg: " no id found " });
  }

  res.status(StatusCodes.OK).json(job);
};

const upadateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const userId = req.user.userId;

    const { position, status, company } = req.body;

    if (position === "" || status === "" || company === "") {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: " updation fields are empty  " });
    }

    const job = await Job.findByIdAndUpdate(
      {
        _id: jobId,
        createdBy: userId,
      },
      req.body,
      { new: true, runValidators: true }
    );

    if (!job) {
      res.status(StatusCodes.NOT_FOUND).json({ msg: " no id found " });
    }

    res.status(StatusCodes.OK).json(job);
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json(error);
  }
};

const deleteJob = async (req, res) => {
  const jobId = req.params.id;
  const userId = req.user.userId;

  const job = await Job.findOneAndDelete({
    _id: jobId,
    createdBy: userId,
  });

  if (!job) {
    res.status(StatusCodes.NOT_FOUND).json({ msg: " no id found " });
  }

  res.status(StatusCodes.OK).send("deleted");
};

module.exports = {
  getAllJobs,
  getJob,
  upadateJob,
  deleteJob,
  createJob,
};



// findoneanddelete v/s findoneandremove  

// findoneanddelete  this goes through the ORM for validations reasons while findoenandremove doesnot goes through any sort of validation it straight forwardly contacts with the DB 