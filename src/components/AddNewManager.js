import React, { useState } from 'react';

const AddNewManager = () => {  // Changed to arrow function component
  const [formData, setFormData] = useState({
    managerName: 'Manager 1',
    email: 'M1@gmail.com',
    phoneNumber: '789654321',
    assignedTeams: 'Team 1'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Manager saved:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="add-manager-container">
      <div className="add-manager-form">
        <h2>Add New Manager</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="managerName">Manager Name</label>
            <input
              type="text"
              id="managerName"
              name="managerName"
              value={formData.managerName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="assignedTeams">Assigned Teams</label>
            <input
              type="text"
              id="assignedTeams"
              name="assignedTeams"
              value={formData.assignedTeams}
              onChange={handleChange}
            />
          </div>
          <div className="form-actions">
            <button type="button" className="cancel-button">Cancel</button>
            <button type="submit" className="save-button">Save Manager</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewManager;