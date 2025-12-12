import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Kanban Board</h1>
          <p className="subtitle">Web Application Design - M1.STIC</p>
          <p className="instructor">Instructor: Prof. Adil Chekati</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary" onClick={() => window.location.reload()}>
            Refresh
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => {
              if (window.confirm('Clear all tasks?')) {
                localStorage.clear();
                window.location.reload();
              }
            }}
          >
            Clear All
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
