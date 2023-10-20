import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Card.css'

const Card = ({ id, title, description, imagePath, backgroundColor, favorited, onDelete, onFavorite }) => {

    function favorite() {
        onFavorite(id)
    }

    const favoriteProps = {
        size: 25,
        onClick: favorite
    }

    return(
        <div className='card'>
            <AiFillCloseCircle
                size={25} 
                color="#696969" 
                className='delete' 
                onClick={() => onDelete(id)} 
            />
            <div className='header' style={{backgroundColor: backgroundColor}}>
                <img src={imagePath} alt={title} />
            </div>
            <div className='footer'>
                <h4>{title}</h4>
                <h5>{description}</h5>
                <div className='favorite'>
                    {favorited
                        ? <AiFillHeart {...favoriteProps} color='ff0000' /> 
                        : <AiOutlineHeart {...favoriteProps} />}
                </div>
            </div>
        </div>
    )
}


export default Card