import {Component} from 'react';

class Nav extends Component{
    render(){
        return(
<nav class="nav">
  <ul>
    <li><a href="#" class="nav-link">Inicio</a></li>
    <li><a href="#" class="nav-link">Usuario</a></li>
    <li><a href="#" class="nav-link">Eventos</a></li>
    <li><a href="#" class="nav-link">Apuestas</a></li>
  </ul>
</nav>
        );

    }
}

export default Nav;