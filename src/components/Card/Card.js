import './Card.css'

const Card = ({ title, description, imagePath, backgroundColor }) => {
    return(
        <div className='card'>
            <div className='header' style={{backgroundColor: backgroundColor}}>
                <img src={imagePath} alt={title} />
            </div>
            <div className='footer'>
                <h4>{title}</h4>
                <h5>{description}</h5>
            </div>
        </div>
    )
}


export default Card