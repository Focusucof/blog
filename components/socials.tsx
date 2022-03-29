import Container from './container'
import { GitHub, Twitter, Twitch } from 'react-feather';

const Socials = () => {
  return (
    <footer className="">
      <Container>
        <div className="socials">
        <ul>
          <li>
            <a href="https://github.com/Focusucof" target="_blank" rel="noopener noreferrer" className='link-reset'>
              <GitHub /> 
            </a>
          </li>
          <li>
            <a href="https://twitter.com/_Focusucof" target="_blank" rel="noopener noreferrer" className='link-reset'>
              <Twitter />
            </a>
          </li>
          {/* <li>
            <a href="" target="_blank" rel="noopener noreferrer" className='link-reset'>
              
            </a>
          </li> */}
        </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Socials;
