import React from 'react';



class RickAndMortyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      characters: []
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

  render() {
    const { error, isLoaded, characters } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul class="character-list">
          {characters.map(character => (
            <li key={character.id} class="character-item">
              <div>
                <img src={character.image}/>
              </div>
              <h3>{character.name}</h3>
              <span>{character.species}</span>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default RickAndMortyComponent;
