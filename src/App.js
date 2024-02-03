import React from 'react';
import Header from './component/Header';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Private from './component/Private';
import FeaturedProperties from './component/FeaturedProperties';

//all pages import 
import LandingPage from './Pages/LandingPage'
import UserSignUp from './Pages/UserSignUp';
import UserLogin from './Pages/UserLogin';
import AboutUs from './Pages/AboutUs'
import AgentDashboard from './Pages/AgentDashboard'
import AgentLogin from './Pages/AgentLogin'
import AgentSignUp from './Pages/AgentSignUp'
import AgentListPage from './Pages/AgentsListPage'
import ContactUs from './Pages/ContactUs'
import Disclaimer from './Pages/Disclaimer'
import EmailVerificationPage from './Pages/EmailVerificationPage'
import ForRent from './Pages/ForRent'
import ForSale from './Pages/ForSale'
import PaymentOptions from './Pages/PaymentOptions'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import PropertyDetailPage from './Pages/PropertyDetailPage'
import TermsAndConditions from './Pages/TermsAndConditions'
import UserDashboard from './Pages/UserDashboard'
import AnAgentForRentPropertyListPage from './Pages/AnAgentForRentPropertyListPage';
import AnAgentForSalePropertiesListPage from './Pages/AnAgentForSalePropertiesListPage';

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route path="/userlogin" element={<UserLogin/>}/> */}
    //     <Route path='/usersignup' element={<UserSignUp/>}/>
    //     <Route path="/" element ={<FeaturedProperties/>}/>
    //     <Route element={<Private/>}>
    //       <Route path="/landingpage" element={<LandingPage/>}/>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    <div>
      
      {/* userPages */}
      <UserLogin/>
      <UserSignUp/>
      <LandingPage/>
      <ForSale/>
      <ForRent/>
      <AboutUs/>
      <ContactUs/>
      <Disclaimer/>
      <TermsAndConditions/>
      <PrivacyPolicy/>
      <PaymentOptions/>
      <EmailVerificationPage/>
      <AgentListPage/>
      <AnAgentForRentPropertyListPage/>
      <AnAgentForSalePropertiesListPage/> 
      <UserDashboard/> 
      <PropertyDetailPage/>
      

      {/* AgentPages */}
      <AgentLogin/>
      <AgentSignUp/>
      <AgentDashboard/>
      <AnAgentForRentPropertyListPage/>
      <AnAgentForSalePropertiesListPage/>
      <TermsAndConditions/>
      <EmailVerificationPage/>
      <PropertyDetailPage/>
    </div>
  )
}

export default App
