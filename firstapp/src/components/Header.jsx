import "./Header.css";
export default function Header(op){
    return(
        <div>
            <p>{op.name}</p>
            <nav className="navbar">
                <h2 className="logo">My App</h2>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>   
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}