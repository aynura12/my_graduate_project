import React, { useState, useEffect } from "react";
import axios from "axios";
import { createContext } from "react";
export const mainContext = createContext(null);
const ContextProvider = ({ children }) => {
  // const [state,setState]=useState([])
  const [gallerys, setGallerys] = useState([]);
  const [causes, setCause] = useState([]);
  const [lefts, setLefts] = useState([]);
  const [rights, setRights] = useState([]);
  const [reads, setReads] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [teams, setTeams] = useState([]);
  const [comments, setComments] = useState([]);

  const getGallery= async () => {
    const res = await axios.get("http://localhost:8080/gallery");
    setGallerys(res.data);
  };
  const getCause = async () => {
    const res = await axios.get("http://localhost:8080/cause");
    setCause(res.data);
  };
  const getLefts = async () => {
    const res = await axios.get("http://localhost:8080/counter");
    setLefts(res.data);
  };

  const getRights = async () => {
    const res = await axios.get("http://localhost:8080/charity");
    setRights(res.data);
  };

  const getReads = async () => {
    const res = await axios.get("http://localhost:8080/read");
   setReads(res.data)
  };
  const getVolunteers = async () => {
    const res = await axios.get("http://localhost:8080/volunteer");
    setVolunteers(res.data)
  };

  const getEvents= async () => {
    const res = await axios.get("http://localhost:8080/event");
   setEvents(res.data);
  };

  const getNews = async () => {
    const res = await axios.get("http://localhost:8080/news");
    setNews(res.data);
  };
  const getTeams= async () => {
    const res = await axios.get("http://localhost:8080/team");
    setTeams(res.data);
  };
 
  const getComment = async () => {
    const res = await axios.get("http://localhost:8080/causeComment");
    setComments(res.data);
  };
  useEffect(() => {
   getVolunteers()
  }, []);

  useEffect(() => {
   getGallery()
  }, [gallerys]);

  useEffect(() => {
    getCause();
  }, [causes]);

  useEffect(() => {
    getLefts();
  }, [lefts]);

  useEffect(() => {
    getRights();
  }, [rights]);

  useEffect(() => {
    getReads()
  }, [reads]);
 
  useEffect(() => {
    getEvents();
  }, [events]);

  useEffect(() => {
    getNews();
  }, [news]);

  useEffect(() => {
    getTeams();
  }, [teams]);

  useEffect(() => {
   getComment()
  }, [comments]);
const  ToTop=()=>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
 
}



  const values = {
    ToTop,
    causes,
    setCause,
    lefts,
    setLefts,
    rights,
    reads,
    volunteers,
    events,
    gallerys,
    news,
    teams,
    setTeams,
    setEvents,
    setRights,
    setGallerys,
    setNews,
    getLefts,
    getRights,
    getCause,
    getReads,
    getVolunteers,
    getEvents,
    getGallery,
    getNews,
    getTeams,
    comments,
    setComments,
    getComment,
  };

  return <mainContext.Provider value={values}>{children}</mainContext.Provider>;
};

export default ContextProvider;
