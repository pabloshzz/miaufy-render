import React from "react";
import {Box} from "lucide-react";
import { Cat } from 'lucide-react';
import Button from "./ui/Button";
import {useOutletContext, useRoutes} from "react-router";

const Navbar = () =>{
    const { isSignedIn, userName, signIn, signOut } = useOutletContext<AuthContext>()
    const handleAuthClick = async () => {
        if (isSignedIn) {
            try {
                await signOut();
            } catch(e) {
                console.error(`Falha ao encerrar sessão com o Puter: ${e}`)
            }

            return;
        }

        try {
            await signIn();
        } catch (e) {
            console.error(`Falha ao iniciar sessão com o Puter: ${e}`)
        }
    };
    return (
        <header className="navbar">
           <nav className="inner">
               <div className="left">
                   <div className="brand">
                     <Cat className="logo" />
                       <span className="name">Miaufy</span>
                   </div>
                   <ul className="links">
                       <a href="#">Produto</a>
                       <a href="#">Preço</a>
                       <a href="#">Comunidade</a>
                       <a href="#">Enterprise</a>
                   </ul>
               </div>
               <div className="actions">
                   {isSignedIn ? (
                       <>
                           <span className="greeting">{userName ? `Hi, ${userName}` : 'Signed in'}</span>
                           <Button size="sm" onClick={handleAuthClick} className="btn">
                               Log Out
                           </Button>
                       </>

                   ) : (
                       <>
                       <Button
                           onClick={handleAuthClick} size="sm" variant="ghost">
                           Log In
                       </Button>
                           <a href="#upload" className="cta">Inicie Aqui</a>
                        </>
                   )}
               </div>
           </nav>
        </header>

    )
}

export default Navbar;
