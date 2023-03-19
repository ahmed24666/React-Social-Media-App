import './regester.scss'

import {Link} from "react-router-dom";

export function Regester() {
    return (
        <div className="regester">
            <div className="card">
                <div className="right">
                    <h1>Regester</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Name" />
                        <input type="password" placeholder="Password" />
                        <Link to="/">

                        <button >Regester</button>
                        </Link>
                    </form>
                </div>
                <div className="left">
                    <h1>Lama Social.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                        alias totam numquam ipsa exercitationem dignissimos, error nam,
                        consequatur.
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
            </div>   
        </div>
    )
}
