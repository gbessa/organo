import './Team.css'
import Card from '../Card/Card'

const Team = ( {id, name, primaryColor, secondaryColor, collaborators, onDeleteCollaborator, onChangeColor} ) => {
    return (        
        collaborators.length > 0 &&
        <section className='team' style={{backgroundColor: secondaryColor}}>
            <input value={primaryColor} onChange={event => onChangeColor(event.target.value, id)} type='color' className='input-color' />
            <h3 style={{borderColor: primaryColor}}>
                {name}
            </h3>
            <div className='collaborators'>
                {collaborators?.map(collaborator => 
                    <Card 
                        key={collaborator.id}
                        id={collaborator.id}
                        title={collaborator.name}
                        description={collaborator.role}
                        imagePath={collaborator.imagePath}
                        backgroundColor={primaryColor}
                        onDelete={onDeleteCollaborator}
                    />
                )}
            </div>            
        </section>
    )
}

export default Team
