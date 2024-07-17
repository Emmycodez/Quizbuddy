import { User, File as FileModel } from "../database/models/User.js";
export const createMockFileForUser = async (userId) => {
  try {
    // Check if the user exists
    const user = await User.findOne({ uid: userId });
    if (!user) {
      throw new Error("User not found");
    }

    // Create a new file document
    const newFile = new FileModel({
      user: user._id, // Reference to the user
      fileName: "Sample File",
      filePath: "/path/to/samplefile.pdf",
      fileType: "pdf",
      fileSize: 1024, // Size in bytes
      uploadStatus: "SUCCESS",
      key: "samplefile-key",
      chapterBreakdown: [
        {
          chapterName: "Sample Chapter 1",
          questions: [
            {
              questionText: "Sample Question 1?",
              answer: "Sample Answer 1",
            },
          ],
        },
        {
          chapterName: "Sample Chapter 2",
          questions: [
            {
              questionText: "Sample Question 2?",
              answer: "Sample Answer 2",
            },
          ],
        },
      ],
    });

    // Save the new file to the database
    await newFile.save();

    // Update the user's files array to include the new file's ObjectId
    user.files.push(newFile._id);
    await user.save();

    console.log("Mock file created and added to the user's files array.");
  } catch (error) {
    console.error("Error creating mock file:", error);
  }
};
