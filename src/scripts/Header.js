import logo from '../resources/webLogo.png'
import discord from '../resources/discord_logo.svg'
import twitter from '../resources/twitter_logo.svg'
import opensea from '../resources/opensea_logo.svg'

function Header() {
    return (
        <div className="Header">
            <div className='left'>
                <img src={logo} height="100%"></img>
                <h1 className='logo_text'>Clash Bots</h1>
            </div>
            <div className='right'>
                <img className='media_link' src={discord}></img>
                <img className='media_link' src={twitter}></img>
                <img className='media_link' src={opensea}></img>
            </div>
        </div>
    );
}

export default Header;
