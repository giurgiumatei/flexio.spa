import React, { useState } from 'react';

const UploadImage = (handleImageChange) => {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    handleImageChange();
  };

  return (
    <div>
      <input type='file' accept='image/*' onChange={handleChange} />
      <img src={file} width='40%' max-width='100px'/>
    </div>
  );
};

export default UploadImage;
