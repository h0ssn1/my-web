import { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./style.css";

const NavBar = () => {
    const[ open, setOpen] = useState(false);
    const[ screenWidth, setScreenWidth] = useState(0);
    const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if (width > 600) {
          setOpen(true);
        }
    };

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth);
    }, []);
    
    
    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <Link to="/">
                        <img 
                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrIVbYoqDcEPq-EdFQY4wmqkHCyw373odVg&usqp=CAU"
                           alt="brand"
                        />
                    </Link> 
                </div>
                <div className="list-wrapper">
                   <img
                      src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
                      alt="Menu bars"
                      style={{opacity: !open ? 1 : 0}} 
                      onClick={() =>{
                          setOpen(!open);
                      }}
                    />
                    <img
                      src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
                      alt="Menu cross"
                      style={{opacity: open ? 1 : 0}}
                      onClick={() => {
                          setOpen(!open);
                      }}
                    />
                    <ul style={{left:open ? "0" : "-100vw"}}>
                        <li>
                            <Link
                                to="/"
                                
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/skills"
                                
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/works"
                                
                            >
                                Works
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                

                </div>       
            </div>
            
        </nav>
    )
}

export default NavBar
