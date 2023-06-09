import React from "react";
import './Button.css';
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline', 'btn--primary-dark', 'btn--outline-dark'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ to, children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to={to} className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSizes}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}