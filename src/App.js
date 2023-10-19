import { useState } from 'react'
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Team from './components/Team/Team';

function App() {

  const [collaborators, setCollaborators] = useState([])

  const onAddedCollaborator = (collaborator) => {
    //debugger
    console.log(collaborator)
    setCollaborators(collaborators => [...collaborators, collaborator]);
  }

  const teams = [
    {
      name: 'Backend',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9' 
    },
    {
      name: 'Frontend',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF' 
    },    
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2' 
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8' 
    },
    {
      name: 'UX & Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5' 
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9' 
    },
    {
      name: 'Innovation & Management',
      primaryColor: '#FF8A05',
      secondaryColor: '#FFEEDF' 
    }
  ]

  return (    
    <div className="App">
      <Banner />
      <Form teamNames={teams.map(team => team.name)} onAddCollaborator={onAddedCollaborator} />
      
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
      />)}      
    </div>
  );
}

export default App;
