import React ,{useEffect} from 'react'
import './Style/Home.css'
import Banner from './Banner'
import herosection1 from './Images/hero-section1.jpg'
import herosection2 from './Images/hero-section2.jpg'
import herosection3 from './Images/hero-section3.jpg'
import ServicesBanner from './ServicesBanner'
import { useProductContext } from './Contexts/ProductContext'
import FeatureBox from './FeatureBox'
import Loader from './Loader'

export default function Home({setProgress}) {

  const {products,isLoading}=useProductContext()

  const featureProducts1=products.filter((product)=>{
    return product.category==="smartphones"||product.category==="home-decoration"
  })
  const featureProducts2=products.filter((product)=>{
    return product.category==="laptops"||product.category==="mens-watches"
  })
  
  useEffect(() => {
    setProgress(20)
    window.scrollTo(0, 0);
    setProgress(100)
    //eslint-disable-next-line
  }, []);

  if(isLoading){
    setProgress(70)
    return (
      <Loader/>
    );
  }
  

  return (
    
    <>
    {/* {setProgress(100)} */}
      <section id="hero-section" className="hero-section">
            <figure id="slider">
                <img src={herosection1} alt=""/>
                <img src={herosection2} alt=""/>
                <img src={herosection3} alt=""/>
                <img src={herosection1} alt=""/>
                <img src={herosection2} alt=""/>
            </figure>
      </section>
      
      <FeatureBox featureProducts={featureProducts1} isLoading={isLoading}/>
      <Banner/>
      <FeatureBox featureProducts={featureProducts2} isLoading={isLoading}/>
      <ServicesBanner/>

    </>
  );
}
