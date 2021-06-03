import React from 'react';
import {Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import financeImage from '../assets/finance.jpg';
import networthImage from '../assets/networth.jpg';
import payrollImage from '../assets/payroll_vertical.jpg';



const fallback_title = "Welcome";
const fallback_description = "Learn about your finances!";

const Jumbotron = (props) => {

  let image;
  switch(props.image) {
    case "payroll":
      image = payrollImage;
      break;
    case "networth":
      image = networthImage;
      break;
    default:
      image = financeImage;
  }

  const Styles = styled.div`
    .jumbo {
      background: url(${image}) no-repeat fixed bottom;
      background-size: cover;
      color: #ccc;
      height: 200px;
      position: relative;
      z-index: -2;
    }

    .overlay {
      background-color: #000;
      opacity: 0.6;
      position:absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  `;

  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1> {props.title || fallback_title} </h1>
          <p> {props.description || fallback_description} </p>
        </Container>
      </Jumbo>
    </Styles>
  );

}

// const Jumbotron = () => (
//   <Styles>
//     <Jumbo fluid className="jumbo">
//       <div className="overlay"></div>
//       <Container>
//         <h1> Welcome </h1>
//         <p> Learn about your finances! </p>
//       </Container>
//     </Jumbo>
//   </Styles>
// );

export default Jumbotron;