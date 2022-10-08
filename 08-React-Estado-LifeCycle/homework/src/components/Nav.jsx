import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {

  return (
    <nav className={'navbar navbar-dark bg-dark justify-content-between'}>
      <div className={'container-fluid'}>
        <img id="logoHenry" src={Logo} alt='logo' className={'d-inline-block align-top'}/>
        <span className={'navbar-brand'}>Henry Weather App</span>
        <SearchBar onSearch={onSearch}/>
      </div>
    </nav>
  )
}
// function Nav({onSearch}) {
//   return (
//     <div className='contenedor'>
//       <Navbar bg="dark" variant="dark">
//         <Container className='miNavBar'>
//           <Navbar.Brand href="#home">
//             <img id="logoHenry"
//               src={Logo}
//               className="d-inline-block align-top"
//               alt='logo'
//             />{' '}
//             Henry App
//           </Navbar.Brand>

//           <SearchBar onSearch={onSearch}/>

//         </Container>
//       </Navbar>
//     </div>
//   );
// // };

// class Nav extends React.Component{
//   //this.props.onSearch
//   constructor(props) {
//     super(prop);
//     this.state = {
//       name: this.props.name;
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick = () => (this.setState(state:{name:'diego'}))

//   render(){
//     return(<div onClick={this.handleClick}>Nav</div>);
//   }
// }

export default Nav;
