import React, { useEffect, useState } from 'react';
import PatientList from '../components/PatientList';
import PatientData from '../components/PatientData';
import ProfileCard from '../components/ProfileCard';
import Preloader from '../components/preloader/Preloader';

const Patients = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  if (loading) return <Preloader className="preloader" />

  return (
    <div className="container-fluid mt-4 general">
      <div className="row p-0 m-0">
        <div className="col-md-3">
          <PatientList />
        </div>
        <div className="col-md-6">
          <PatientData />
        </div>
        <div className='col-md-3'>
            <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default Patients;
 