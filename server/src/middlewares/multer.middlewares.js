import multer from "multer";
import path from "path";

const createStorage = (destination) => {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destination);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(
        null,
        file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
      );
    },
  });
};

export const categoryUpload = multer({
  storage: createStorage("./public/category"),
});

export const productUpload = multer({
  storage: createStorage("./public/product"),
});
