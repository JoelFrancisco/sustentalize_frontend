import { useState } from 'react';

import { api } from '../../utils/api';

import './style.css';

const AddProduct = () => {
  const [zipCode, setZipCode] = useState<string>();
  const [streetName, setStreetName] = useState<string>();
  const [houseNumber, setHouseNumber] = useState<number>();

  const saveProduct = async () => {
    await api.post({ });
  }

  return (
    <div className="container">
      <div className="wrapper">
        <input 
          type="text" 
          placeholder="Insira o nome do produto" 
          onChange={event => setZipCode(event.target.value)}
        />

        <input 
          type="text" 
          placeholder="Insira o preço do produto" 
          onChange={event => setStreetName(event.target.value)}
        />

        <input 
          type="text" 
          placeholder="Insira a quantidade do produto" 
          onChange={event => setHouseNumber(Number(event.target.value))}
        />

        <input 
          type="text" 
          placeholder="Insira o tamanho do produto" 
          onChange={event => setStreetNumber(Number(event.target.value))}
        />

        <input 
          type="text" 
          placeholder="Insira a cor do produto" 
          onChange={event => setStreetNumber(Number(event.target.value))}
        />

        <input 
          type="text" 
          placeholder="Insira a descrição do produto" 
          onChange={event => setStreetNumber(Number(event.target.value))}
        />
        
        <button className="save-product">Salvar produto</button>
      </div>
    </div>
  );
}

export default AddProduct;