import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="msapplication-TileColor" content="#5B21B6" />
          <meta name="theme-color" content="#5B21B6" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
          <link rel="icon" href="./gemar.png"></link>
          <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js"></script>
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
     <title>Gemar Kode Developer</title>
        </Head>
        <body className="bg-white">
          <nav className="navbar bg-white navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#home">
                <img src="../ccc.png" width="50%" alt="" />
              </a>
              <button className="navbar-toggler border-white" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-align-right"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto p-3">
                  <li className="nav-item active">
                    <a className="nav-link" href="#home">Home</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#overview">Overview</a>
                  </li>

                  <li className="nav-item active">
                    <a className="nav-link" href="#about">About</a>
                  </li>

                  <li className="nav-item active">
                    <a className="nav-link" href="#community">Community</a>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
          <Main />
          <NextScript />
          <footer className="bg-light">
            <div className="container  text-center py-5 ">

              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <p className="copyright text-muted mt-3 col-lg-11 mx-auto">@2020 <i className="fa fa-code text-primary mt-3"></i> BY Gemar.dev</p>
                  <p className="copyright text-muted mt-3 col-lg-11 mx-auto">Kabupaten Pemalang <i className="fa fa-heart text-danger"></i> Indonesia</p>


                </div>
              </div>
            </div>
          </footer>
  
        </body>
      </Html>
    )
  }
}

export default MyDocument
