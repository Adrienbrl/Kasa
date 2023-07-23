import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { logementsList } from "../../data/logementsList";
function Home(props) {
  return (
    <div>
      <Header />
      <Banner
        titre="Chez vous, partout et ailleurs"
        imageSrc="../../assets/images/banner-home.png"
        bannerAlt="banner home"
      />
      <div className="gallery">
        {logementsList.map((e) => (
          <Card key={e.id} id={e.id} imageSrc={e.cover} titre={e.title} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
