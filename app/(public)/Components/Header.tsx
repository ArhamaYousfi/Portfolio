import React from "react"; 


export default function Header() {
    return(
        <div className="header">
            <nav>
                <a href="#" className="logo">Arhama <span>Yousfi</span></a>

                <ul>
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact Me</a></li>
                </ul>
            </nav>
        </div>
    )
};