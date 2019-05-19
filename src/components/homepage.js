import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";



export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome Codaisseur Teacher!</h1>
                <div className="buttons">
                    <button><Link to="/hangman">"Start Playing!"</Link></button>
                </div>
            </div>
        )

    }
}
