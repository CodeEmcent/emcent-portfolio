import { Analytics } from '@vercel/analytics/react'
import Nav        from './components/nav/Nav'
import Hero       from './components/hero/Hero'
import About      from './components/about/About'
import Skills     from './components/skills/Skills'
import Projects   from './components/projects/Projects'
import Experience from './components/experience/Experience'
import Contact    from './components/contact/Contact'
import Footer     from './components/footer/Footer'
import Divider    from './components/ui/Divider'

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>
      <Divider />
      <Footer />
      <Analytics />
    </div>
  )
}
