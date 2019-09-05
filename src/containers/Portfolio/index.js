import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from "../../constants/routes";



const Portfolio = () => (
    
    <div className="portfolio-page">
        
        <div className="tictactoe-card">
                <Link to={ROUTES.TICTACTOE}>TicTacToe Game</Link>
            </div>
        
        <div className="calculator-card">
                <Link to={ROUTES.CALCULATOR}>Calculator</Link>
            </div>
        </div>
);
        

export default Portfolio;

