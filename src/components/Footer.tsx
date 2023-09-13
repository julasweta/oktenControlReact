import React from 'react';



const Footer: React.FC = () =>
{
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            &copy;  {currentYear} OKTEN. <p>All Rights Reserved.</p>
        </div>
    );
};

export { Footer };