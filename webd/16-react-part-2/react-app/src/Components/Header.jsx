import { Link } from "react-router-dom"

function Header() {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", fontSize: "24px", height: "64px", position: "fixed", top: "0", left: "0", right: "0" }}>
            <Link to="/neet">Skillflow</Link>
            <Link to="/neet/online-coaching-11">Class 11</Link>
            <Link to="/neet/online-coaching-12">Class 12</Link>
        </div>
    )
}

export default Header
