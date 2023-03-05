import Head from "next/head";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import About from "../../components/About"

const Home = () => {
  return (
    <>
      <Head>
        <title>Shouvik - Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Shouvik Ahmed Antu" />
        <meta name="keywords" content="ReactJS, NextJS" />
        <meta name="description" content="Front-end developer, competitive programming, AI - Machine Learning interests, Willamette University Student." />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Shouvik - Programmer" />
        <meta property="og:locale" content="en_US" />
        <title data-rh="true">Shouvik - Developer</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Shouvik - Developer"/>
        <meta data-rh="true" property="og:image" content="/images/shouvik.png"/>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;