import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiReact, DiNodejsSmall} from 'react-icons/di'
import {BiLogoJavascript,BiLogoTailwindCss, BiLogoMongodb} from 'react-icons/bi'


//  data for my services 
export const ProLanguage = [
    { heading: "Languages I use", para: " HTML 5, CSS 3, JavaScript, node.js" },
    { heading: "Frameworks I use", para: " react.js, react-redux, Tailwind CSS, espress.js, mongoose" },
    { heading: "Database I use", para: "mongoDB" },
    { heading: "other", para: "JWT, Bcrypt" },
]

// known programmming languages Percentage 
export const languageData = [
    {
        lang: "HTML",
        complited: "85%",
        bgColor: "repeating-linear-gradient(45deg, #f1bd5f, rgb(176 105 0) 11px)",
        icon: <AiFillHtml5/>,
        iconColor: " rgb(176 105 0)"
        
    },
    {
        lang: "CSS",
        complited: "75%",
        bgColor: "repeating-linear-gradient(45deg, #3F51B5, rgb(19 34 180) 11px)",
        icon: <DiCss3/>,
        iconColor: " rgb(19 34 180)"
    },
    {
        lang: "Java Script",
        complited: "70%",
        bgColor: "repeating-linear-gradient(45deg, #FFEB3B, #a09002 11px)",
        icon: <BiLogoJavascript/>,
        iconColor: " #a09002"
    }, {
        lang: "React js",
        complited: "86%",
        bgColor: "repeating-linear-gradient(45deg, #73b0e2e0, #005797 11px)",
        icon: <DiReact/>,
        iconColor: "  #005797 "
    },
    {
        lang: "Tailwind css",
        complited: "82%",
        bgColor: "repeating-linear-gradient(45deg, #0d5f68, #00BCD4 11px)",
        icon: <BiLogoTailwindCss/>,
        iconColor: "  #00BCD4"
    },
    {
        lang: "Nodejs and expressjs",
        complited: "52%",
        bgColor: "repeating-linear-gradient(45deg, rgb(22 104 13), rgb(16 215 0) 11px)",
        icon: <DiNodejsSmall/>,
        iconColor: "#61e315"
    },
    {
        lang: "MongoDB and mongoose",
        complited: "42%",
        bgColor: "repeating-linear-gradient(45deg, rgb(9 43 4 / 79%), rgb(70 176 15) 11px)",
        icon: <BiLogoMongodb/>,
        iconColor: "rgb(69 185 19)"
    },
    
]


