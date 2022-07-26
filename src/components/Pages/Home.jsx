import React from 'react'
import Clients from '../common/Clients'
import Header from '../common/Header'
import PortFolio from '../common/PortFolio'
import Services from '../common/Services'
import Team from '../common/Team'


function Home() {
  return (
    <div>
      <Header
        title='Welcome To Our Studio'
        subtitle="IT'S NICE TO MEET YOU"
        buttonText="TELL ME MORE"
        Link="/services"
        showButton={true}
        image='../assets/img/header-bg.jpg'
     />

    <Services/>
    
    <PortFolio/>
    <Team/>
    <Clients/>
    
    </div>
    
  )
}

export default Home
