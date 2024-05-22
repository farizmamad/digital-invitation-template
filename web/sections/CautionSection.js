import SectionTitle from "../components/SectionTitle";

export default function CautionSection() {
  return (
      <section className="container-fluid caution">
          <div className="d-flex flex-column vh-100 align-items-center justify-content-center">
              <div className="h-80">
                  <div className="row justify-content-center">
                      <div className="col-10 col-md-6">
                          <SectionTitle text='Health Protocols' />
                          <p className="text-center typography-6 text-dark">Guna mencegah penyebaran COVID-19, diharapkan bagi tamu undangan untuk mematuhi protokol kesehatan berikut ini:</p>
                          <img src="./images/prokes.png" className="img-fluid" alt="..." />
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}