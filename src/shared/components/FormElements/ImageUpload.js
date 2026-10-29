import React, { useRef } from "react";
import "./ImageUpload.css";
import Button from "./Button";

const ImageUpload = (props) => {
  const pickImageHandler = () => {
    filePickerRef.current.click();
  }

  const pickedHandler = (event) => {
    console.log(event.target);
    console.log(event.target.files);
  }

  const filePickerRef = useRef();

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
          {props.previewUrl && <img src={props.previewUrl} alt="Preview" />}
          {!props.previewUrl && <p>Please pick an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
