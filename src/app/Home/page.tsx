import type { NextPage } from 'next'
import Head from '../../components/Head'
import Header from '../../components/Header'
import Projects from '../../components/Projects'
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../../components/footer'
import ScrollToTopButton from '../../components/ScrollToTopButton'
const Home: NextPage = () => {
  return (
    <div>
      <Head title="Paulo Holanda | Portifolio" description="Portifolio main Page" />
      <Header />
      <main className='py-9'>
      <AboutMe />
      <Projects />
      <Footer />
      <ScrollToTopButton />
      </main>
      <footer className="bg-blue-950 text-white py-4 text-center">
        <p >&copy; {new Date().getFullYear()} Paulo Holanda. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default Home