// import axios
import { useAxios } from "use-axios-client"
// declare API key
const apiKey = "23357829-9b7269d284a8f7fd567a2b936"

const Images = () => {
    const endpoint = `https://pixabay.com/api/?key=${apiKey}&q=snail`

    const { data, error, loading } = useAxios({
        url: endpoint
    })
    // console.log(data);

    // map the data 
    // return the mapped array

}

const ImageGallery = () => {
    return (
        <div id="image-gallery" className="section">
            <h2>Gallery</h2>
            <div id="results">
                <Images />
            </div>
        </div>
    )
}

export default ImageGallery 