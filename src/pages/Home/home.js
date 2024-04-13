import axios from "axios";
import React, { useEffect, useState } from "react";
import "./home.css";
import { FaUmbrella } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { AiOutlineMenu } from "react-icons/ai";
import { CiMap } from "react-icons/ci";
import { TbSettings } from "react-icons/tb";
import cloud_icon from "../images/weather.webp";
// import { Axios } from "axios";
// import { ImImages } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
const Home = () => {
  const [search, setSearch] = useState("");
  const [right, setRight] = useState("Bishkek");
  const [weather2, setWeather2] = useState({});
  function createProtuct2() {
    axios(
      `http://api.weatherapi.com/v1/current.json?key=58596fc53ba642dca3181109240704&q=${right}&aqi=yes`
    ).then((res2) => {
      setWeather2(res2.data);
    });
  }
  useEffect(() => {
    createProtuct2();
  }, [right]);
  console.log(weather2);
  return (
    <div id="heder">
      <div
        style={{
          width: "1462px",
          height: "39pc",
        }}
        className="container"
      >
        <div className="search">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="search"
          />
          <div className="searc1">
            <button
              onClick={() => {
                setRight(search);
              }}
            >
              <FiSearch />
            </button>
          </div>
        </div>
        <div className="home">
          <div className="home1">
            <div className="umbrella">
              <FaUmbrella />
            </div>
            <div className="weather">
              <TiWeatherPartlySunny />
              <h4>Weather</h4>
            </div>
            <div className="menu">
              {" "}
              <AiOutlineMenu />
              <h4>Cities</h4>
            </div>
            <div className="map">
              <CiMap />
              <h4>Map</h4>
            </div>
            <div className="setting">
              <TbSettings />
              <h4>Settings</h4>
            </div>
          </div>
          <div className="center"></div>
          <div className="weather1">
            <h1>23°</h1>
            <img
              src={weather2.current && weather2.current.condition.icon}
              alt="img"
            />
          </div>

          <div className="weather22">
            <h1>{weather2.location && weather2.location.region}</h1>
            <h3>{weather2.location && weather2.location.country}</h3>
            <h3>{weather2.current && weather2.current.temp_c}°</h3>
          </div>

          <div className="footer"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

//dd94f859a0e52d6e4767fddf735f04a7
