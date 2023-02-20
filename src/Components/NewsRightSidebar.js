import React from 'react';

function NewsRightSidebar() {
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
                  <h1 className='banner-title'>News</h1>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb justify-content-center'>
                      <li className='breadcrumb-item'>
                        <a href='/'>Home</a>
                      </li>
                      <li className='breadcrumb-item'>
                        <a href='/'>News</a>
                      </li>
                      <li
                        className='breadcrumb-item active'
                        aria-current='page'
                      >
                        News Right sidebar
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
            <div className='col-lg-8 mb-5 mb-lg-0'>
              <div className='post'>
                <div className='post-media post-image'>
                  <img
                    loading='lazy'
                    src='images/news/news1.jpg'
                    className='img-fluid'
                    alt='post-image'
                  />
                </div>
                <div className='post-body'>
                  <div className='entry-header'>
                    <div className='post-meta'>
                      <span className='post-author'>
                        <i className='far fa-user' />
                        <a href='/'> Admin</a>
                      </span>
                      <span className='post-cat'>
                        <i className='far fa-folder-open' />
                        <a href='/'> News</a>
                      </span>
                      <span className='post-meta-date'>
                        <i className='far fa-calendar' /> June 14, 2016
                      </span>
                      <span className='post-comment'>
                        <i className='far fa-comment' /> 03
                        <a href='/' className='comments-link'>
                          Comments
                        </a>
                      </span>
                    </div>
                    <h2 className='entry-title'>
                      <a href='news-single.html'>
                        We Just Completes $17.6 million Medical Clinic in
                        Mid-Missouri
                      </a>
                    </h2>
                  </div>
                  {/* header end */}
                  <div className='entry-content'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur ...
                    </p>
                  </div>
                  <div className='post-footer'>
                    <a href='news-single.html' className='btn btn-primary'>
                      Continue Reading
                    </a>
                  </div>
                </div>
                {/* post-body end */}
              </div>
              {/* 1st post end */}
              <div className='post'>
                <div className='post-media post-video'>
                  <div className='embed-responsive embed-responsive-16by9'>
                    {/* Change the url */}
                    <iframe
                      className='embed-responsive-item'
                      src='//player.vimeo.com/video/153089270?title=0&byline=0&portrait=0&color=8aba56'
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className='post-body'>
                  <div className='entry-header'>
                    <div className='post-meta'>
                      <span className='post-author'>
                        <i className='far fa-user' />
                        <a href='/'> Admin</a>
                      </span>
                      <span className='post-cat'>
                        <i className='far fa-folder-open' />
                        <a href='/'> News</a>
                      </span>
                      <span className='post-meta-date'>
                        <i className='far fa-calendar' /> June 14, 2016
                      </span>
                      <span className='post-comment'>
                        <i className='far fa-comment' /> 03
                        <a href='/' className='comments-link'>
                          Comments
                        </a>
                      </span>
                    </div>
                    <h2 className='entry-title'>
                      <a href='news-single.html'>
                        Thandler Airport Water Reclamation Facility Expansion
                        Project Named
                      </a>
                    </h2>
                  </div>
                  {/* header end */}
                  <div className='entry-content'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur ...
                    </p>
                  </div>
                  <div className='post-footer'>
                    <a href='news-single.html' className='btn btn-primary'>
                      Continue Reading
                    </a>
                  </div>
                </div>
                {/* post-body end */}
              </div>
              {/* 2nd post end */}
              <div className='post'>
                <div className='post-media post-image'>
                  <img
                    loading='lazy'
                    src='images/news/news3.jpg'
                    className='img-fluid'
                    alt='post-image'
                  />
                </div>
                <div className='post-body'>
                  <div className='entry-header'>
                    <div className='post-meta'>
                      <span className='post-author'>
                        <i className='far fa-user' />
                        <a href='/'> Admin</a>
                      </span>
                      <span className='post-cat'>
                        <i className='far fa-folder-open' />
                        <a href='/'> News</a>
                      </span>
                      <span className='post-meta-date'>
                        <i className='far fa-calendar' /> June 14, 2016
                      </span>
                      <span className='post-comment'>
                        <i className='far fa-comment' /> 03
                        <a href='/' className='comments-link'>
                          Comments
                        </a>
                      </span>
                    </div>
                    <h2 className='entry-title'>
                      <a href='news-single.html'>
                        Silicon Bench and Cornike Begin Construction of
                        Large-Scale Solar Facilities for Trade
                      </a>
                    </h2>
                  </div>
                  {/* header end */}
                  <div className='entry-content'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur ...
                    </p>
                  </div>
                  <div className='post-footer'>
                    <a href='news-single.html' className='btn btn-primary'>
                      Continue Reading
                    </a>
                  </div>
                </div>
                {/* post-body end */}
              </div>
              {/* 3rd post end */}
              <nav className='paging' aria-label='Page navigation example'>
                <ul className='pagination'>
                  <li className='page-item'>
                    <a className='page-link' href='/'>
                      <i className='fas fa-angle-double-left' />
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='/'>
                      1
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='/'>
                      2
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='/'>
                      3
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='/'>
                      <i className='fas fa-angle-double-right' />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Content Col end */}
            <div className='col-lg-4'>
              <div className='sidebar sidebar-right'>
                <div className='widget recent-posts'>
                  <h3 className='widget-title'>Recent Posts</h3>
                  <ul className='list-unstyled'>
                    <li className='d-flex align-items-center'>
                      <div className='posts-thumb'>
                        <a href='/'>
                          <img
                            loading='lazy'
                            alt='img'
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
                            alt='img'
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
                            alt='img'
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
                <div className='widget'>
                  <h3 className='widget-title'>Categories</h3>
                  <ul className='arrow nav nav-tabs'>
                    <li>
                      <a href='/'>Construction</a>
                    </li>
                    <li>
                      <a href='/'>Commercial</a>
                    </li>
                    <li>
                      <a href='/'>Building</a>
                    </li>
                    <li>
                      <a href='/'>Safety</a>
                    </li>
                    <li>
                      <a href='/'>Structure</a>
                    </li>
                  </ul>
                </div>
                {/* Categories end */}
                <div className='widget'>
                  <h3 className='widget-title'>Archives </h3>
                  <ul className='arrow nav nav-tabs'>
                    <li>
                      <a href='/'>Feburay 2016</a>
                    </li>
                    <li>
                      <a href='/'>January 2016</a>
                    </li>
                    <li>
                      <a href='/'>December 2015</a>
                    </li>
                    <li>
                      <a href='/'>November 2015</a>
                    </li>
                    <li>
                      <a href='/'>October 2015</a>
                    </li>
                  </ul>
                </div>
                {/* Archives end */}
                <div className='widget widget-tags'>
                  <h3 className='widget-title'>Tags </h3>
                  <ul className='list-unstyled'>
                    <li>
                      <a href='/'>Construction</a>
                    </li>
                    <li>
                      <a href='/'>Design</a>
                    </li>
                    <li>
                      <a href='/'>Project</a>
                    </li>
                    <li>
                      <a href='/'>Building</a>
                    </li>
                    <li>
                      <a href='/'>Finance</a>
                    </li>
                    <li>
                      <a href='/'>Safety</a>
                    </li>
                    <li>
                      <a href='/'>Contracting</a>
                    </li>
                    <li>
                      <a href='/'>Planning</a>
                    </li>
                  </ul>
                </div>
                {/* Tags end */}
              </div>
              {/* Sidebar end */}
            </div>
            {/* Sidebar Col end */}
          </div>
          {/* Main row end */}
        </div>
        {/* Container end */}
      </section>
    </div>
  );
}

export default NewsRightSidebar;
