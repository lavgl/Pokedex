import React, { Component, PropTypes } from 'react';

import PokeCard from '../components/PokeCard';

class Pokedex extends Component {
  static propTypes = {
    pokemons: PropTypes.array
  };

  render() {
    const { pokemons/*, layout */} = this.props;
    console.log(pokemons);
    return (
      <div className="container-fluid">
        <h1 style={styles.header}>Pokedex</h1>
        <div className="row">
          <div className="hidden-md-up col-sm-12 col-xs-12">
            TOP INFO
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
            {pokemons.map(p => <PokeCard key={p.name} pokemon={p} />)}
          </div>
          <div className="col-lg-4 col-md-4 hidden-sm-down">
            RIGHT INFO
          </div>
        </div>
      </div>
    );
  }
}

export default Pokedex;

const styles = {
  header: {
    textAlign: 'center'
  }
};