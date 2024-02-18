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
import AllAgentsListPage from './Pages/AllAgentsListPage'
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
import AnAgentPropertiesListPage from './Pages/AnAgentPropertiesListPage';
import AllPropertiesListPage from './Pages/AllPropertiesListPage';
import HeaderDummy from './component/HeaderDummy';
import FooterDummy from './component/FooterDummy';
const App = () => {
  return (

    <div>
      
      <BrowserRouter>
      <HeaderDummy/>
          <Routes>
                {/* userPages */}
                <Route path='/userlogin'  element={<UserLogin/>}/>
                <Route path="/usersignUp" element={<UserSignUp/>}/>
                <Route path ='/' element={<LandingPage/>}/>
                <Route path="/forsale" element={<ForSale/>} />
                <Route path="/forrent" element={<ForRent/>} />
                <Route path="/aboutus" element={<AboutUs/>} />
                <Route path="/contactus" element={<ContactUs/>} />
                <Route path="/disclaimer" element={<Disclaimer/>} />
                <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
                <Route path="/paymentoptions" element={<PaymentOptions/>} />
                <Route path="/emailverificationpage" element={<EmailVerificationPage/>} />
                <Route path="/allagentslistpage" element={<AllAgentsListPage/>} />
                <Route path="/anagentpropertieslistpage" element={<AnAgentPropertiesListPage/>} />
                <Route path="/userdashboard" element={<UserDashboard/>} /> 
                <Route path="/propertydetailpage" element={<PropertyDetailPage/>} />
                <Route path="/allpropertieslistpage" element={<AllPropertiesListPage/>} />
                

                {/* AgentPages */}
                <Route path="/agentlogin" element={<AgentLogin/>} />
                <Route path="/agentsignup" element={<AgentSignUp/>} />
                <Private path="/agentdashboard" >
                  <Route  element={<AgentDashboard/>} />
                </Private>
                
                <Route path="/agentforrentproertylistpage" element={<AnAgentForRentPropertyListPage/>} />
                <Route path="/agentforsalepropertylistpage" element={<AnAgentForSalePropertiesListPage/>} />
                <Route path="/termsandconditions" element={<TermsAndConditions/>} />
                <Route path="/emailverificationpage" element={<EmailVerificationPage/>} />
                <Route path="/propertydetailpage" element={<PropertyDetailPage/>} />  
          </Routes>  
          <FooterDummy/>  
      </BrowserRouter>
    </div>
  )
}

export default App
