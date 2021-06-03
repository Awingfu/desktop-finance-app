import React from 'react';
import { Jumbotron, Layout } from '../components';

const jumboTitle = "Payroll App";
const jumboDescription = "This app is to help you estimate your payroll items!";
const jumboImage = "payroll";

/**
 * TODO's
 * Form that you can input payroll details
 * generates Take Home Pay, and table of taxes/ pie chart
 * 
 * Future: 
 * Add side by side comparisons of different configurations
 * @returns T
 */

const Payroll = () => (
  <React.Fragment>
    <Jumbotron title={jumboTitle} description={jumboDescription} image={jumboImage} />
    <Layout>
      <div>
        <h2> Payroll </h2>
        <p> This app will help you calculate your take home pay. </p>
       </div>
    </Layout>
  </React.Fragment>
  );

export default Payroll;