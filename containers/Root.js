import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
//import RaisedButton from 'material-ui/lib/raised-button';
import Spinner from 'react-spinner';

import Pokedex from './Pokedex';

//const api = 'http://pokeapi.co/api/v1/';

const PAGE_SIZE = 12;
const FIRST_LINK = 'http://localhost:3005/data';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: -1,
      totalPages: -1,
      pokemons: [],
      isLoading: true
    };

    this.gotoNext.bind(this);
    this.gotoPrevious.bind(this);
  }

  componentDidMount() {
    this.loadNext();
  }

  loadNext() {
    const link = this.state.next || FIRST_LINK;
    const { page, totalPages } = this.state;
    this.setState({ isLoading: true });

    fetch(link)
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from the server');
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          next: json.meta.next,
          page: page + 1,
          totalPages: totalPages + 1,
          pokemons: [...this.state.pokemons, ... json.objects],
          isLoading: false
        });
      });
  }

  gotoNext() {
    const { page, totalPages } = this.state;
    if (page === totalPages) {
      this.loadNext();
      return;
    }
    this.setState({ page: page + 1 });
  }

  gotoPrevious() {
    const { page } = this.state;
    this.setState({ page: page - 1});
  }

  render() {
    const { pokemons, page, isLoading } = this.state;
    const view = isLoading ?
      <Spinner /> :
      <Pokedex pokemons={pokemons.slice(page * PAGE_SIZE)}
               next={this.gotoNext}
               previous={this.gotoPrevious} />;

    return (
      <div>
        {view}
      </div>
    );
  }
}