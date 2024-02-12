
import weatherThumbnail from "./assets/weatherThumb.jpg"
import NewsThumbnail from "./assets/newsThumbnail.png"
import eccomerceThumbnail from "./assets/miniecommerceThum.png"
import amazonThumbnail from "./assets/amazonThum2.png"
import mernThumbnail from "./assets/mernThum.png"


export const ReactjsProject = [
  
    {
        githubLink:"https://github.com/sweetSachinKumar/myshops",
        webLinkToGo:"https://myecomercestore.netlify.app/",
        thumbnail: eccomerceThumbnail,
        ytVideoID:null,
        title:"mini E-comerce website",
        description:" its feature is that you can store products on cart. increase and decrease functionality of no. of products. product also can deleted on cart.",
        features: [
            "add or remove to cart.",
            "Increase and decrease number of products in cart page.",
          
        ],
        techUsed: "React.js | Tailwind CSS |"
    },
  
    {
        webLinkToGo:"https://amazonclone-eta-five.vercel.app/",
        thumbnail: amazonThumbnail,
        ytVideoID:null,
        title:"Amazon clone",
        description:"Main functionality of this site is you can add to cart and  in check out page you can remove product from cart. in cart, in one box tells total money ",
        githubLink:"https://github.com/sweetSachinKumar/amazonclone",
        features: [
            "add or remove to cart.",
            "on click, go to top button on footer."
        ],
        techUsed: "React.js | Tailwind CSS"

    },
    {
        githubLink:"https://github.com/sweetSachinKumar/weather",
        webLinkToGo: null,
        thumbnail: weatherThumbnail,
        ytVideoID:"jJauUNDg9FU",
        title:"Weather Website",
        description:"In this weather website you can search any state of country and then you will get all weather information, according to weather icons and background color are also change",
        features: [
            "search funcationality.",
            "fetching data from a api.",
            "changing color according to weather status.",
            "you can see real time, weather teprature etc."
        ],
        techUsed: "React.js | Tailwind CSS"

    },
    {
        githubLink:"https://github.com/sweetSachinKumar/newslollypop",
        webLinkToGo: null,
        thumbnail: NewsThumbnail,
        ytVideoID:null,
        title:"News Website",
        description:"In this News Website you can read any news. first of all when website load, you will see a nice top bar with loading icon. second of all you will see a side bar where you can choose any news category and then you will see News of that category. Last but not least, in this website you can scroll infinitely as much as data is in there. ",
        features: [" Infinite scrolling functionality",
            "In this News Website you can read any type of news.",
            "top loading bar and loading icon functionality.",
            "In side bar you can choose any news category and then you will see News of that category",
           
        ],
        techUsed: "React.js | Tailwind CSS"
    },
    
]

export const MERNproject = [
    {
        githubLink:"https://github.com/sweetSachinKumar/Last-ecommerce_user_vender",
        webLinkToGo:"https://last-ecommerce-user-vender.vercel.app/",
        thumbnail: mernThumbnail,
        ytVideoID:null,
        title:"Sachin's store",
        description:"In this weather website you can search any state of country and then you will get all weather information, according to weather icons and background color are also change",

        features: [
            "	user and vender protected route.",
            "	user can add and remove to cart and order any number of products after creating their account.",
            "	login, sign up and google one click signup features.",
            "	User profile page, user can view order status.",
            "	User can update their information like name, email, image, phone no. and password.",
            "	Forgot password functionality. Sending email of reset token link.",
            "	Vender Dashboard page. Vender can see all orders and vender can update order status.",
            
        ],
        techUsed: "React.js | React-redux | Tailwind CSS | Chart JS | Node.js | Express.js | MongoDB | jwt "
    },

]
