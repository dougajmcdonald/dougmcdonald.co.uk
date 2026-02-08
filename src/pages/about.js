import React from 'react'

import Layout from '../templates/layout'
import Lede from '../components/lede'

const AboutPage = () => {
  return (
    <Layout>
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          About Me
        </h1>
        <Lede>
          <p>I’m not an expert, I’m a generalist in all things software.</p>
          <p>
            I’m a unicorn that can develop full stack in multiple languages,
            design a secure, accessible system with excellent user experience and
            create the CI/CD pipeline to build and deploy it.
          </p>
          <p>
            Or I can do none of those things and build a team which will do it for
            you.
          </p>
        </Lede>
      </div>

      <div className="mt-16 border-t border-slate-100 pt-16 max-w-2xl prose prose-slate prose-lg">
        <p>
          My name is Doug McDonald, I’m the User Experience Capability lead at
          BMT. I live in Wiltshire, with my wife Kim and our daughter Phoebe. I
          enjoy developing software and my passion is designing user interfaces.
        </p>

        <p>
          I’m lucky enough to be able to combine my coding expertise with my
          design skills and lead a talented team at BMT where we design digital
          services for complex user needs in an enterprise environment.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-6 tracking-tight">Background</h2>
        <p>
          I studied Computer Science at University of Wales Aberystwyth (UWA) and
          from there took a position at Somerfield where I spent time working as
          desktop support and then technical support for their electronic point of
          sale (EPOS) system learning SQL from books.
        </p>
        <p>
          In the project support department, I worked the implementation of the
          IBM Artemis7, helping capture requirements and building an online help
          system to guide users on the new tool. I then worked on a large
          Enterprise Architecture project mapping the departmental functions.
        </p>
        <p>
          I moved to <a href="https://www.nmr.co.uk/" className="text-slate-900 underline decoration-slate-300 hover:decoration-slate-900 transition-all">National Milk Records</a>{' '}
          where I supported a nationwide milk testing system working closely with
          a dedicated team of DBAs. During this role, I developed two web systems,
          one for microbiological health check result storage and one for the
          presentation of farmers test data which are both in use today. I also
          studied for and achieved the Microsoft Technology Specialist (MCTS)
          qualification in .NET Web Application development.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-6 tracking-tight">Current Company</h2>
        <p>
          I moved to BMT as a C#.NET web developer and when the department was
          seven strong and worked on several key internal systems. After we
          successfully delivered our first major external project I found a new
          passion for improving the way work was done, being promoted to Senior
          Software Development in the process.
        </p>
        <p>
          I've worked on a huge variety of innovative projects, including
          introducing portable tablets to superseded traditional paper-based
          processes; Using unmanned air systems to survey hazardous scenes to
          improve emergency services responses or introducing modern web
          application approaches to Cyber-security planning operations.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-6 tracking-tight">A new role</h2>
        <p>
          In late 2019 I took on the User Experience (UX) capability lead role on
          BMT, where I am currently working on defining new tools and techniques
          in the way we design digital services, how we measure our success for
          our customers and influence the future of our company.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
