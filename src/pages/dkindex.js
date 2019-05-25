import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Menu from "../components/dkmenu"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Ásla Eiriksstein Prior" />
      <div style={{ maxWidth: `1000px`, marginBottom: `0` }}>
        <Image />
      </div>
      <Menu />
      <center style={{paddingTop: '40px'}}>
        <h1>Ásla Eirikstein Prior</h1>
        <p>Psykolog cand.psych.aut./Sygeplejerske</p>
        <p>Jatnavegur 13</p>
        <p>FO-370 Miðvágur</p>
        <p>Færøerne</p>
        <p>Tel.: +298 532336</p>
        <p>E-mail: <a href="mailto:prior@kallnet.fo">prior@kallnet.fo</a></p>
        <p>Skype: asla.eirikstein.prior</p>
        <p><a href="https://www.kst.fo">www.kst.fo</a> - <a href="http://www.psykolog.fo">www.psykolog.fo</a></p>
      </center>
    </Layout>
  )
}