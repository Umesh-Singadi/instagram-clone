import { useState } from "react";
import useShowToast from "./useShowToast";

function usePreviewImg() {
  const [selectedFile, setSelectedFile] = useState(null);
  const showToast = useShowToast();

  const maxFileSizeInBytes = 2 * 1024 * 1024;
  function handleImageChange(e) {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFileSizeInBytes) {
        showToast("Error", "File size must be less then 2MB", "error");
        setSelectedFile(null);
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      showToast("Error", "Please upload an image file", "error");
      setSelectedFile(null);
    }
  }
  return { selectedFile, handleImageChange, setSelectedFile };
}

export default usePreviewImg;
