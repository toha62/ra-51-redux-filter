import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceFilter from './components/ServiceFilter';

export default function App() {
  return (    
    <div className="card col-6 m-2 p-2 bg-light">
      <ServiceAdd />
      <ServiceFilter />
      <ServiceList />
    </div>    
  );
}
