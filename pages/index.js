import '../styles/main.css';

import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <div className="bg-gray-100">
      <Header title="Julian Alonzo - Web Developer" />
      <Navbar />
      <Introduction />
      <Projects />
      <Footer />
    </div>
  );
}
