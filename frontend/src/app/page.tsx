'use client';
import { useEffect, useState } from 'react';
import { getRequests } from '../lib/api/requestsApi';
import './dashboard.css';

export default function Dashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getRequests().then(setRequests);
  }, []);

  return (
    <div className="dashboard-bg">
      <h1 className="dashboard-title">Guest Requests</h1>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Phone</th>
            <th>Request</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req: any) => (
            <tr key={req.id} tabIndex={0} title="Click for more details">
              <td data-label="Phone">{req.guestPhone}</td>
              <td data-label="Request">{req.requestText}</td>
              <td data-label="Timestamp">{new Date(req.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}