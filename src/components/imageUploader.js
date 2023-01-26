import PropsTypes from "prop-types";

function ImageUploader({ images, setImages, isShowImages = false }) {
  const handleImageChange = ({ target }) => {
    for (let img of target.files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(img);
      fileReader.onload = function () {
        setImages((prev) => [...prev, fileReader.result]);
      };
    }
  };

  const removeImage = (img) => {
    const rmImg = images?.filter((d) => d !== img);
    setImages(rmImg);
  };

  return (
    <div>
      <svg
        className="fill-current w-12 h-12 mb-3 text-blue-700"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
      </svg>

      <section>
        <input
          type="file"
          accept="image/jpg"
          id="file"
          multiple
          className="hidden"
          onChange={handleImageChange}
        />

        <h1>To Upload</h1>
        {isShowImages && images?.length
          ? images?.map((img) => (
              <div key={img}>
                <img src={img} alt={img} />
                <span onClick={() => removeImage(img)}>remove</span>
              </div>
            ))
          : null}
      </section>
    </div>
  );
}

ImageUploader.propTypes = {
  images: PropsTypes.array,
  setImages: PropsTypes.func,
  isShowImages: PropsTypes.bool,
};
export default ImageUploader;
