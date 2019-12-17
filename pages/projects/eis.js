import '../../styles/main.css';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import ProjectCover from '../../components/ProjectCover';
import ProjectTitle from '../../components/ProjectTitle';

export default function EIS() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Navbar />
      <ProjectCover
        mainColor="indigo"
        coverPhotoPath="/static/eis-bg.svg"
        mainProjectImagePath="/static/eis-demo.gif"
      />
      <div className="container mx-auto mt-12 mb-64 w-11/12 sm:4/5 md:w-3/4 lg:w-3/5 xl:w-1/2">
        <ProjectTitle
          logoPath="/static/eis-logo.svg"
          title="EIS"
          websiteUrl="https://equipment-inventory-system.herokuapp.com"
          githubUrl="https://github.com/julianalonzo/eis"
        />
      </div>
    </div>
  );
}