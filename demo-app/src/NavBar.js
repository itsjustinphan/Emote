import anger from './img/anger.png';
import stress from './img/stress.png';
import fear from './img/fear.png';
import happy from './img/happy.png';
import sadness from './img/sadness.js';
import './MenuBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';

// The content for the nav bar on the top of every page
function NavBar() {
  return (
    <div>
      <Navbar aria-label="Inside Out" className="nav">
        <Container>
          {/* This will contain all of the options for the menu/navbar */}

            <Dropdown>
              
              <Dropdown.Toggle aria-label="Emotions" className="dropdown" id="dropdown-button">
                <div className="dropdown-name">Resources for Each Emotion</div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown">
                <Dropdown.Item>
                  {/* <NavLink aria-label="Anger" to="" className="nav-link" id="nav-li" activeClassName={"activeLink"}>     MUST ADD PATH TO ANGER PAGE*/}
                    <img className="dropdown-image" src={anger} alt="anger" />
                    <p className="dropdown-text">Anger</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/* <NavLink aria-label="Stress" to="" className="nav-link" id="nav-li" activeClassName={"activeLink"}>    MUST ADD PATH TO STRESS PAGE*/}
                    <img className="dropdown-image" src={stress} alt="stress" />
                    <p className="dropdown-text">Stress</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/*<NavLink aria-label="Fear" to="" className="nav-link" id="nav-li" activeClassName={"activeLink"}> MUST ADD PATH TO FEAR PAGE */}
                    <img className="dropdown-image" src={fear} alt="fear" />
                    <p className="dropdown-text">Fear</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/*<NavLink aria-label="Happy" to="" className="nav-link" id="nav-li" activeClassName={"activeLink"}> MUST ADD PATH TO HAPPY PAGE*/}
                    <img className="dropdown-image" src={happy} alt="happy" />
                    <p className="dropdown-text">Happy</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/*<NavLink aria-label="Sadness" to="" className="nav-link" id="nav-li" activeClassName={"activeLink"}>*/}
                    <img className="dropdown-image" src={sadness} alt="sadness" />
                    <p className="dropdown-text">Sadness</p>
                  </NavLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;