import { React, useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import '../App.css';


function NavbarOne() {
  const [date, setDate] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav expand='lg' style={{ backgroundColor: 'lightgray' }}>
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link fix='top' className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-black">𝕮𝖔𝖓𝖋𝖊𝖗𝖊𝖓𝖈𝖊 𝕽𝖔𝖔𝖒  𝕭𝖔𝖔𝓚𝖎𝖓𝖌</span>
        </Link>
        <div className="flex items-center justify-between" id="mobile-menu">
          <div className="text-right">
            <p className="date-time text-black">{date}</p>
          </div>
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

            <p className="flex items-center justify-between">W𝖊𝖑𝖈𝖔𝖒𝖊 : {localStorage.getItem("email")}</p>
            <li>
              <NavLink to="/Calendar" className="flex items-center justify-between" aria-current="page">
                📅
                {/* <FontAwesomeIcon icon={faCalendar} >Calendar</FontAwesomeIcon> */}
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="flex items-center justify-between">𝐋𝐨𝐠𝐨𝐮𝐭</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarOne