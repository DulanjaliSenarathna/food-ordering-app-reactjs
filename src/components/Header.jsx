import logoImg from '../assets/logo.jpg'

export default function () {
    return <header id="main-header">
        <div id="title">
            <img src={logoImg} alt='logo image'/>
            <h1>React Food</h1>
        </div>
        <nav>
            <button>Cart (0)</button>
        </nav>
    </header>
}