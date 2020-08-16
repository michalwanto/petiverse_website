import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const FileLoader = () => {
  const [image, setImage] = useState({
    imageBase64: "",
  });
  const fileReader = new FileReader();

  useEffect(() => {
    Draggable.create(".content");
  });

  useEffect(() => {
    fileReader.addEventListener("load", async (event) => {
      setImage({
        imageBase64: event.target.result,
      });
      //   debugger;
      //   console.log(image);
    });
  });

  const handleChange = (event) => {
    const file = event.target.files[0];
    fileReader.readAsDataURL(file);
  };
  return (
    <div>
      <label>Import Your Dog Image</label>
      <input type="file" className="input-image" onChange={handleChange} />
      <img
        className="content"
        style={{ max_width: 1000, max_height: 1000 }}
        src={image.imageBase64}
      />
    </div>
  );
};

export default FileLoader;
