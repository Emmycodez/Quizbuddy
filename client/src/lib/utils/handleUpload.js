export const handleUpload = async (formData, setUploadProgress, setIsUploading, authToken) => {
  try {
    const response = await fetch('http://localhost:5174/api/file/upload', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload file');
    }

    const result = await response.json();
    console.log(result);
    setUploadProgress(100);
    setIsUploading(false);

    return { success: true, data: result };
  } catch (error) {
    console.error('Error uploading file:', error);
    setIsUploading(false);
    return { success: false, error: error.message };
  }
};
