import React from 'react';

function Faq() {
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
                  <h1 className='banner-title'>Faq</h1>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb justify-content-center'>
                      <li className='breadcrumb-item'>
                        <a href='/'>Home</a>
                      </li>
                      <li className='breadcrumb-item'>
                        <a href='/'>company</a>
                      </li>
                      <li
                        className='breadcrumb-item active'
                        aria-current='page'
                      >
                        Faq
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
              <h3 className='border-title border-left mar-t0'>
                Construction general
              </h3>
              <div
                className='accordion accordion-group accordion-classic'
                id='construction-accordion'
              >
                <div className='card'>
                  <div
                    className='card-header p-0 bg-transparent'
                    id='headingOne'
                  >
                    <h2 className='mb-0'>
                      <button
                        className='btn btn-block text-left'
                        type='button'
                        data-toggle='collapse'
                        data-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                      >
                        Does the law require head protection on construction
                        sites?
                      </button>
                    </h2>
                  </div>
                  <div
                    id='collapseOne'
                    className='collapse show'
                    aria-labelledby='headingOne'
                    data-parent='#construction-accordion'
                  >
                    <div className='card-body'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidata
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    className='card-header p-0 bg-transparent'
                    id='headingTwo'
                  >
                    <h2 className='mb-0'>
                      <button
                        className='btn btn-block text-left collapsed'
                        type='button'
                        data-toggle='collapse'
                        data-target='#collapseTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                      >
                        What are the first aid requirements for sites?
                      </button>
                    </h2>
                  </div>
                  <div
                    id='collapseTwo'
                    className='collapse'
                    aria-labelledby='headingTwo'
                    data-parent='#construction-accordion'
                  >
                    <div className='card-body'>
                      Anemi nim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea com modo consequat. Duis
                      aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupid henderit in voluptate velit esse cillu oris
                      nisi ut aliquip ex ea com matat.
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    className='card-header p-0 bg-transparent'
                    id='headingThree'
                  >
                    <h2 className='mb-0'>
                      <button
                        className='btn btn-block text-left collapsed'
                        type='button'
                        data-toggle='collapse'
                        data-target='#collapseThree'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                      >
                        What is an appointed person?
                      </button>
                    </h2>
                  </div>
                  <div
                    id='collapseThree'
                    className='collapse'
                    aria-labelledby='headingThree'
                    data-parent='#construction-accordion'
                  >
                    <div className='card-body'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Accordion end */}
              <div className='gap-40' />
              <h3 className='border-title border-left'>Safety</h3>
              <div
                className='accordion accordion-group accordion-classic'
                id='safety-accordion'
              >
                <div className='card'>
                  <div
                    className='card-header p-0 bg-transparent'
                    id='headingFour'
                  >
                    <h2 className='mb-0'>
                      <button
                        className='btn btn-block text-left'
                        type='button'
                        data-toggle='collapse'
                        data-target='#collapseFour'
                        aria-expanded='true'
                        aria-controls='collapseFour'
                      >
                        Mauris rhoncus pretium porttitor cras scelerisque
                        commodo odio ?
                      </button>
                    </h2>
                  </div>
                  <div
                    id='collapseFour'
                    className='collapse show'
                    aria-labelledby='headingFour'
                    data-parent='#safety-accordion'
                  >
                    <div className='card-body'>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidata
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    className='card-header p-0 bg-transparent'
                    id='headingFive'
                  >
                    <h2 className='mb-0'>
                      <button
                        className='btn btn-block text-left collapsed'
                        type='button'
                        data-toggle='collapse'
                        data-target='#collapseFive'
                        aria-expanded='false'
                        aria-controls='collapseFive'
                      >
                        What are the first aid requirements for sites?
                      </button>
                    </h2>
                  </div>
                  <div
                    id='collapseFive'
                    className='collapse'
                    aria-labelledby='headingFive'
                    data-parent='#safety-accordion'
                  >
                    <div className='card-body'>
                      Anemi nim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea com modo consequat. Duis
                      aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupid henderit in voluptate velit esse cillu oris
                      nisi ut aliquip ex ea com matat.
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    className='card-header p-0 bg-transparent'
                    id='headingSix'
                  >
                    <h2 className='mb-0'>
                      <button
                        className='btn btn-block text-left collapsed'
                        type='button'
                        data-toggle='collapse'
                        data-target='#collapseSix'
                        aria-expanded='false'
                        aria-controls='collapseSix'
                      >
                        What is an appointed person?
                      </button>
                    </h2>
                  </div>
                  <div
                    id='collapseSix'
                    className='collapse'
                    aria-labelledby='headingSix'
                    data-parent='#safety-accordion'
                  >
                    <div className='card-body'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry’s
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Accordion end */}
            </div>
            {/* Col end */}
            <div className='col-lg-4 mt-5 mt-lg-0'>
              <div className='sidebar sidebar-right'>
                <div className='widget recent-posts'>
                  <h3 className='widget-title'>Recent Posts</h3>
                  <ul className='list-unstyled'>
                    <li className='d-flex align-items-center'>
                      <div className='posts-thumb'>
                        <a href='/'>
                          <img
                            loading='lazy'
                            alt='news-image'
                            src='images/news/news1.jpg'
                          />
                        </a>
                      </div>
                      <div className='post-info'>
                        <h4 className='entry-title'>
                          <a href='/'>
                            We Just Completes $17.6 Million Medical Clinic In
                            Mid-missouri
                          </a>
                        </h4>
                      </div>
                    </li>
                    {/* 1st post end*/}
                    <li className='d-flex align-items-center'>
                      <div className='posts-thumb'>
                        <a href='/'>
                          <img
                            loading='lazy'
                            alt='news-img'
                            src='images/news/news2.jpg'
                          />
                        </a>
                      </div>
                      <div className='post-info'>
                        <h4 className='entry-title'>
                          <a href='/'>
                            Thandler Airport Water Reclamation Facility
                            Expansion Project Named
                          </a>
                        </h4>
                      </div>
                    </li>
                    {/* 2nd post end*/}
                    <li className='d-flex align-items-center'>
                      <div className='posts-thumb'>
                        <a href='/'>
                          <img
                            loading='lazy'
                            alt='news-img'
                            src='images/news/news3.jpg'
                          />
                        </a>
                      </div>
                      <div className='post-info'>
                        <h4 className='entry-title'>
                          <a href='/'>
                            Silicon Bench And Cornike Begin Construction Solar
                            Facilities
                          </a>
                        </h4>
                      </div>
                    </li>
                    {/* 3rd post end*/}
                  </ul>
                </div>
                {/* Recent post end */}
              </div>
              {/* Sidebar end */}
            </div>
            {/* Col end */}
          </div>
          {/* Content row end */}
        </div>
        {/* Container end */}
      </section>
    </div>
  );
}

export default Faq;
