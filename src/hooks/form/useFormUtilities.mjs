const useFormUtilities = () => {
  const handleChange = (e, setImages, maxfilenumber) => {
    const targetFiles = e.target.files;
    const targetFilesArray = Array.from(targetFiles).slice(0, maxfilenumber);

    const selectedFiles = targetFilesArray.map((file) => URL.createObjectURL(file));
    setImages((prev) => prev.concat(selectedFiles));
  };

  const handleSimpleChange = (images, setImages, maxfilenumber) => {
    if (images && images.length > 0) {
      const selectedFiles = Array.from(images).slice(0, maxfilenumber);
      const fileURLs = selectedFiles.map((file) => URL.createObjectURL(file));
      setImages(fileURLs);
    }
  };

  return { handleChange, handleSimpleChange };
};

export default useFormUtilities;
