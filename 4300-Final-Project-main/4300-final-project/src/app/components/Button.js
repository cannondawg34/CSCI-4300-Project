// Button.js
import React from 'react';
import Link from 'next/link';
import './Button.css'; // Ensure the path is correct

const Button = ({ href, children }) => {
    return (
        <Link href={href} passHref legacyBehavior>
            <a className="button">{children}</a>
        </Link>
    );
};

export default Button;
