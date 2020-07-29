import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

function Erro404() {
    return (
      <PageDefault>
        <Link to="/">
            <img  src="https://blog.jovempan.com.br/paulacarvalho/wp-content/uploads/sites/14/2018/02/pabblo.gif" alt="pabllo Vittar correndo no deserto" />
        </Link>
        <h1>Yukê! Você foi longe demais</h1>
        <h3>Não conseguimos entender onde você quer chegar</h3>
      </PageDefault>
    );
  }
  export default Erro404;