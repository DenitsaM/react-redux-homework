import React from 'react';
import RickAndMortyComponent from './RickAndMortyComponent';

class FilteredList extends React.Component{
    constructor(props) {
    super(props);
    
    this.state = {
        characters: [],
         items: []
    };
};

 filterList (event) {
    let updatedList = this.state.characters;
    console.log('updatedList', this.props);
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    console.log('updatedList', updatedList);
    this.setState({items: updatedList});
  }
    componentWillMount (){
      this.setState({items: this.state.characters});
    }
    render(){
        console.log('characters', this.characters);
      return (
        <div className="filter-list">
          <form>
            <input 
              type="text" 
              className="form-control form-control-lg" 
              placeholder="Search" 
              onChange={this.filterList.bind(this)}
              value={this.state.items}/>
          </form>
        <RickAndMortyComponent items={this.state.items} 
            initialState={this.state.characters}/>
        </div>
      );
    }
  };

  export default FilteredList;