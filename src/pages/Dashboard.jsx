import React from "react";

const Dashboard = () => {
  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div className="row">
        <div className="col-4-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text">12345</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Revenue</h5>
              <p className="card-text">$10,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Orders</h5>
              <p className="card-text">567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
