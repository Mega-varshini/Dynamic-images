
import ImageCard from "./components/ImageCard";
import images from "./data/images";
import "./App.css";


function App() {

  return (
    <>

      <h1>
        Dynamic Image Gallery
      </h1>


      <div className="gallery">

        {
          images.map((image) => (

            <ImageCard 
              key={image.id}
              image={image}
            />

          ))
        }

      </div>

    </>
  );
}


export default App;