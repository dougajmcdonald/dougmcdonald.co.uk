import React from "react"

import Layout from "../templates/layout"
import AboutLede from "../components/about-lede"

export default () => {
  return (
    <Layout>
      <AboutLede />
      <h2>About Me</h2>
      <p className="md:w-2/3">
        My name is Doug McDonald, I’m the User Experience Capability lead at
        BMT. I live in Wiltshire, UK with my wife Kim and our daughter Phoebe. I
        enjoy developing software and my passion is designing user interfaces.
      </p>
      <p className="md:w-2/3">
        I’m lucky enough to be able to combine my coding expertise with my
        design skills and lead a talented team at BMT where we design digital
        services for complex user needs in an enterprise environment.
      </p>
      <h2>Background</h2>
      <p className="md:w-2/3">
        I studied Computer Science at University of Wales Aberystwyth (UWA) and
        from there took a position at Somerfield where I spent time working as
        desktop support for the 1500 on site users and then technical support
        for their multinational electronic point of sale (EPOS) system, learning
        SQL from books.
      </p>
      <p className="md:w-2/3">
        I moved departments to the project support department where I worked the
        implementation of the IBM Artemis7, helping capture requirements and
        building an online help system to guide users on the new tool. I then
        worked on a large Enterprise Architecture project mapping the
        departmental functions and maintaining an MS Access database where the
        analysis results were held...we didn’t go ahead with the project.
      </p>
      <p className="md:w-2/3">
        I moved to <a href="https://www.nmr.co.uk/">National Milk Records</a>{" "}
        where I worked supporting a nationwide milk testing system with
        transactional SQL replication over 3 sites working closely with a
        dedicated team of DBA’s. During this role I solely developed two web
        systems, for microbiolical healthcheck result storage and one for
        presentation of farmers test data which are both in use today and
        achieved the Microsoft Technology Specialist (MCTS) qualification.
      </p>
      <h2>Current Company</h2>
      <p className="md:w-2/3">
        I moved to BMT as a C#.NET web developer and learned Ext.NET for several
        of our key projects, one of which serves as our current management
        information system (MIS).
      </p>
      <p className="md:w-2/3">
        I oversaw the migration from webforms to MVC and introduced many process
        improvements as I found a new passion for improving the way work was
        done, being promoted to Senior Software Development in the process.
      </p>
      <p className="md:w-2/3">
        I have spent years working on a huge variety of innovative projects,
        including introducing portable tablets to superseded traditional paper
        based processes; Using unmanned air systems to survey hazardous scenes
        to improve emergency services responses or introducing modern web
        application approaches to cyber security planning operations.
      </p>
      <h2>A new role</h2>
      <p className="md:w-2/3">
        In late 2019 I took on the User Experience (UX) capability lead role on
        BMT, where I am currently working on defining new tools and techniques
        in the way we design digital services, how we measure our success for
        our customers and influence the future of our company.
      </p>
    </Layout>
  )
}
