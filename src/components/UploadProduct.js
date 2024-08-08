import React, { useState } from 'react';
import { storage } from '../firebase';

const UploadProduct = () => {
  const [imageUpload, setImageUpload] = useState();
  const uploadProduct = () => {
    if (imageUpload == null) return;
  };

  return (
    <div>
      <h1>UploadProduct</h1>
      <div>
        <input
          type='file'
          onChange={(event) => setImageUpload(event.target.files[0])}
        />
        <button onClick={uploadProduct}>Upload Image</button>
      </div>
    </div>
  );
};

export default UploadProduct;
