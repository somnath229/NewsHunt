import React from 'react'
import { Link } from 'react-router-dom'

// export class NavBar extends Component {
const NavBar = (props) => {
    // render() {
    return (
        <div>
            <nav className= {`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
                <div className="container-fluid">
                    <Link className="navbar-brand ms-3" to="/">NewsHunt</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-4">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/general">General</Link></li> */}
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>

                        </ul>

                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <label className="form-check-label my-3 me-4" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} mode</label>
                        <input className="form-check-input me-2 my-4" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                    </div>
                </div>
            </nav></div>
    )
    // }
}

export default NavBar