import '../../styles/main.css';

import Chips from '../../components/Chips';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import ProjectCover from '../../components/ProjectCover';
import ProjectTitle from '../../components/ProjectTitle';

export default function KaagapAI() {
  const technologies = [
    'React',
    'Material-UI',
    'Node.js',
    'GraphQL',
    'Apollo Client',
    'Apollo Server',
    'MySQL',
    'Sequelize',
    'JWT'
  ];

  const apis = [
    'Watson NLU',
    'Watson Knowledge Studio',
    'Cloud Storage',
    'Cloud Translation API',
    'Cloud Vision API',
    'Cloud Speech-to-Text API',
    'FFmpeg',
    'textract',
    'antiword',
    'pdftotext'
  ];

  return (
    <div className="bg-gray-100">
      <Header />
      <Navbar />
      <ProjectCover
        mainColor="yellow"
        coverPhotoPath="/static/kaagapai-bg.svg"
        mainProjectImagePath="/static/kaagapai-demo.gif"
      />
      <div className="container mx-auto mt-12 mb-64 w-11/12 sm:4/5 md:w-3/4 lg:w-3/5 xl:w-1/2">
        <ProjectTitle
          logoPath="/static/kaagapai-logo.svg"
          title="kaagapAI"
          websiteUrl="https://kaagapai.herokuapp.com"
          githubUrl="https://github.com/prometheus-tech/kaagapAI"
        />
        <div className="mb-4 inline-flex items-start">
          <p className="font-sans leading-relaxed mb-6">
            kaagapAI is an automated text analysis tool that aims to assist
            mental health practitioners in summarizing, analyzing, and managing
            therapy session documents.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-sans font-medium mb-4">
            Technologies and Frameworks
          </h2>
          <Chips chips={technologies} />
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-sans font-medium mb-4">
            APIs and Libraries
          </h2>
          <Chips chips={apis} />
        </div>
      </div>
    </div>
  );
}
