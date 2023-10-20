import { useState } from 'react'
import hexToRgba from 'hex-to-rgba';
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Team from './components/Team/Team';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Backend',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Frontend',
      color: '#82CFFA'
    },    
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'UX & Design',
      color: '#DB6EBF' 
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Innovation & Management',
      color: '#FF8A05'
    }
  ])

  const initialCollaborators = [
    {
      id: uuidv4(),
      favorited: false,
      name: 'Gustavo Bessa',
      role: '.NET Developer',
      imagePath: 'https://github.com/gbessa.png',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'Gustavo Bessa',
      role: 'JAVA Developer',
      imagePath: 'https://github.com/gbessa.png',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'Leandro Siciliano',
      role: 'Sr. Java Developer',
      imagePath: 'https://github.com/ltsiciliano.png',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'Todd McLeod',
      role: 'Sr. Golang Developer',
      imagePath: 'https://github.com/GoesToEleven.png',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'Marcelo Guimaraes',
      role: 'React Developer',
      imagePath: 'https://github.com/MarceloGuimaraes.png',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'Joyces Aquino',
      role: 'Software Developer',
      imagePath: 'https://github.com/joycesaquino.png',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      favorited: false,
      name: 'Igor Andrade',
      role: 'Software Developer',
      imagePath: 'https://github.com/IgorAndrade.png',
      team: teams[3].name
    },    
  ]

  const [collaborators, setCollaborators] = useState(initialCollaborators)

  const addCollaborator = (collaborator) => {
    //debugger
    console.log(collaborator)
    setCollaborators(collaborators => [...collaborators, {id: uuidv4(), ...collaborator}]);
  }

  const addTeam = (team) => {
    //debugger
    console.log(team)
    setTeams(teams => [...teams, {id: uuidv4(), ...team}]);
  }
  
  function deleteCollaborator(id) { 
    console.log("Deleting collaborator " + id)
    setCollaborators(collaborators.filter(collaborator => collaborator.id !== id))
  }

  const changeTeamColor = (color, teamId) => { 
    setTeams(teams.map(team => {
      if (team.id === teamId) {
        team.color = color
      }
    return team
  })) }

  function handleOnFavorite(id) {
    setCollaborators(
      collaborators.map(collaborator => {
        if (collaborator.id === id) {
          collaborator.favorited = !collaborator.favorited          
        }
        return collaborator
      }))
  }

  return (    
    <div className="App">
      <Banner />
      <Form 
        teamNames={teams.map(team => team.name)} 
        onAddCollaborator={addCollaborator}
        onAddTeam={addTeam}
      />
      
      {teams.map(team => <Team 
        key={team.id}
        id={team.id} 
        name={team.name} 
        primaryColor={team.color} 
        secondaryColor={hexToRgba(team.color, '0.2')}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
        onDeleteCollaborator={deleteCollaborator}
        onChangeColor={changeTeamColor}
        onFavorite={handleOnFavorite}
      />)}      
    </div>
  );
}

export default App;
