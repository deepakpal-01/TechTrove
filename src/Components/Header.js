import React from 'react'
import titleImg from './Images/title-logo.png'
import { NavBar } from './NavBar'
import styled from 'styled-components'
import LoadingBar from 'react-top-loading-bar'

export default function Header({progress,setProgress}){
    const MainHeader=styled.div`
    width: 99vw;
    height: 10vh;
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin:0px 5px;
    position:sticky;
    top:0px;
    z-index:999;
    @media screen and (max-width:300px){
        #title-logo{
            width:75vw;
        }
    }
    `
    return (
        <>
          <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={setProgress}
          />
        <MainHeader>
            <div className="title">
            <a href="/"><img id="title-logo" src={titleImg} alt="TechTrove" width={"250vw"} /></a>
            </div>            
            <NavBar/>
            
        </MainHeader>
        </>
      )
}

