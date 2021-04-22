
import React from 'react'


export default function Home() {
  return (
    <>
      <div className="bg-white py-5 mt-3 mb-3" id="home">
        <div className="container py-5">
          <div className="row align-items-center mb-5" >
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className="font-weight-light">Gemar Kode Developer</h2>
              <p className="font-italic text-muted mb-4">Selamat datang di zona coding Gemar Kode. Sebuah komunitas yang dibentuk oleh sekumpulan remaja penggiat teknologi di Indonesia.</p>
              <a href="#overview" className="btn btn-dark px-5 rounded-pill shadow-sm">Selengkapnya</a>
            </div>
            <div className="col-lg-6 text-right px-6 mx-auto order-1 order-lg-2"><img src="../animasi.svg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
          </div>

        </div>
      </div>
      <section id="overview">
      <div className="bg-light py-5">
        <div className="col-lg-5 mx-auto py-5">
          <h1 className="text-dark fontone mt-4 text-center">GEMAR KODE FOR EVERYONE</h1>
          <p className="fontwo text-muted text-center">Kami memiliki anggota dan pengikut yang tersebar di berbagai kota di Indonesia.</p>

        </div>
        <div className="row py-5 col-lg-10 mx-auto">

          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="card rounded border-0 bg-white">
              <div className="card-body p-5 text-center">
                <h1 className="text-danger">64</h1>
                <h5>Anggota</h5>

              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="card rounded border-0 bg-white">
              <div className="card-body p-5 text-center">
                <h1 className="text-primary">318</h1>
                <h5>Pengikut</h5>

              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="card rounded border-0 bg-white">
              <div className="card-body p-5 text-center">
                <h1 className="text-warning">8</h1>
                <h5>Developer Aktif</h5>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
      <div className="bg-white py-5" id="about">
        <div className="container py-5">

          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto"><img src="../01.svg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
            <div className="col-lg-6">
              <h2 className="font-weight-light">LEARN TO CODE</h2>
              <p className="font-italic text-muted">Gemar Kode dibangun untuk menjadi wadah diskusi dan berbagi pengetahuan bagi para remaja penggiat teknologi, khususnya di bidang pemrograman. Gemar Kode menciptakan ekosistem programmer yang suka membangun dan mengembangkan project open source.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark py-5" id="community">
        <div className="col-lg-5 mx-auto mt-5">
          <h1 className="text-white fontone mt-4 text-center">KOMUNITAS GEMAR KODE</h1>
          <p className="fontwo text-muted text-center">Bergabung dan menjadi bagian dari komunitas Gemar Kode. mulailah buat sesuatu yang berguna untuk banyak orang.</p>

        </div>
        <div className="row py-5 col-lg-6 mx-auto">

          <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
            <div className="card rounded border-0 bg-white">
              <a href="https://web.facebook.com/gemarkode/">
                <div className="card-body p-5 text-center"><i className="fab fa-facebook fa-3x  mb-3 text-primary"></i>
                  <h5 className="text-dark">Facebook</h5>
                  <p className="small text-muted font-italic">Gemar Kode</p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
            <div className="card rounded border-0 bg-white">
              <a href="https://web.github.com/gemarkode/">
                <div className="card-body p-5 text-center"><i className="fab fa-github fa-3x  mb-3 text-dark"></i>
                  <h5 className="text-dark">Github</h5>
                  <p className="small text-muted font-italic">@gemarkode</p>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}
