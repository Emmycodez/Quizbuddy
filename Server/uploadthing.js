import { createUploadthing } from "uploadthing/express";

const f = createUploadthing();

const uploadRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 4,
    },
  }).onUploadComplete((data) => {
    console.log("upload completed", data);
  }),
};

export { uploadRouter };

// If you need to export a type, you can use JSDoc-style comments
/**
 * @typedef {import("uploadthing/express").FileRouter} OurFileRouter
 */
