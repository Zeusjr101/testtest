import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Footer () {
    const iconSize = 40; 

    return (
        <footer className="fixed-bottom nav justify-content-end">
            <a href='https://github.com/Zeusjr101' className='icon'><FaGithub size={iconSize}/></a>
            <a href='mailto:JesusUjr101@gmail.com' className='icon'><FaEnvelope size={iconSize}/></a>
            <a href='https://www.linkedin.com/' className='icon'><FaLinkedin size={iconSize}/></a>
        </footer>
    )
}

export default Footer;
