import axios from 'axios';

export const handleUpload = async (formData, setUploadProgress, setIsUploading, authToken) => {
  try {
    if (!authToken) {
      throw new Error("No authentication token provided");
    }

    const response = await axios.post('https://quizbuddy-one.vercel.app/api/file/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authToken}`  // Ensure token is included here
      },
      onUploadProgress: (progressEvent) => {
        setUploadProgress((progressEvent.loaded / progressEvent.total) * 100);
      }
    });
    return { success: true, data: response.data };
    console.log(response.data);
  } catch (error) {
    console.error('Error uploading file:', error);
    return { success: false, error: error.message };
  } finally {
    setIsUploading(false);
  }
};
