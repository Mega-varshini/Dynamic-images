
function ImageCard(props) {

    return (
        <>
            <div className="card">

                <img 
                    src={props.image.url}
                    alt={props.image.title}
                />

                <h2>
                    {props.image.title}
                </h2>

                <p>
                    {props.image.description}
                </p>

            </div>
        </>
    );
}

export default ImageCard;


