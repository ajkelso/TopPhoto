
//FROM INITIAL TEST SETUP IN APP:
// const [files, setFiles] = useState([])
//   const [photos, setPhotos] = useState([])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const form = new FormData()
//     console.log(files[0]) 
//     // form.append('user_id', 1)   
//     // form.append('title', 'TEST')   
//     for (let i = 0; i < files.length; i++) {
//       const file = files[i]
//       form.append('images[]', file)
//     }
//     fetch('http://localhost:3000/photos', {
//       method: 'POST',
//       body: form
//     })
//     .then(res => res.json())
//     .then(res => setPhotos(res))
//   }

//   const handleFileChange = (e) => {
//     setFiles(e.target.files)
//   }

//   const renderImages = () => {
//     return photos.map(photo => {
//       return <img src={photo.image_url} alt={photo.id} key={photo.id} />
//     })
//   }

//   return (
//     <div >
//       <form onSubmit={handleSubmit}>
//         <input type='file' multiple onChange={handleFileChange} ></input>
//         <input type='submit'></input>
//         { photos.length ? renderImages() : null }
//       </form>
      
//     </div>
//   );