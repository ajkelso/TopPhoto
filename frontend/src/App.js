import React, {useState} from 'react'


function App() {

  const [files, setFiles] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData()
    console.log(files[0]) 
    // form.append('user_id', 1)   
    // form.append('title', 'TEST')   
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      form.append('images[]', file)
    }
    // form.append('images', files[0]) (for only 1 image)
    fetch('http://localhost:3000/photos', {
      method: 'POST',
      body: form
    })
  }

  const handleFileChange = (e) => {
    setFiles(e.target.files)
  }

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input type='file' multiple onChange={handleFileChange} ></input>
        <input type='submit'></input>
      </form>
      
    </div>
  );
}

export default App;
