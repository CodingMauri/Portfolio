import React from 'react'
import {MdPlace} from 'react-icons/md'
import styled from "styled-components"
  const ItemStyles = styled.div`
    padding:2rem;
    background-color:white;
    display:flex;
    align-items:center;
    gap:2rem;
    border-radius:8px;
    margin-bottom:2rem;
    .icon{
      color:black;
      background-color:var(--color-3);
      padding:1.3rem;
      align-items:center;
      justify-content:center;
      border-radius:50%;
    }
    .text p{
      font-size:1.5rem;
    }
    svg{
      width:2rem;
      height:2rem;
    }
    @media only screen and (max-width:500px){
      svg{
        width:1rem;
        height:1rem;
      }
    }
    .text p{
      font-size:15px;
    }
   
  `;
export default function ContactInfo({
  icon = <MdPlace />,
  text = "Hayward, CA"
}){
  return (
    <ItemStyles>

    <div className = "icon">{icon}</div>
    <div className = "text">
      <p>{text}</p>
      </div>

    </ItemStyles>
  )
}
