import Image from 'next/image'
import Nav from './components/Nav'
import Intro from './components/Intro'
import '../app/components/page.css'
import CardsBody from './components/cards-body'

export default function Home() {
  
  return (
<main className='main' >
  <Nav />

<CardsBody/>



  {/* <Intro/> */}
</main>
  )
}
