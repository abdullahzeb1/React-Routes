import React from 'react';

function Header2() {
  return (
    <div>
      <header id='header' className='header-two'>
        <div className='site-navigation'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <nav className='navbar navbar-expand-lg navbar-light p-0'>
                  <div className='logo'>
                    <a className='d-block' href='index-2.html'>
                      <img loading='lazy' src='images/logo.png' alt='Constra' />
                    </a>
                  </div>
                  {/* logo end */}
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
                    <ul className='nav navbar-nav ml-auto align-items-center'>
                      <li className='nav-item dropdown active'>
                        <a
                          href='#'
                          className='nav-link dropdown-toggle'
                          data-toggle='dropdown'
                        >
                          Home <i className='fa fa-angle-down' />
                        </a>
                        <ul className='dropdown-menu' role='menu'>
                          <li>
                            <a href='index.html'>Home One</a>
                          </li>
                          <li className='active'>
                            <a href='index-2.html'>Home Two</a>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item dropdown'>
                        <a
                          href='#'
                          className='nav-link dropdown-toggle'
                          data-toggle='dropdown'
                        >
                          Company <i className='fa fa-angle-down' />
                        </a>
                        <ul className='dropdown-menu' role='menu'>
                          <li>
                            <a href='about.html'>About Us</a>
                          </li>
                          <li>
                            <a href='team.html'>Our People</a>
                          </li>
                          <li>
                            <a href='testimonials.html'>Testimonials</a>
                          </li>
                          <li>
                            <a href='faq.html'>Faq</a>
                          </li>
                          <li>
                            <a href='pricing.html'>Pricing</a>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item dropdown'>
                        <a
                          href='#'
                          className='nav-link dropdown-toggle'
                          data-toggle='dropdown'
                        >
                          Projects <i className='fa fa-angle-down' />
                        </a>
                        <ul className='dropdown-menu' role='menu'>
                          <li>
                            <a href='projects.html'>Projects All</a>
                          </li>
                          <li>
                            <a href='projects-single.html'>Projects Single</a>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item dropdown'>
                        <a
                          href='#'
                          className='nav-link dropdown-toggle'
                          data-toggle='dropdown'
                        >
                          Services <i className='fa fa-angle-down' />
                        </a>
                        <ul className='dropdown-menu' role='menu'>
                          <li>
                            <a href='services.html'>Services All</a>
                          </li>
                          <li>
                            <a href='service-single.html'>Services Single</a>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item dropdown'>
                        <a
                          href='#'
                          className='nav-link dropdown-toggle'
                          data-toggle='dropdown'
                        >
                          Features <i className='fa fa-angle-down' />
                        </a>
                        <ul className='dropdown-menu' role='menu'>
                          <li>
                            <a href='typography.html'>Typography</a>
                          </li>
                          <li>
                            <a href='404.html'>404</a>
                          </li>
                          <li className='dropdown-submenu'>
                            <a
                              href='#!'
                              className='dropdown-toggle'
                              data-toggle='dropdown'
                            >
                              Parent Menu
                            </a>
                            <ul className='dropdown-menu'>
                              <li>
                                <a href='#!'>Child Menu 1</a>
                              </li>
                              <li>
                                <a href='#!'>Child Menu 2</a>
                              </li>
                              <li>
                                <a href='#!'>Child Menu 3</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item dropdown'>
                        <a
                          href='#'
                          className='nav-link dropdown-toggle'
                          data-toggle='dropdown'
                        >
                          News <i className='fa fa-angle-down' />
                        </a>
                        <ul className='dropdown-menu' role='menu'>
                          <li>
                            <a href='news-left-sidebar.html'>
                              News Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href='news-right-sidebar.html'>
                              News Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href='news-single.html'>News Single</a>
                          </li>
                        </ul>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='contact.html'>
                          Contact
                        </a>
                      </li>
                      <li className='header-get-a-quote'>
                        <a className='btn btn-primary' href='contact.html'>
                          Get Free Quote
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/*/ Col end */}
            </div>
            {/*/ Row end */}
          </div>
          {/*/ Container end */}
        </div>
        {/*/ Navigation end */}
      </header>
      {/*/ Header end */}
    </div>
  );
}

export default Header2;
