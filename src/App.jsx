import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Service from "./components/Service.jsx";
import Contactpage from "./components/Contactpage.jsx";
import About from "./components/Aboutpage.jsx";
import Gallerypage from "./components/Gallerypage.jsx";
import Hotelpage from "./components/Hoteltel.jsx";
import Condopage from "./components/Condopage.jsx";
import Villapage from "./components/Villapage.jsx";
import Apartmentpage from "./components/Apartmentpage.jsx";
import Pay from "./components/Pay.jsx";
import Pay1 from "./components/Pay1.jsx";
import Pay2 from "./components/Pay2.jsx";
import Pay3 from "./components/Pay3.jsx";
import Pay4 from "./components/Pay4.jsx";
import ScrollToTop from "./ScrollTop.jsx";
import Detail from "./components/Detail.jsx";
export const alldata = createContext();
function App() {
  const [Data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://sorngvichet.github.io/dreamhomedataapi/dreamhomedataapi.json"
      )
      .then((res) => {
        setdata(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, []);
  if (loading) {
    return <div>Is loading ....</div>;
  }
  return (
    <alldata.Provider value={Data}>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dreamhome/" element={<Homepage />} />
        <Route path="/dreamhome/service" element={<Service />} />
        <Route path="/dreamhome/contact" element={<Contactpage />} />
        <Route path="/dreamhome/about" element={<About />} />
        <Route path="/dreamhome/gallery" element={<Gallerypage />} />
        <Route path="/dreamhome/hotel" element={<Hotelpage />} />
        <Route path="/dreamhome/condo" element={<Condopage />} />
        <Route path="/dreamhome/villa" element={<Villapage />} />
        <Route path="/dreamhome/apartment" element={<Apartmentpage />} />
        <Route path="/dreamhome/pay1" element={<Pay1 />} />
        <Route path="/dreamhome/pay2" element={<Pay2 />} />
        <Route path="/dreamhome/pay3" element={<Pay3 />} />
        <Route path="/dreamhome/pay4" element={<Pay4 />} />
        {Data.map((itm) => (
          <>
            <Route
              path={"/dreamhome/detail-" + itm.id}
              element={
                <Detail
                  img={itm.mainimg}
                  title={itm.title}
                  bedroom={itm.prop.bedroom}
                  bathroom={itm.prop.bathroom}
                  livingroom={itm.prop.livingroom}
                  pool={itm.prop.pool}
                  a={itm.area.a}
                  b={itm.area.b}
                  ppm={itm.price.ppm}
                  ppy={itm.price.ppy}
                  locationtxt={itm.location.text}
                  locationlink={itm.location.link}
                  ownername={itm.owner.name}
                  ownerphone={itm.owner.phone}
                  ownerfacebook={itm.owner.facebook}
                  owneremail={itm.owner.email}
                  link={"/dreamhome/pay-" + itm.id}
                  moreimg={itm.extraimg}
                />
              }
            />
            <Route
              path={"/dreamhome/pay-" + itm.id}
              element={
                <Pay
                  img={itm.mainimg}
                  title={itm.title}
                  a={itm.area.a}
                  b={itm.area.a}
                  ppm={itm.price.ppm}
                  ppy={itm.price.ppy}
                  owneremail={itm.owner.email}
                  type={itm.type}
                  ownerphone={itm.owner.phone}
                  ownertelegram={itm.owner.phone}
                />
              }
            />
          </>
        ))}
      </Routes>

      <Footer />
    </alldata.Provider>
  );
}

export default App;
