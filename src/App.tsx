import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';

import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import AboutPage from './pages/AboutPage'

import BookkeepingPage from './pages/BookkeepingPage';
import VATPage from './pages/VATPage';
import CorporationTaxPage from './pages/CorporationTaxPage';
import PayrollPage from './pages/PayrollPage';
import SelfAssessmentPage from './pages/SelfAssessmentPage';
import CompanyFormationPage from './pages/CompanyFormationPage';
import UKAddressPage from './pages/UKAddressPage';
import VirtualCFOPage from './pages/VirtualCFOPage';
import BankAccountPage from './pages/BankAccountPage';
import Terms from './components/Terms';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage/></Layout>} />

        <Route path="/bookkeeping" element={<Layout><BookkeepingPage /></Layout>} />
        <Route path="/vat" element={<Layout><VATPage /></Layout>} />
        <Route path="/corporation-tax" element={<Layout><CorporationTaxPage /></Layout>} />
        <Route path="/payroll" element={<Layout><PayrollPage /></Layout>} />
        <Route path="/self-assessment" element={<Layout><SelfAssessmentPage /></Layout>} />
        <Route path="/company-formation" element={<Layout><CompanyFormationPage /></Layout>} />
        <Route path="/uk-address" element={<Layout><UKAddressPage /></Layout>} />
        <Route path="/virtual-cfo" element={<Layout><VirtualCFOPage /></Layout>} />
        <Route path="/bank-account" element={<Layout><BankAccountPage /></Layout>} />
        <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicyPage /></Layout>} />
        <Route path="/terms" element={<Layout><Terms /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
