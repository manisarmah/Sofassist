import React, { useState } from "react";
import "./style.css";
import Icon from './Vector.svg'

const Index = () => {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);

  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };

  return (
    <div className="App">
    <div className="text">
    <h1>Upload Picture</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, ipsa.</p>
    </div>
      <div className="container">
        {error && <p className="errorMsg">File not supported</p>}
        <div
          className="imgPreview"
          style={{
            background: imgPreview
              ? `url("${imgPreview}") no-repeat center/cover`
              : "#F2F2F2"
          }}
        >
          {!imgPreview && (
            <>
              <label htmlFor="fileUpload" className="customFileUpload">
              <img src={Icon} alt="" style={{width:"60px",marginTop:"-10px"}}/>
              </label>
              <input type="file" id="fileUpload" onChange={handleImageChange} />
            </>
          )}
        </div>
        <div className="buttons">
            <div className="submit">Submit</div>
            <div className="skip">Skip</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
