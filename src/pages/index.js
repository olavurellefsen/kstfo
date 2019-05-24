import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Forsíða" />
    <div style={{ maxWidth: `1000px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <center>
    <h1>Ásla Eirikstein Prior</h1>
    <p>Sálarfrøðingur cand.psych.aut./Sjúkrarøktarfrøðingur</p>
    <p>Jatnavegur 13</p>
    <p>FO-370 Miðvágur</p>
    <p>Føroyar</p>
    <p>Tel.: +298 532336</p>
    <p>E-mail: prior@kallnet.fo</p>
    <p>Skype: asla.eirikstein.prior</p>
    <p>www.kst.fo  -  www.psykolog.fo</p>
    </center>
  </Layout>
)

export default IndexPage
