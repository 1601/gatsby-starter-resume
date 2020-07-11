import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import Card from 'react-bootstrap/Card';

import melawares from '../assets/images/melawares.png';
import koppel from '../assets/images/koppel.png';
import ltph from '../assets/images/ltph.png';
import pearlpay from '../assets/images/pearlpay.png';
import portfolio from '../assets/images/portfolio.png';
import scud from '../assets/images/scud.png';
import videoscribe from '../assets/images/videoscribe.png';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName} 
            <span className="text-primary">{" " + config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          I’m an engineer with 5 years of experience, on part time and on full time jobs. I have worked on web development from Wordpress, PHP to JavaScript, React. A full-stack developer that is focused on Javascript technologies. Decentralization and cash-less adherent. 
Colleagues know me as a reliable engineer who can always be counted to keep the job done. Good code is important for me, and I always look for opportunities to improve. I can (and often do) work well alone, but I’m at my best collaborating with others. 

          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Director of Product Development</h3>
              <div className="subheading mb-3">Unosoft Labs</div>
              <p>
              He is the show-runner in the team. He has worked with Nap - his mentor with twenty years of experience in the IT industry since he graduated at University of Santo Tomas, Philippines. Together, they find new talent and mentor them by example. He inspires the team by emboldening them of their potential with his natural appeal and command.

              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">November 2018–Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Marketing Associate</h3>
              <div className="subheading mb-3">Pearl Pay Inc.</div>
              <p>
              Responsible for assisting the planning and execution of marketing activities. Implemented product website, marketing campaign to schools and clientele.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2018 - November 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">Unosoft Labs</div>
              <p>
              Together with a  team, built a platform is devised for medical professionals with Javascript frameworks, namely jQuery, Node, MongoDB and Ionic with Angular.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2018 - June 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">Adroit Apps Ltd</div>
              <p>
              Using AEM, Adobe Experience Manager, as a platform and creating a theme for a website, Front-end work. Styling and scripting, documentation, project management, project presentation and platform tutorial.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2017- December 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">Mr. Geek Mobile Solutions</div>
              <p>
              Responsible for the complete life cycle of a software product, from research and design to implementation, training and support. Created project proposals on Keynote. Provide support on network and office troubleshooting. Pitched ideas to team and clients.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2016- 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">SOLUS Interactive Inc.</div>
              <p>
              Part-time and Intern, creating websites themes powered by WordPress. Created a raffle system in PHP. 
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2015- July 2015</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Santo Tomas</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science</div>
              <p>GPA: 1.90</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2012 - June 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Sta. Teresa College</h3>
              <div className="subheading mb-3">Pre-school - Middle School - High School</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2000 - June 2012</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a software engineer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the colder months here in Philippines, I enjoy mountain hiking,
            island hopping, and travelling.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sports and fantasy genre
            anime and sitcom television series, I am an aspiring streamer, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the JavaScript development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - <a href="https://twitter.com/DEVCONPH/status/975274778692083712"> Startup Weekend MNL 2018 - DevConPH</a>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              IP Passer, PhilNITS 
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Academic Associate, IBM DB2 
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Proxor 2 - Java Certification, Proxor
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - HTCXWatson BrainSpark - Web Hackathon
              2015
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Santo Tomas - The CSS Quiz Bee
              2013
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - University of Santo Tomas - The CSS Java Cup
              2013
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Santo Tomas - C++ Cup
              2013
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="portfolio"
      >
        <div className="w-100">
          <h2 className="mb-5">Projects &amp; portfolio</h2>
          <div>
            <Card className="bg-dark text-white">
              <Card.Img src={melawares} alt="Melawares tableware landing page" />
              <Card.ImgOverlay style={{position: 'relative'}}>
                <Card.Title><a href="http://melawares.com">Melawares</a></Card.Title>
                <Card.Text>
                  Worked on theming the WordPress site with vanilla CSS, HTML and jQuery. With my colleagues at Solus Interactive Inc.
                </Card.Text>
                <Card.Text>
                <ul className="list-inline dev-icons">
                  <li className="list-inline-item">
                    <i className="fab fa-html5"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-css3-alt"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-js"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-wordpress"></i>
                  </li>
                  
                </ul>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <br />
            <Card className="bg-dark text-white">
              <Card.Img src={koppel} alt="Koppel 111 Days of Summer landing page" />
              <Card.ImgOverlay style={{position: 'relative'}}>
                <Card.Title><a href="http://www.koppel.ph/111daysofsummer/">Koppel 111 Days of Summer Raffle System</a> </Card.Title>
                <Card.Text>
                Worked on backend that handles registration and raffle draw using PHP, MySQL db, vanilla CSS, HTML and jQuery. With my colleagues at Solus Interactive Inc.
                </Card.Text>
                <Card.Text>
                  <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                      <i className="fab fa-html5"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-css3-alt"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-js"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-php"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-database"></i>
                    </li>
                  </ul>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <br />
            <Card className="bg-dark text-white">
              <Card.Img src={scud} alt="Platform for medical professionals" />
              <Card.ImgOverlay style={{position: 'relative'}}>
                <Card.Title>Project SCUD</Card.Title>
                <Card.Text>
                  <p>Together with Unosoft Labs, developed this complex platform and it's UX Design from the ground-up for a client in the UK.</p>
                
<p>It enables practices to publish jobs they require fulfilling. Medics are then instantly notified by email and pop-up notification on their phones of practices’ jobs that match their qualifications and criteria they'd wish to be matched against. It also has compliance processing, invoicing capabilities for medics to bill practices, finance and tax reporting, etc.

It provides users with mobile-responsive browser apps - also compatible with legacy Internet Explorer - and a mobile app for Android and IOS. It also has a browser app for the stakeholders’ HQ team to manage jobs, medics’ and practices’ accounts, compliance requirements, billing, etc.</p>

<p>It is built with Javascript frameworks, namely jQuery, Node, MongoDB and Ionic with Angular.</p>
                </Card.Text>
                <Card.Text>
                  <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                      <i className="fab fa-html5"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-css3-alt"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-js"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-node-js"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-angular"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-database"></i>
                    </li>
                  </ul>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <br />
            <Card className="bg-dark text-white">
              <Card.Img src={pearlpay} alt="PearlPay landing page" />
              <Card.ImgOverlay style={{position: 'relative'}}>
                <Card.Title><a href="http://pearlpay.com">Pearl Pay Website</a> </Card.Title>
                <Card.Text>
                Designed and develop Pearl Pay website on the company's early stages in cooperation and feedback with Marketing team, built on WordPress 
                </Card.Text>
                <Card.Text>
                  <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                      <i className="fab fa-html5"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-css3-alt"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-js"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-wordpress"></i>
                    </li>
                  </ul>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <br />
            <Card className="bg-dark text-white">
              <Card.Img src={videoscribe} alt="Videoscribe landing page" />
              <Card.ImgOverlay style={{position: 'relative'}}>
                <Card.Title><a href="http://videoscribe.co">VideoScribe</a> </Card.Title>
                <Card.Text>
                <p>Together with Unosoft Labs, we worked with Sparkol to deliver a brand new static-page, headless architecture design.</p>
                <p>Sparkol is a UK company that launched Videoscribe - a whiteboard animation software and Storypix - a simple video creator from a user’s image gallery.

With a simpler, playful user experience and functionality compared to their counterparts from Adobe, their products appeal to teachers, bloggers, training personnel, etc. - who aren’t professional video producers.

Sparkol’s website has been built in-house by freelance consultants using Kentico CMS built on .NET and SQL Server. Its content regards marketing information, pricing and payment options for their products.</p>
<p>The new portal is built with React with Gatsby and Contentful for its CMS system.</p>

                </Card.Text>
                <Card.Text>
                  <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                      <i className="fab fa-html5"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-css3-alt"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-js"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-node-js"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-react"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-tools"></i>
                    </li>
                  </ul>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <br />
            <Card className="bg-dark text-white">
              <Card.Img src={ltph} alt="Little Things PH Landing page" />
              <Card.ImgOverlay style={{position: 'relative'}}>
                <Card.Title><a href="http://ltph.unosoftlabs.com">Little Things PH App</a> </Card.Title>
                <Card.Text>
                <p>Together with Unosoft Labs, we built this mobile app as supporters of the community and to showcase the team’s engineering skills.</p>
                <p>Little Things PH is a popular comic-strip gallery group on Facebook; has garnered over 280,000 followers so far.

It is home to illustrations and musings from its creator and our Senior Software Engineer, Ivyree Rosario.</p>
<p>The mobile app is built using React Native with Expo, Firebase and Contentful for its CMS</p>
                </Card.Text>
                <Card.Text>
                  <ul className="list-inline dev-icons">
                  <li className="list-inline-item">
                      <i className="fab fa-node-js"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-react"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-tools"></i>
                    </li>
                  </ul>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <br />
            <Card className="bg-dark text-white">
              <Card.Img src={portfolio} alt="My Portfolio landing page" />
              <Card.ImgOverlay style={{position: 'relative'}}>
                <Card.Title><a href="http://darlomiguel.now.sh">My Portfolio</a> </Card.Title>
                <Card.Text>
                My portfolio built with GatsbyJS deployed on Vercel
                </Card.Text>
                <Card.Text>
                  <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                      <i className="fab fa-html5"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-css3-alt"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-js"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-node-js"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-react"></i>
                    </li>
                    <li className="list-inline-item">
                      <i className="fab fa-tools"></i>
                    </li>
                  </ul>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
