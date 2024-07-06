import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  displaName: { type: String },
  uid: { type: String, required: true},
  createdAt: { type: Date, default: Date.now },
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
});

const User = mongoose.model("User", userSchema);


const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  answer: { type: String, required: true },
});

const Question = mongoose.model("Question", questionSchema);

const chapterSchema = new mongoose.Schema({
  chapterName: { type: String, required: true },
  questions: [questionSchema],
});
const Chapter = mongoose.model("Chapter", chapterSchema);


const fileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User schema
  fileName: { type: String, required: true },
  filePath: { type: String, required: true },
  fileType: { type: String, required: true },
  fileSize: { type: Number, required: true },
  uploadStatus: {
    type: String,
    enum: ["PENDING", "PROCESSING", "FAILED", "SUCCESS"],
    default: "PENDING",
  },
  uploadDate: { type: Date, default: Date.now },
  key: { type: String },
  chapterBreakdown: [chapterSchema],
});

const File = mongoose.model("File", fileSchema);




export { File, User, Chapter, Question };
