import React from 'react';

function ProjectsSingle() {
  return (
    <div>
      <div
        id='banner-area'
        className='banner-area'
        style={{ backgroundImage: 'url(images/banner/banner1.jpg)' }}
      >
        <div className='banner-text'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='banner-heading'>
                  <h1 className='banner-title'>Project</h1>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb justify-content-center'>
                      <li className='breadcrumb-item'>
                        <a href='/'>Home</a>
                      </li>
                      <li className='breadcrumb-item'>
                        <a href='/'>Project</a>
                      </li>
                      <li
                        className='breadcrumb-item active'
                        aria-current='page'
                      >
                        Projects Single
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              {/* Col end */}
            </div>
            {/* Row end */}
          </div>
          {/* Container end */}
        </div>
        {/* Banner text end */}
      </div>
      {/* Banner area end */}
      <section id='main-container' className='main-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div id='page-slider' className='page-slider small-bg'>
                <div className='item'>
                  <img
                    loading='lazy'
                    className='img-fluid'
                    src='images/projects/project5.jpg'
                    alt='project-image'
                  />
                </div>
                <div className='item'>
                  <img
                    loading='lazy'
                    className='img-fluid'
                    src='images/projects/project4.jpg'
                    alt='project-image'
                  />
                </div>
              </div>
              {/* Page slider end */}
            </div>
            {/* Slider col end */}
            <div className='col-lg-4 mt-5 mt-lg-0'>
              <h3 className='column-title mrt-0'>Capital Teltway Building</h3>
              <p>
                Morbi turpis nisl, auctor ut nisl vel, pellentesque euismod nunc
                nunc accumsan imperdiet.
              </p>
              <ul className='project-info list-unstyled'>
                <li>
                  <p className='project-info-label'>Client</p>
                  <p className='project-info-content'>
                    Pransbay Powers Authority
                  </p>
                </li>
                <li>
                  <p className='project-info-label'>Architect</p>
                  <p className='project-info-content'>Dlarke Pelli Incorp</p>
                </li>
                <li>
                  <p className='project-info-label'>Location</p>
                  <p className='project-info-content'>McLean, VA</p>
                </li>
                <li>
                  <p className='project-info-label'>Size</p>
                  <p className='project-info-content'>65,000 SF</p>
                </li>
                <li>
                  <p className='project-info-label'>Year Completed</p>
                  <p className='project-info-content'>2015</p>
                </li>
                <li>
                  <p className='project-info-label'>Categories</p>
                  <p className='project-info-content'>Commercial, Interiors</p>
                </li>
                <li>
                  <p className='project-link'>
                    <a className='btn btn-primary' target='_blank' href='/'>
                      View Project
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            {/* Content col end */}
          </div>
          {/* Row end */}
        </div>
        {/* Conatiner end */}
      </section>
    </div>
  );
}

export default ProjectsSingle;
