import '../styles/main.css';

import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

export default function Index() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Navbar />
      <Introduction />
      <Projects />
    </div>
  );
}
