// import axios
import { useAxios } from "use-axios-client"
// import icons
import { BalloonHeartFill, CloudArrowDown } from 'react-bootstrap-icons';
// import animations
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
// declare API key
const apiKey = "23357829-9b7269d284a8f7fd567a2b936"

const Images = () => {
    const endpoint = `https://pixabay.com/api/?key=${apiKey}&q=puppies&orientation=horizontal&per_page=100`

    const { data, error, loading } = useAxios({
        url: endpoint
    })
    // console.log(data);
    if (loading) return <div className="loader"></div>
    if (!data) return "No data found."
    if (data.hits.length === 0) return "No results found."
    if (error) return "Error";

    console.log(data);

    const checkUserImage = (image) => {
        if (image.userImageURL === "") {
            return "https://cf.ltkcdn.net/kids/images/orig/239664-1604x988-snail.jpg"
        }
        else {
            return image.userImageURL
        }
    }

    // map through our data and return our rendered images
    const renderedImages = data.hits.map((image, index) => {

        return (
            <Animate
                key={index}
                play
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
                delay={index / 4}
            >

                <div className="image-item">
                    <img className="image" src={image.largeImageURL} alt={image.tags} />
                    <div>
                        <img className="profile-pic" src={checkUserImage(image)} alt={image.user} />
                    </div>
                    <div>{image.user}</div>
                    <div className="likes">
                        <BalloonHeartFill />
                        Likes:
                        {image.likes}
                    </div>
                    <div className="downloads">
                        <CloudArrowDown />
                        Downloads:
                        {image.downloads}
                    </div>
                </div>

            </Animate>
        )
    })
    return renderedImages
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

// Activity: 
// Add in a download count
// Add in a download icon
