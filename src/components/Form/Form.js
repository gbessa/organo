import { useState } from 'react'
import './Form.css'
import TextField from '../TextField/TextField';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';

const Form = ({teamNames, onAddCollaborator}) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [imagePath, setImagepath] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
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
        //setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Fill the form to create the collaborator's card</h2>
                <TextField 
                    label="Name"
                    required={true}
                    placeholder="Inform your name"
                    onChange={value => setName(value)}
                    value={name} />
                <TextField 
                    label="Role"
                    required={true}
                    placeholder="Inform your role"
                    onChange={value => setRole(value)}
                    value={role} />
                <TextField
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
        </section>
    )
}

export default Form