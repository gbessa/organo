import { AiFillCloseCircle } from 'react-icons/ai';
import './Card.css'

const Card = ({ id, title, description, imagePath, backgroundColor, onDelete }) => {
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
            </div>
        </div>
    )
}


export default Card