import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AgentPrivate from './component/AgentPrivate';
import UserPrivate from './component/UserPrivate';
import ScrollToTop from './component/ScrollToTop';

// Importing all pages
import LandingPage from './Pages/LandingPage';
import UserSignUp from './Pages/UserSignUp';
import UserLogin from './Pages/UserLogin';
import AboutUs from './Pages/AboutUs';
import AgentDashboard from './Pages/AgentDashboard';
import AgentLogin from './Pages/AgentLogin';
import AgentSignUp from './Pages/AgentSignUp';
import AllAgentsListPage from './Pages/AllAgentsListPage';
import ContactUs from './Pages/ContactUs';
import Disclaimer from './Pages/Disclaimer';
import EmailVerificationPage from './Pages/EmailVerificationPage';
import ForRent from './Pages/ForRent';
import ForSale from './Pages/ForSale';
import PaymentOptions from './Pages/PaymentOptions';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import PropertyDetailPage from './Pages/PropertyDetailPage';
import TermsAndConditions from './Pages/TermsAndConditions';
import UserDashboard from './Pages/UserDashboard';
import AnAgentPropertiesListPage from './Pages/AnAgentPropertiesListPage';
import AllPropertiesListPage from './Pages/AllPropertiesListPage';
import EmailRedirectPage from './Pages/EmailRedirectPage';
import AdminDashboard from './Pages/AdminDashBoard';


const App = () => {


  return (
    <div className='App'>
      <BrowserRouter>
        {/* Component to scroll to top on route change */}
        <ScrollToTop />
        <Routes>
          {/* Routes for User Pages */}
          <Route path='/userlogin' element={<UserLogin />} />
          <Route path="/usersignUp" element={<UserSignUp />} />
          <Route path='/' element={<LandingPage />} />
          <Route path="/forsale" element={<ForSale />} />
          <Route path="/forrent" element={<ForRent />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/paymentoptions" element={<PaymentOptions />} />
          <Route path="/emailverificationpage" element={<EmailVerificationPage />} />
          <Route path="/allagentslistpage" element={<AllAgentsListPage />} />
          <Route path="/anagentpropertieslistpage" element={<AnAgentPropertiesListPage />} />
          <Route path="/propertydetailpage" element={<PropertyDetailPage />} />
          <Route path="/allpropertieslistpage" element={<AllPropertiesListPage />} />
          <Route path="/emailredirectpage" element={<EmailRedirectPage/>}/>

          {/* Routes for Agent Pages */}
          <Route path="/agentlogin" element={<AgentLogin />} />
          <Route path="/agentsignup" element={<AgentSignUp />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/emailverificationpage" element={<EmailVerificationPage />} />
          <Route path="/propertydetailpage" element={<PropertyDetailPage />} />

          {/* Nested routes for authenticated Agent */}
          <Route element={<AgentPrivate />}>
            <Route path="/agentdashboard" element={<AgentDashboard />} />
          </Route>

          {/* Nested routes for authenticated User */}
          <Route element={<UserPrivate />}>
            <Route path="/userdashboard" element={<UserDashboard />} />
          </Route>

          <Route path="/admin" element={<AdminDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
