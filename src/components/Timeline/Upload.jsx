import React, { useState } from "react";
const Upload = ({ setImgURL }) => {
  const [image, setImage] = useState("");

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ptknqfzo");
    data.append("cloud_name", "dumhajjym");
    fetch("https://api.cloudinary.com/v1_1/dumhajjym/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setImgURL(data.url);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <button type="button" onClick={uploadImage}>
          Upload
        </button>
      </div>
    </div>
  );
};
export default Upload;
