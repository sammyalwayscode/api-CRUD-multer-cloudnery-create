const express = require("express");
const studentModel = require("../model/model");
const router = express.Router();
const multer = require("multer");
const cloudinary = require("cloudinary");

const storageUpload = multer.diskStorage({
  destination: "/uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage: storageUpload }).single("picture");

cloudinary.config({
  cloud_name: "dwrv91969",
  api_key: "871341554644239",
  api_secret: "Mt_S1riHhh5g9plWHVdpiHyyv58",
});

router.get("/", async (req, res) => {
  try {
    const getData = await studentModel.find();
    res.status(200).json({
      message: "Found Sucessfully",
      data: getData,
    });
  } catch (error) {
    res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getDataByID = await studentModel.findById(req.params.id);
    res.status(200).json({
      message: "Found Sucessfully",
      data: getDataByID,
    });
  } catch (error) {
    res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
});

router.post("/", uploads, async (req, res) => {
  const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path);
  console.log(cloudinaryUpload);
  try {
    const postData = await studentModel.create({
      name: req.body.name,
      email: req.body.email,
      stark: req.body.stark,
      picture: cloudinaryUpload.secure_url,
      date: Date.now(),
    });
    res.status(200).json({
      message: "Posted Sucessfull",
      data: postData,
    });
  } catch (error) {
    res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
});

module.exports = router;
