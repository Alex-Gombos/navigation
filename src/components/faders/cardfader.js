import './cardfader.css'

const CardFader = ({image}) => {
    return(
        <div className="card-fader"
        style={{
            backgroundImage: `url(${image})`,
        }}>
        </div>
    );
};

export default CardFader
