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
        coverPhotoPath="/static/kaagapai/kaagapai-bg.svg"
        mainProjectImagePath="/static/kaagapai/documentAnalysis.gif"
      />
      <div className="container mx-auto my-12 w-11/12 sm:4/5 md:w-3/4 lg:w-3/5 xl:w-1/2">
        <ProjectTitle
          logoPath="/static/kaagapai/kaagapai-logo.svg"
          title="kaagapAI"
          websiteUrl="https://kaagapai.herokuapp.com"
          githubUrl="https://github.com/prometheus-tech/kaagapAI"
        />
        <div className="mb-10 inline-flex items-start">
          <p className="font-sans leading-loose">
            kaagapAI is an automated text analysis tool that aims to assist
            mental health practitioners in summarizing, analyzing, and managing
            therapy session documents.
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-sans font-bold mb-4">
            Technologies and Frameworks
          </h2>
          <Chips chips={technologies} />
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-sans font-bold mb-4">
            APIs and Libraries
          </h2>
          <Chips chips={apis} />
        </div>
        <div>
          <h2 className="text-2xl font-sans font-bold mb-4">Features</h2>
          <div className="mb-12">
            <h3 className="text-lg font-sans font-bold mb-2">
              Document Analysis
            </h3>
            <p className="font-sans leading-loose mb-8">
              kaagapAI uses IBM Watson Natural Language Understanding in order
              to perform text analysis on session documents (e.g., transcripts
              and notes). Through text analysis, kaagapAI extracts relevant
              insights which include keywords, themes or categories, entities,
              sentiments, and emotional tone. Text analysis can be conducted on
              a specific session or multiple sessions. Analysis on multiple
              sessions include data visualizations on sentiment and emotion
              trends.
            </p>
            <img
              className="shadow-md rounded-lg mb-8"
              src="/static/kaagapai/documentAnalysis.gif"
              alt="Document Analysis Demo"
            />
            <p className="font-sans leading-loose mb-8">
              IBM Watson Knowledge Studio enables the training of custom models
              in order to extract domain-specific entities. The original
              intention was to train a custom model to extract more relevant
              entities in the mental health field (e.g., mental health disorders
              or more diversed emotional tones), however, the custom model still
              lacks training due to time constraints and resources constraints
              (i.e., lack of annotators and training dataset). kaagapAI is
              currently using the default model used by NLU.
            </p>
            <h4 className="font-sans text-gray-700 mb-1">
              Word Cloud (Keywords)
            </h4>
            <p className="font-sans leading-loose mb-4">
              The word cloud consists of the keywords that occurred multiple
              times in the document. Clicking on a specific word in the word
              cloud displays the word count and relevance and finds all search
              apperances of the word across analyzed documents.
            </p>
            <img
              className="shadow-md rounded-lg mb-8"
              src="/static/kaagapai/keywords.png"
              alt="Keywords"
            />
            <h4 className="font-sans text-gray-700 mb-1">Categories</h4>
            <p className="font-sans leading-loose mb-4">
              <i>Categories</i> shows the hierarchy of themes that were detected
              in the analyzed documents. These themes were derived from the
              words that were found in the documents.
            </p>
            <img
              className="shadow-md rounded-lg mb-8"
              src="/static/kaagapai/categories.png"
              alt="Categories"
            />
            <h4 className="font-sans text-gray-700 mb-1">Entities</h4>
            <p className="font-sans leading-loose mb-4">
              <i>Entities</i> classifies words that belong to pre-defined
              categories. Clicking on a specific entity shows the entity type,
              relevance, and appearances across analyzed documents.
            </p>
            <img
              className="shadow-md rounded-lg mb-8"
              src="/static/kaagapai/entities.png"
              alt="Entities"
            />
            <h4 className="font-sans text-gray-700 mb-1">Emotions</h4>
            <p className="font-sans leading-loose mb-4">
              <i>Emotions</i> rates the detected emotions of analyzed documents
              according to six basic emotions: joy, anger, disgust, sadness, and
              fear. In the analysis of multiple sessions, a line graph is used
              to show the trend of emotions across selected sessions.
            </p>
            <img
              className="shadow-md rounded-lg mb-8"
              src="/static/kaagapai/emotions.png"
              alt="Emotions"
            />
            <h4 className="font-sans text-gray-700 mb-1">Sentiment</h4>
            <p className="font-sans leading-loose mb-4">
              <i>Sentiment</i> scores the overall feel of the session which
              could be positive, negative, or neutral. Analysis of multiple
              sessions also shows the trend of sentiments across selected
              sessions.
            </p>
            <img
              className="shadow-md rounded-lg mb-8"
              src="/static/kaagapai/sentiment.png"
              alt="Sentiment"
            />
          </div>
          <div className="mb-12">
            <h3 className="text-lg font-sans font-bold mt-4 mb-4">
              Document Preprocessing
            </h3>
            <img
              className="shadow-md rounded-lg mb-8"
              src="/static/kaagapai/systemArchitecture.png"
              alt="System Architecture"
            />
            <p className="font-sans leading-loose mb-8">
              kaagapAI preprocesses uploaded documents in order to extract text
              from different file formats (i.e., txt, pdf, docx, png, jpg, m4a).
              Cloud Vision API is used to extract text from images, thus making
              it possible to upload handwritten notes, while Cloud
              Speech-to-Text API is used to transcribe audio recordings. After
              extracting text from uploaded files, the text is translated to
              English using the Cloud Translation API.
            </p>
            <img
              className="shadow-md rounded-lg mb-8"
              src="/static/kaagapai/documentPreprocessing.gif"
              alt="Document Preprocessing"
            />
          </div>
          <div className="mb-12">
            <h3 className="text-lg font-sans font-bold mb-2">
              Client, Session, and Document Management
            </h3>
            <p className="font-sans leading-loose mb-8">
              kaagapAI organizes its data based on the common data organization
              of mental health practitioners. A client can have multiple
              sessions, and a session can hold multiple documents. kaagapAI
              provides CRUD operations in order to manage these entities (i.e.,
              clients, sessions, and documents).
            </p>
            <img
              className="shadow-md rounded-lg mb-8"
              src="/static/kaagapai/entityManagement.gif"
              alt="Entity Management"
            />
            <p className="font-sans leading-loose">
              kaagapAI also provides ways to manage the analysis of documents.
              Extracted text from documents can be edited in order to correct
              anomalies such as lost in translation, mispelled words, and
              incorrect transcription. Files can be uploaded either as documents
              or attachments. Documents are files that are included in the
              analysis by default, while attachments are supporting files that
              are not excluded in the analysis. Documents can be set to ignored
              to exclude them from the analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
