import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

/* ---------- LAZY PAGES ---------- */

const Home = lazy(() => import("./Pages/Home"));
const Testimonials = lazy(() => import("./Pages/Testimonials"));
const Careers = lazy(() => import("./Pages/Careers"));
const Services = lazy(() => import("./Pages/Services"));
const Solutions = lazy(() => import("./Pages/Solutions"));
const Insights = lazy(() => import("./Pages/Insights"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const Contact = lazy(() => import("./Pages/ContactUs"));
const Privacy = lazy(() => import("./Pages/PrivacyPolicy"));
const Terms = lazy(() => import("./Pages/TermsAndConditions"));
const FAQ = lazy(() => import("./Pages/FAQ"));
const Team = lazy(() => import("./Pages/Team"));
const Pricing = lazy(() => import("./Pages/Pricing"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const CaseStudy = lazy(() => import("./Pages/CaseStudy"));
const CaseStudyDetail = lazy(() => import("./Pages/CaseStudyDetail"));
const Security = lazy(() => import("./Pages/Security"));

function App() {
  return (
    <div className="App">
      <Header />

      {/* Suspense wraps routes */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/service" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/case-studies" element={<CaseStudy />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/security" element={<Security />} />

          {/* Catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
