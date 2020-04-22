import React from 'react'

import Layout from '../templates/layout'
import Lede from '../components/lede'
import Taken from '../svg/undraw_Taken_if77.svg'

export default () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <Lede>
        <p>We've not been able to find the page you're looking for.</p>
        <p>
          Use the website navigation at the top to get back on the right track.
        </p>
      </Lede>
      <Taken className="mx-auto my-2xl" />
    </Layout>
  )
}
