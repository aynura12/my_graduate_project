    import MainRouter from "../components/MainRouter";
    import Home1 from "../pages/Home1";
    import Home2 from "../pages/Home2";
    import Causes from "../pages/Causes"
    import CausesDetail from "../pages/CausesDetail"
    import DonateNow from "../pages/DonateNow"
    import Events from "../pages/Events"
    import EventsDetail from "../pages/EventsDetail";
    import News from "../pages/News"
    import NewsDetail from "../pages/NewsDetail"
    import About from "../pages/About"
    import Gallery from "../pages/Gallery"
    import Volunteer from "../pages/Volunteer"
    import OurTeam from "../pages/OurTeam"
    import Sponsors from "../pages/Sponsors"
    import Contact from "../pages/Contact"
    import Login from "../pages/Login"
    import Register from "../pages/Register"
    const ROUTES=[{
        path:"/",
        element:<MainRouter/>,
        children:[
            {
                path:"home1",
                element:<Home1/>
            },
            {
                path:"home2",
                element:<Home2/>
            },
            {
                path:"causes",
                element:<Causes/>
            },
           {path:"causes/:id",
        element:<CausesDetail/>},
            {
                path:"donatenow",
                element:<DonateNow/>
            },
            {
                path:"events",
                element:<Events/>
            },
            {
                path:"eventsdetail",
                element:<EventsDetail/>
            },
            {
                path:"news",
                element:<News/>
            },
            {
                path:"newsdetail",
                element:<NewsDetail/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"gallery",
                element:<Gallery/>
            },
            {
                path:"volunteer",
                element:<Volunteer/>
            },
            {
                path:"ourteam",
                element:<OurTeam/>
            },
            {
                path:"sponsors",
                element:<Sponsors/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            },
        
        ]
    }]




    export default ROUTES;