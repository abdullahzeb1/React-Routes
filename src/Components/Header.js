import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      {/* Header start */}
      <header id='header' className='header-one'>
        <div className='bg-white'>
          <div className='container'>
            <div className='logo-area'>
              <div className='row align-items-center'>
                <div className='logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0'>
                  <a className='d-block' href='index.html'>
                    <img loading='lazy' src='images/logo.png' alt='Constra' />
                  </a>
                </div>
                {/* logo end */}
                <div className='col-lg-9 header-right'>
                  <ul className='top-info-box'>
                    <li>
                      <div className='info-box'>
                        <div className='info-box-content'>
                          <p className='info-box-title'>Call Us</p>
                          <p className='info-box-subtitle'>
                            <a href='tel:(+9) 847-291-4353'>
                              (+9) 847-291-4353
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='info-box'>
                        <div className='info-box-content'>
                          <p className='info-box-title'>Email Us</p>
                          <p className='info-box-subtitle'>
                            <a href='mailto:office@Constra.com'>
                              office@Constra.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className='last'>
                      <div className='info-box last'>
                        <div className='info-box-content'>
                          <p className='info-box-title'>Global Certificate</p>
                          <p className='info-box-subtitle'>ISO 9001:2017</p>
                        </div>
                      </div>
                    </li>
                    <li className='header-get-a-quote'>
                      <a className='btn btn-primary' href='contact.html'>
                        Get A Quote
                      </a>
                    </li>
                  </ul>
                  {/* Ul end */}
                </div>
                {/* header right end */}
              </div>
              {/* logo area end */}
            </div>
            {/* Row end */}
          </div>
          {/* Container end */}
        </div>
        <div className='site-navigation'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <nav className='navbar navbar-expand-lg navbar-dark p-0'>
                  <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='.navbar-collapse'
                    aria-controls='navbar-collapse'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                  >
                    <span className='navbar-toggler-icon' />
                  </button>
                  <div
                    id='navbar-collapse'
                    className='collapse navbar-collapse'
                  >
                    <ul className='nav navbar-nav mr-auto'>
                      <li className='nav-item dropdown active'>
                        <Link
                          to='/'
                          className='nav-link dropdown-toggle'
                          data-toggle='dropdown'
                        >
                          Home
                        </Link>
                        {/* <ul className='dropdown-menu' role='menu'>
                          <li className='active'>
                            <Link to='/'>Home One</Link>
                          </li>
                          <li>
                            <Link to='/Header2'>Home Two</Link>
                          </li>
                        </ul> */}
                      </li>
                      <li className='nav-item dropdown'>
                        <a
                          href='/'
                          className='nav-link dropdown-toggle'
                          data-toggle='dropdown'
                        >
                          Company <i className='fa fa-angle-down' />
                        </a>
                        <ul className='dropdown-menu' role='menu'>
                          <li>
                            <Link to='/about'>About Us</Link>
                          </li>
                          <li>
                            <Link to='ourpeople'>Our People</Link>
                          </li>
                          <li>
                            <Link to='/testimonials'>Testimonials</Link>
                          </li>
                          <li>
                            <Link to='/faq'>Faq</Link>
                          </li>
                          <li>
                            <Link to='/pricing'>Pricing</Link>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item dropdown'>
                        <a
                          href='/'
                          className='nav-link dropdown-toggle'
                          data-toggle='dropdown'
                        >
                          Projects <i className='fa fa-angle-down' />
                        </a>
                        <ul className='dropdown-menu' role='menu'>
                          <li>
                            <Link to='/projects-all'>Projects All</Link>
                          </li>
                          <li>
                            <Link to='/projects-single'>Projects Single</Link>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item dropdown'>
                        <a
                          href='/'
                          className='nav-link dropdown-toggle'
                          data-toggle='dropdown'
                        >
                          Services <i className='fa fa-angle-down' />
                        </a>
                        <ul className='dropdown-menu' role='menu'>
                          <li>
                            <Link to='/services'>Services All</Link>
                          </li>
                          <li>
                            <Link to='/service-single'>Services Single</Link>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item dropdown'>
                        <a
                          href='/'
                          className='nav-link dropdown-toggle'
                          data-toggle='dropdown'
                        >
                          Features <i className='fa fa-angle-down' />
                        </a>
                        <ul className='dropdown-menu' role='menu'>
                          <li>
                            <Link to='/typography'>Typography</Link>
                          </li>
                          <li>
                            <Link to='/f404'>404</Link>
                          </li>
                          <li className='dropdown-submenu'>
                            <a
                              href='#!'
                              className='dropdown-toggle'
                              data-toggle='dropdown'
                            >
                              News
                            </a>
                            <ul className='dropdown-menu'>
                              <li>
                                <Link to='news-left-sidebar'>
                                  News Left Sidebar
                                </Link>
                              </li>
                              <li>
                                <Link to='news-right-sidebar'>
                                  News Right Sidebar
                                </Link>
                              </li>
                              <li>
                                <Link to='news-single'>News Single</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item'>
                        <Link className='nav-link' to='/contact'>
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/*/ Col end */}
            </div>
            {/*/ Row end */}
            <div className='nav-search'>
              <span id='search'>
                <i className='fa fa-search' />
              </span>
            </div>
            {/* Search end */}
            <div className='search-block' style={{ display: 'none' }}>
              <label htmlFor='search-field' className='w-100 mb-0'>
                <input
                  type='text'
                  className='form-control'
                  id='search-field'
                  placeholder='Type what you want and enter'
                />
              </label>
              <span className='search-close'>??</span>
            </div>
            {/* Site search end */}
          </div>
          {/*/ Container end */}
        </div>
        {/*/ Navigation end */}
      </header>
      {/*/ Header end */}
    </div>
  );
}

export default Header;
