import React from 'react'
import Layout from '../templates/layout'

const ProjectItem = ({ title, description, tags, link }) => (
  <div className="group block h-full">
    <div className="h-full border border-slate-200 rounded-lg p-6 transition-all duration-200 hover:border-slate-400 hover:shadow-sm">
      <div className="flex flex-col h-full bg-white">
        <h3 className="font-semibold text-slate-900 text-lg mb-2 tracking-tight">
          {link ? (
            <a href={link} className="hover:underline decoration-slate-400">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map(tag => (
            <span
              key={tag}
              className="bg-slate-50 text-slate-600 text-[10px] font-medium px-2 py-1 rounded border border-slate-100 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const IndexPage = () => (
  <Layout>
    {/* Hero Section */}
    <section className="mb-24 md:mb-32">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
        Design Engineer
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl font-normal">
        I bridge the gap between Figma and production. Architecting design
        systems, writing production-ready React, and building complex data
        interfaces.
      </p>
      <div className="mt-8 flex gap-4 text-sm font-medium text-slate-500">
        <span className="flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Head of Product Design
        </span>
        <span className="text-slate-300">•</span>
        <span>Based in Wiltshire, UK</span>
      </div>
    </section>

    {/* Selected Work Section */}
    <section id="work">
      <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          Selected Work
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectItem
          title="The Moneyhub Design System"
          description="Architected a multi-platform system in React & TypeScript. Wrote API docs, enforced WCAG 2.1, and reduced shipping time by 40%."
          tags={['React', 'TypeScript', 'Figma', 'System']}
        />
        <ProjectItem
          title="Enterprise Threat Modelling"
          description="Designed a 'Power User' interface for complex data visualization. Migrated legacy desktop apps to modern React SPAs."
          tags={['React', 'D3.js', 'Redux', 'Viz']}
        />
        <ProjectItem
          title="Startup Operating System"
          description="Defining the product architecture and design operations (Linear, CI/CD) for a high-growth startup (Jan 2025 – Present)."
          tags={['Linear', 'CI/CD', 'Strategy']}
        />
      </div>
    </section>
  </Layout>
)

export default IndexPage
