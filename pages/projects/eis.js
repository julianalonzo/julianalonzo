import '../../styles/main.css';

import ScrollAnimation from 'react-animate-on-scroll';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import ProjectCover from '../../components/ProjectCover';
import ProjectTitle from '../../components/ProjectTitle';
import Chips from '../../components/Chips';
import Footer from '../../components/Footer';

export default function EIS() {
  const technologies = [
    'React (with Hooks)',
    'Redux',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'JWT',
    'Material-UI',
    'Amazon S3'
  ];

  const apis = [
    'aws-sdk',
    'final-form',
    'validator',
    'multer',
    'axios',
    'bcryptjs',
    'passport'
  ];

  return (
    <div className="bg-gray-100">
      <Header />
      <Navbar />
      <ProjectCover
        mainColor="indigo"
        coverPhotoPath="/static/eis/eis-bg.svg"
        mainProjectImagePath="/static/eis/itemManagement.gif"
      />
      <ScrollAnimation animateIn="fadeIn" delay={1000} offset={0}>
        <div className="container mx-auto my-12 w-11/12 sm:4/5 md:w-3/4 lg:w-3/5 xl:w-1/2">
          <ProjectTitle
            logoPath="/static/eis/eis-logo.svg"
            title="EIS"
            websiteUrl="https://equipment-inventory-system.herokuapp.com"
            githubUrl="https://github.com/julianalonzo/eis"
          />
          <div className="mb-10">
            <p className="font-sans leading-loose">
              EIS is a web application for tracking and managing equipment
              inventory
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
                Item Management
              </h3>
              <p className="font-sans leading-loose mb-8">
                EIS enables users to define and add items into their system.
                Item name, category, condition, and thumbnails are the default
                fields for an item, however, users may add custom fields of an
                item in the <i>Properties</i> section.
              </p>
              <img
                className="shadow-md rounded-lg mb-8"
                src="/static/eis/itemManagement.gif"
                alt="Item Management Demo"
              />
              <p className="font-sans leading-loose mb-8">
                Properties are custom fields that describe attributes of an
                item. For example, a laptop may have properties such as
                processor, storage capacity, and price. Users can define any
                property they want in order to represent any item.
              </p>
              <p className="font-sans leading-loose">
                EIS allows users to add supporting information of an item
                through <i>notes</i> and <i>attachments</i>. Notes may be any
                important message such as a message informing the user how an
                item was broken or who borrowed the equipment. Attachments are
                relevant files associated to an item. These files may be
                software license, receipts, and images.
              </p>
            </div>
            <div className="mb-12">
              <h3 className="text-lg font-sans font-bold mb-2">
                Folder Organization
              </h3>
              <p className="font-sans leading-loose mb-8">
                EIS organizes items into folders in order to keep related
                records together. Nesting folders is possible in order to
                support different ways to organize items. EIS also enables users
                to move items and folders into another folder in case an item
                was moved or a different folder organization is adopted.
              </p>
              <img
                className="shadow-md rounded-lg"
                src="/static/eis/folderOrganization.gif"
                alt="Folder Organization Demo"
              />
            </div>
            <div className="mb-12">
              <h3 className="text-lg font-sans font-bold mb-2">Templates</h3>
              <p className="font-sans leading-loose mb-8">
                EIS provides users a way to create item templates for items that
                have standard fields (e.g., properties, attachments, and notes).
                These templates may be used to pre-populate fields when creating
                new items into different folders.
              </p>
              <img
                className="shadow-md rounded-lg"
                src="/static/eis/templates.gif"
                alt="Templates Demo"
              />
            </div>
            <div className="mb-12">
              <h3 className="text-lg font-sans font-bold mb-2">Search</h3>
              <p className="font-sans leading-loose mb-8">
                EIS is capable of searching for items by id, name, category,
                condition, properties, and notes.
              </p>
              <img
                className="shadow-md rounded-lg mb-8"
                src="/static/eis/search.gif"
                alt="Search Demo"
              />
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <Footer />
    </div>
  );
}
