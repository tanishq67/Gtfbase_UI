import React from 'react';
import styles from './App.module.css';
import MediaCard from './components/Card/MediaCard';
import SpeciesPicker from './components/SpeciesPicker/SpeciesPicker';




Species = {
  "Pan_troglodytes" : {
    "species": "Pan_troglodytes",
    "img": "",
    "content": "",
    "link":""
  },
  "Gorilla_gorilla": {
    "species": "Gorilla_gorilla",
    "img":"",
    "content":"",
    "link":""
  },
  "Macaca_mulatta" :{
    "species": "Macaca_mulatta" ,
    "img": "",
    "content":"",
    "link":""
  }
}

class App extends React.Component {
  state = {
    data: {},
    speice: '',
  }

  handleSpeciesChange = (specie) => {
    const data = Species[specie];

    this.setState({ data, specie: specie});
  }
  render() {
    const { data, specie } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={'https://i.ibb.co/DL5N2QQ/Gtfbase-Logo.png'}/>
        <SpeciesPicker handleSpeciesChange={this.handleSpeciesChange} />
        <MediaCard data={data}/>
      </div>
    );
  }
}

export default App;