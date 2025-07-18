import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),

  filename: (req, file, cb) => cb(null, `${req.body.Title}.jpg`),
});

const upload = multer({ storage: storage });

export default upload;
