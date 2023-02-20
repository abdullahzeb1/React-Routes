import React from 'react';

function Typography() {
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
                  <h1 className='banner-title'>Typography</h1>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb justify-content-center'>
                      <li className='breadcrumb-item'>
                        <a href='/'>Home</a>
                      </li>
                      <li className='breadcrumb-item'>
                        <a href='/'>Features</a>
                      </li>
                      <li
                        className='breadcrumb-item active'
                        aria-current='page'
                      >
                        Typography
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
            <div className='col-lg-6'>
              <h3 className='column-title'>Heading</h3>
              <h1>h1. Heading 1</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly.
              </p>
              <h2>h2. Heading 2</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even.
              </p>
              <h3>h3. Heading 3</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look.
              </p>
              <h4>h4. Heading 4</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t.
              </p>
              <h5>h5. Heading 5</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which.
              </p>
              <h6>h6. Heading 6</h6>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words.
              </p>
            </div>
            {/*/ Col end */}
            <div className='col-lg-6'>
              <h3 className='column-title'>Paragraph</h3>
              <p>
                Lorem ipsum dolor sit amet, <mark>a mark here</mark> adipisicing
                elit. Atque, iusto, minus sequi natus nesciunt rerum tenetur
                corrupti autem officiis fugiat expedita laudantium ea aspernatur
              </p>
              <p>
                <strong className='text-success'>
                  Consectetur adipisicing elit
                </strong>
                . Corrupti, aliquam, voluptates, nulla, blanditiis totam
                voluptatem{' '}
                <strong className='text-danger'>
                  voluptatum quod ipsa debitis non
                </strong>{' '}
                ab odio natus.
              </p>
              <div className='gap-20' />
              <h3 className='column-title'>Blockquote</h3>
              <blockquote className='blockquote'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante quam est corrupti ut blanditiis
                  sint aperiam placeatab.
                </p>
                <footer className='blockquote-footer'>
                  Someone famous in{' '}
                  <cite title='Source Title'>Source Title</cite>
                </footer>
              </blockquote>
              <blockquote className='blockquote text-center'>
                <p>
                  Consectetur adipiscing elit. Integer posuere erat a ante quam
                  est corrupti ut blanditiis sint aperiam placeat minima rerum
                  ab.
                </p>
                <footer className='blockquote-footer'>
                  Someone famous in{' '}
                  <cite title='Source Title'>Source Title</cite>
                </footer>
              </blockquote>
              <blockquote className='blockquote text-right'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante quam est corrupti ut blanditiis
                  sint aperiam placeatab.
                </p>
                <footer className='blockquote-footer'>
                  Someone famous in{' '}
                  <cite title='Source Title'>Source Title</cite>
                </footer>
              </blockquote>
            </div>
            {/*/ Col end */}
          </div>
          {/* Content row 1 */}
          <div className='gap-20' />
          <div className='row'>
            <div className='col-md-12'>
              <h3 className='column-title'>Alerts</h3>
              <div
                className='alert alert-success alert-dismissible fade show'
                role='alert'
              >
                <strong>Holy guacamole!</strong> You should check in on some of
                those fields below.
                <button
                  type='button'
                  className='close'
                  data-dismiss='alert'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
              <div
                className='alert alert-warning alert-dismissible fade show'
                role='alert'
              >
                <strong>Holy guacamole!</strong> You should check in on some of
                those fields below.
                <button
                  type='button'
                  className='close'
                  data-dismiss='alert'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
              <div className='alert alert-danger' role='alert'>
                <h4 className='alert-heading'>A simple danger alert!</h4>
                <p>
                  Aww yeah, you successfully read this important alert message.
                  This example text is going to run a bit longer so that you can
                  see how spacing within an alert works with this kind of
                  content.
                </p>
                <hr />
                <p className='mb-0'>
                  Whenever you need to, be sure to use margin utilities to keep
                  things nice and tidy.
                </p>
              </div>
            </div>
            {/* Col end */}
          </div>
          {/* Content row 2 */}
        </div>
        {/* Container end */}
      </section>
    </div>
  );
}

export default Typography;
