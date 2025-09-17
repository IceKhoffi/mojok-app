import React, { useState } from 'react';
import { Login } from './components/Login';
import { Onboarding } from './components/Onboarding';
import { JobSeekerDashboard } from './components/JobSeekerDashboard';
import { HRDashboard } from './components/HRDashboard';
import { JobBoard } from './components/JobBoard';
import { CareerPath } from './components/CareerPath';
import { Messages } from './components/Messages';

import type { Page, UserType } from "./types/navigation";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [userType, setUserType] = useState<UserType>(null);
  const [user, setUser] = useState<any>(null);

  const handleLogin = (type: UserType) => {
    setUserType(type);
    if (type === 'jobseeker') {
      setCurrentPage('onboarding');
    } else {
      setCurrentPage('dashboard');
    }
  };

  const handleOnboardingComplete = (userData: any) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  if (currentPage === 'login') {
    return <Login onLogin={handleLogin} />;
  }

  if (currentPage === 'onboarding' && userType === 'jobseeker') {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {userType === 'jobseeker' ? (
        <JobSeekerDashboard 
          user={user}
          currentPage={currentPage}
          onNavigate={navigateTo}
        />
      ) : (
        <HRDashboard 
          currentPage={currentPage}
          onNavigate={navigateTo}
        />
      )}
      
      {currentPage === 'jobs' && <JobBoard onNavigate={navigateTo} />}
      {currentPage === 'career' && <CareerPath onNavigate={navigateTo} />}
      {currentPage === 'messages' && <Messages onNavigate={navigateTo} />}
    </div>
  );
}