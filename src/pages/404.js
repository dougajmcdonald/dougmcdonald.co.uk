import React from 'react'
import { Link } from 'gatsby'

import Layout from '../templates/layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black text-slate-200 tracking-tighter mb-8">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
          Page not found
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
          We've not been able to find the page you're looking for. Use the navigation to find your way back.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700"
        >
          Return Home
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
