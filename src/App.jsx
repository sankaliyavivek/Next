import React from 'react'
import './App.css'
import Header from './components/section1/Header'
import SectionContent2 from './components/section2/SectionContent2'
import SectionApproch from './components/sectionapproch/SectionApproch'
import SectionChoose from './components/sectionchoose/SectionChoose'
import SectionForGround from './components/sectionforground/SectionForGround'
import SectionCards from './components/sectioncards/SectionCards'
import SectionContact from './components/ContactUS/SectionContact'
import Footer from './components/sectionFooter/Footer'

function App() {

  return (
    <div className='next-horizon'>
     
      <Header></Header>
      <SectionContent2></SectionContent2>
      <SectionApproch></SectionApproch>
      <SectionChoose></SectionChoose>
      <SectionForGround></SectionForGround>
      <SectionCards></SectionCards>
      <SectionContact></SectionContact>
      <Footer></Footer>
    </div>
  )
}



export default App
