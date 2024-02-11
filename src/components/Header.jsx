import { useContext } from 'react';
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button.jsx'
import CartContext from '../store/CartContext.jsx';

export default function Header() {

  const cartCtx =  useContext(CartContext);

  const totalCartItem = cartCtx.items.reduce((totalNumOfItems,item)=>{
    return totalNumOfItems + item.quantity;
  },0)
    return (<header id="main-header">
        <div id="title">
            <img src={logoImg} alt='logo image'/>
            <h1>React Food</h1>
        </div>
        <nav>
            <Button textOnly>Cart ({totalCartItem})</Button>
        </nav>
    </header>);
}