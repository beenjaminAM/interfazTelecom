import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
            <h1>{ title }</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
