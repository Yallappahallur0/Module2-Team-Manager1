import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
    alert('Searching for: ${searchTerm}');
    // In a real application, you would typically:
    // 1. Call an API with the search term
    // 2. Update state with the search results
    // 3. Render the results in your component
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo">FS</div>
          <span className="logo-text">FinSage ERP</span>
        </div>
        
        <div className="nav-item">
          <span className="nav-icon">⊞</span>
          <span>Dashboard</span>
        </div>
        
        <div className="nav-item">
          <span className="nav-icon">👥</span>
          <span>Team Management</span>
        </div>
        
        <div className="nav-item">
          <span className="nav-icon">📝</span>
          <span>Assign Task</span>
        </div>
        
        <div className="nav-item active">
          <span className="nav-icon">👥</span>
          <span>Team Managers</span>
        </div>
        
        <div className="nav-item">
          <span className="nav-icon">🛡️</span>
          <span>Administrative Control</span>
        </div>
        
        <div className="nav-item">
          <span className="nav-icon">📊</span>
          <span>Performance Reports</span>
        </div>
      </div>
      
        
        <div className="content-area">
          <div className="action-bar">
            <button className="action-button active">Team Manager Overview</button>
            <div className="search-container">
              <span 
                className="search-icon" 
                onClick={handleSearch}
                role="button"
                aria-label="Search"
              >
                🔍
              </span>
              <input 
                type="text" 
                placeholder="Search here..." 
                className="search-input" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <button className="add-button">
              <span>+</span> Add New Manager
            </button>
          </div>
          
          <div className="form-container">
            <div className="add-manager-form">
              <h3>Add New Manager</h3>
              
              <div className="form-group">
                <label>Manager Name</label>
                <input type="text" defaultValue="Manager 1" className="form-input" />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue="M1@gmail.com" className="form-input" />
              </div>
              
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" defaultValue="789654321" className="form-input" />
              </div>
              
              <div className="form-group">
                <label>Assigned Teams</label>
                <input type="text" defaultValue="Team 1" className="form-input" />
              </div>
              
              <div className="form-actions">
                <button className="cancel-button">Cancel</button>
                <button className="save-button">Save Manager</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;