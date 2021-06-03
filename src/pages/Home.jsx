import React from 'react';
import { Jumbotron, Layout } from '../components';

const jumboTitle = "Welcome to the Desktop Finance App";
const jumboDescription = "This app is to help you with your finances!";
const jumboImage = "finance";

const Home = () => (
  <React.Fragment>
    <Jumbotron title={jumboTitle} description={jumboDescription} image={jumboImage} />
    <Layout>
      <div>
        <h2> Home Page </h2>
        <p> Please use the navbar to navigate to various tools. </p>
      </div>
    </Layout>
  </React.Fragment>
  );

export default Home;