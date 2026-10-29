import React, { useRef, useState, useEffect } from "react";
import "./ImageUpload.css";
import Button from "./Button";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;

    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setPreviewUrl(URL.createObjectURL(pickedFile));
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }

    // Call the onInput prop function to notify the parent component about the selected file and its validity
    props.onInput(props.id, pickedFile, fileIsValid);
  };

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      // Set the preview URL to the result of the file reader, which is a base64-encoded string representing the image
      setPreviewUrl(fileReader.result);
    };
  }, [file]);

  return (
    <div className="form-control">
      <input
        id={props.id}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.png,.jpeg"
        ref={filePickerRef}
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
