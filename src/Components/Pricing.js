import React from 'react';

function Pricing() {
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
                  <h1 className='banner-title'>Pricing</h1>
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
                        Pricing
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
          <div className='row text-center'>
            <div className='col-12'>
              <h2 className='section-title'>Grab the Packages</h2>
              <h3 className='section-sub-title'>Pricing</h3>
            </div>
          </div>
          {/*/ Title row end */}
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='ts-pricing-box'>
                <div className='ts-pricing-header'>
                  <h2 className='ts-pricing-name'>Building Remodels</h2>
                  <h2 className='ts-pricing-price'>
                    <span className='currency'>$</span>
                    <strong>89.9</strong>
                    <small>/Month</small>
                  </h2>
                </div>
                {/* Pricing header */}
                <div className='ts-pricing-features'>
                  <ul className='list-unstyled'>
                    <li>Project Management for Owners</li>
                    <li>Pre-construction feasibility</li>
                    <li>On-site representation</li>
                    <li>Quality control inspections</li>
                    <li>Schedule claim preparation/defense</li>
                    <li>Project phasing development</li>
                  </ul>
                </div>
                {/* Features end */}
                <div className='plan-action'>
                  <a href='/' className='btn btn-dark'>
                    Order Now
                  </a>
                </div>
              </div>
              {/* Plan 1 end */}
            </div>
            {/* Col end */}
            <div className='col-lg-4 col-md-6'>
              <div className='ts-pricing-box ts-pricing-featured'>
                <div className='ts-pricing-header'>
                  <h2 className='ts-pricing-name'>Renovation</h2>
                  <h2 className='ts-pricing-price'>
                    <span className='currency'>$</span>
                    <strong>179.9</strong>
                    <small>/Month</small>
                  </h2>
                </div>
                {/* Pricing header */}
                <div className='ts-pricing-features'>
                  <ul className='list-unstyled'>
                    <li>Project Management for Owners</li>
                    <li>Pre-construction feasibility</li>
                    <li>On-site representation</li>
                    <li>Quality control inspections</li>
                    <li>Schedule claim preparation/defense</li>
                    <li>Project phasing development</li>
                  </ul>
                </div>
                {/* Features end */}
                <div className='plan-action'>
                  <a href='/' className='btn btn-primary'>
                    Order Now
                  </a>
                </div>
              </div>
              {/* Plan 2 end */}
            </div>
            {/* Col end */}
            <div className='col-lg-4 col-md-6'>
              <div className='ts-pricing-box'>
                <div className='ts-pricing-header'>
                  <h2 className='ts-pricing-name'>Home Construction</h2>
                  <h2 className='ts-pricing-price'>
                    <span className='currency'>$</span>
                    <strong>279.9</strong>
                    <small>/Month</small>
                  </h2>
                </div>
                {/* Pricing header */}
                <div className='ts-pricing-features'>
                  <ul className='list-unstyled'>
                    <li>Project Management for Owners</li>
                    <li>Pre-construction feasibility</li>
                    <li>On-site representation</li>
                    <li>Quality control inspections</li>
                    <li>Schedule claim preparation/defense</li>
                    <li>Project phasing development</li>
                  </ul>
                </div>
                {/* Features end */}
                <div className='plan-action'>
                  <a href='/' className='btn btn-dark'>
                    Order Now
                  </a>
                </div>
              </div>
              {/* Plan 3 end */}
            </div>
            {/* Col end */}
          </div>
          {/*/ Content row end */}
        </div>
        {/* Conatiner end */}
      </section>
    </div>
  );
}

export default Pricing;
