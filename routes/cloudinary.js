const express = require('express')
const router = express.Router({mergeParams: true})

const { uploadCloud, cloudinary } = require('../configs/cloudinary.config');

router.post('/', uploadCloud.single('file'), async (req, res, next) => {
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }

  try {
    console.log(req.file)
    console.log(req.body.public_id)
    const result = await cloudinary.uploader.upload(req.file.path, {
      public_id: req.body.public_id
    })

    res.json({ result, reqBody: req.body, reqFile: req.file });
  } catch(err) {
    res.send({err})
  }
 
});

module.exports = router;