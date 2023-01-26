import { useState } from "react";
import ImageUploader from "./components/imageUploader";

function App() {
  const [images, setImages] = useState([]);
  return (
    <>
      <ImageUploader images={images} setImages={setImages} />
    </>
  );
}

export default App;
