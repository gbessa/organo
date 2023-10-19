import './Team.css'
import Card from '../Card/Card'

const Team = ( {name, primaryColor, secondaryColor, collaborators} ) => {
    return (
        collaborators.length > 0 &&
        <section className='team' style={{backgroundColor: secondaryColor}}>
            <h3 style={{borderColor: primaryColor}}>
                {name}
            </h3>
            <div className='collaborators'>
                {collaborators?.map(collaborator => 
                    <Card 
                        key={collaborator.name}
                        title={collaborator.name}
                        description={collaborator.role}
                        imagePath={collaborator.imagePath}
                        backgroundColor={primaryColor}
                    />
                )}
            </div>            
        </section>
    )
}

export default Team
