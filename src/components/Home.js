import React from 'react';

function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', document.getElementById('video').files[0]);

    fetch('/upload', {
      method: 'POST',
      body: formData
    }).then(response => response.text())
      .then(data => {
        document.getElementById('message').innerText = data;
      }).catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Upload and View Videos/GIFs</h2>
      <form id="uploadForm" onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="video">Upload Video/GIF:</label>
        <input type="file" name="video" id="video" accept="video/*,image/gif" />
        <button type="submit">Upload</button>
      </form>
      <div id="message"></div>
    </div>
  );
}

export default Home;
