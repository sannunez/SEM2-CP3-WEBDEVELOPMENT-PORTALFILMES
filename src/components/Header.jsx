import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

export default function Header() {

    const [isLogged, setIsLogged] = useState(false)

    const handleLogin = () => {
        setIsLogged(!isLogged)
    }

    return (
        <>
            <header className="w-[100%] h-[70px] justify-center bg-black flex text-white  mx-auto border-b-[1px] border-[#ffffffb4]">
                <div className="flex justify-between items-center w-[90%]">
                    <div>
                        <img className="w-[300px]" src="../PortalLogo.png" alt="PORTAL FILMES" />
                    </div>
                    <div className="flex gap-32 items-center">
                        <nav>
                            <ul className="flex gap-4">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/movies">Filmes</NavLink></li>
                                <li><NavLink to="/genre">Gêneros</NavLink></li>
                                <li><NavLink to="/contato">Contato</NavLink></li>
                                {isLogged && <li><NavLink to="/settings">Configurações</NavLink></li>}
                            </ul>
                        </nav>
                        <Login isLogged={isLogged} handleLogin={handleLogin} />
                    </div>
                </div>
            </header>
        </>
    )
}