import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Loading } from './components/Loading';
import {
  loadHome,
  loadCatalog,
  loadAbout,
  loadWeekAtAGlance,
  loadRegistration,
  loadTravelAndHotels,
  loadSessionDetail,
  loadSponsors,
  loadWhyAttendDetail,
  loadSocials
} from './lazyLoad';

const Home = lazy(loadHome);
const Catalog = lazy(loadCatalog);
const About = lazy(loadAbout);
const WeekAtAGlance = lazy(loadWeekAtAGlance);
const Registration = lazy(loadRegistration);
const TravelAndHotels = lazy(loadTravelAndHotels);
const SessionDetail = lazy(loadSessionDetail);
const Sponsors = lazy(loadSponsors);
const WhyAttendDetail = lazy(loadWhyAttendDetail);
const Socials = lazy(loadSocials);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-attend/:slug" element={<WhyAttendDetail />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:sessionId" element={<SessionDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<WeekAtAGlance />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/travel" element={<TravelAndHotels />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/socials" element={<Socials />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
