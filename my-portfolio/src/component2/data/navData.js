
import {HiMenu } from 'react-icons/hi'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'
import {FaChevronCircleDown} from 'react-icons/fa'
import { MdOutlineDesignServices} from "react-icons/md"
import { IoCodeOutline} from "react-icons/io5"
import { AiOutlineProject, AiOutlineProfile} from "react-icons/ai"

import {FaFacebookF, FaGithub,  FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {TiHomeOutline } from 'react-icons/ti'
import {MdPersonOutline } from 'react-icons/md'
import imgsk from './assets/imgsk.jpg'
export {imgsk}
export const modeOps = [
    {
        icon: <BsFillSunFill />,
        text: 'light'
    },
    {
        icon: <BsMoonFill />,
        text: 'moon'
    }
]



export const navOps = [
    { icon: <TiHomeOutline />, text: 'Home' },
    { icon: <MdOutlineDesignServices />, text: "Service" },
    { icon: <IoCodeOutline />, text: "Qualification" },
    { icon: <AiOutlineProject />, text: "projects" },

]

export const socialLinks = [
    { text: <FaFacebookF />, goto: "https://www.facebook.com/profile.php?id=100031395428219" },
    { text: <FaInstagram />, goto: "https://www.instagram.com/sachinwebmern369/" },
    { text: <FaGithub />, goto: "https://github.com/sweetSachinKumar" },
    { text: <FaLinkedinIn />, goto: "https://www.linkedin.com/in/sachin-kumar-2728b4287/" },
]
