import logoImg from '../assets/logo.jpg'
import Button from './UI/Button.jsx'

export default function Header() {
    return (<header id="main-header">
        <div id="title">
            <img src={logoImg} alt='logo image'/>
            <h1>React Food</h1>
        </div>
        <nav>
            <Button textOnly>Cart (0)</Button>
        </nav>
    </header>);
}