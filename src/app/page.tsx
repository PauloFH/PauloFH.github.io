import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Projects from '../components/Projects'
import AboutMe from '../components/AboutMe'
import Footer from '../components/footer'
import ScrollToTopButton from '../components/ScrollToTopButton'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Meu Portfólio</title>
        <meta name="description" content="Portfólio pessoal criado com Next.js, TypeScript e Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
      <AboutMe />
      <Projects />
      <Footer />
      <ScrollToTopButton />
      </main>
      <footer className="bg-fuchsia-950 text-white py-4 text-center">
        <p >&copy; {new Date().getFullYear()} Paulo Holanda. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default Home