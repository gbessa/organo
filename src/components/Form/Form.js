import { useState } from 'react'
import './Form.css'
import Field from '../Field/Field';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';

const Form = ({teamNames, onAddCollaborator, onAddTeam}) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [imagePath, setImagepath] = useState('')
    const [team, setTeam] = useState('')

    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('#FFFFFF')

    const onSaveCollaborator = (event) => {
        event.preventDefault()
        onAddCollaborator({
            name, 
            role, 
            imagePath, 
            team
        })
        setName('')
        setRole('')
        setImagepath('')
        setTeam('')
    }

    const onSaveTeam = (event) => {
        event.preventDefault()
        onAddTeam({
            name:teamName, 
            color:teamColor
        })
        setTeamName('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSaveCollaborator}>
                <h2>Fill the form to create the collaborator's card</h2>
                <Field 
                    label="Name"
                    required={true}
                    placeholder="Inform your name"
                    onChange={value => setName(value)}
                    value={name} />
                <Field 
                    label="Role"
                    required={true}
                    placeholder="Inform your role"
                    onChange={value => setRole(value)}
                    value={role} />
                <Field
                    label="Image"
                    required={true}
                    placeholder="Provide the image URL"
                    onChange={value => setImagepath(value)}
                    value={imagePath} />
                <Dropdown 
                    label="Team" 
                    required={true} 
                    itens={teamNames} 
                    onChange={value => setTeam(value)}
                    value={team} />
                <Button>
                    Create card
                </Button>
            </form>

            <form onSubmit={onSaveTeam}>
                <h2>Fill the form to create a new Team</h2>
                <Field 
                    label="Name"
                    required
                    placeholder="Inform the team name"
                    onChange={value => setTeamName(value)}
                    value={teamName} />
                <Field 
                    type='color'
                    label="Color"
                    required
                    placeholder="Inform the team color"
                    onChange={value => setTeamColor(value)}
                    value={teamColor} />
                <Button>
                    Create a new Team
                </Button>
            </form>            
        </section>
    )
}

export default Form