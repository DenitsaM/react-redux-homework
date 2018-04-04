import React from 'react';

class RickAndMortyComponent extends React.Component {
  constructor({ initialState }) {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      characters: initialState,
      items: ''
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(res => res.json())
      .then(
        (characters) => {
          this.setState({
            isLoaded: true,
            characters: characters.results
          });
          
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  filterList (event) {
    let updatedList = this.state.characters;
    console.log('updatedList', updatedList);
    console.log('this.state.items', event.target.value);
    updatedList = this.state.characters.filter(
      (characters) =>{
        console.log('characters.name', characters.name);
        return characters.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
      });

    console.log('updatedList', updatedList);
    this.setState({items: event.target.value, characters: updatedList });

  }
  render() {
    const { error, isLoaded, characters } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <form>
            <input 
              type="text" 
              className="form-control form-control-lg" 
              placeholder="Search" 
              onChange={this.filterList.bind(this)}
              value={this.state.items}/>
          </form>
        <div className="character-cards">
        {
          
          characters.map(character => (
            <Characters
              key={character.id}
              image={character.image}
              name={character.name}
              species={character.species}
            />
          ))
        }
      </div>
      </div>
      );
    }
  }
  
}
function Characters(props){
    return (     
      <ul className="character-list">        
            <li key={props.id} className="character-item">
              <div>
                <img src={props.image}/>
              </div>
              <h3>{props.name}</h3>
              <span>{props.species}</span>
            </li>        
        </ul>
    )
}

export default RickAndMortyComponent;
