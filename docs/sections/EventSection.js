import SectionTitle from "../components/SectionTitle";

export default function EventSection({ marriageDate, venueName, venueAddress }) {
  return (
      <section className="container-fluid event">
          <div className="d-flex vh-100 align-items-center justify-content-center">
              <div className="w-100 h-80">
                  <div className="row justify-content-center">
                      <SectionTitle text='Rangkaian Acara' />
                      <div className="col-10 col-md-6 border border-4 border-white bg-color-secondary rounded-box">
                          <div className="row justify-content-center">
                              <div className="col-12 col-md-8">
                                  <p className="text-center typography-6 text-dark">
                                      Acara diadakan pada :
                                  </p>
                              </div>
                          </div>
                          <div className="row justify-content-center">
                              <div className="col-12 col-md-12">
                                  <h4 className="text-center typography-2 text-medium-large color-primary">{`${marriageDate ?? 'Sabtu, 5 Jan 2025'}`}</h4>
                              </div>
                          </div>
                          <div className="row justify-content-center">
                              <div className="col-12 col-md-12">
                                  <p className="text-center typography-6 text-dark">
                                      di {`${venueName ?? 'Hotel & Convention'}`}<br />
                                      {`${venueAddress ?? 'Jl. Hotel, Jakarta 12420'}`}<br />
                                      Ballroom 1
                                  </p>
                              </div>
                          </div>                 
                          <div className="row justify-content-center">
                              <div className="col-10 col-md-6" id="akadNikah">
                                  <h4 className="text-center typography-2 text-medium-large color-primary">Akad Nikah</h4>
                                  <p className="text-center typography-6 text-dark">
                                      pukul 08:00 - 10:00 WIB<br />
                                  </p>
                              </div>
                              <div className="col-10 col-md-6" id="resepsi">
                                  <h4 className="text-center typography-2 text-medium-large color-primary">Resepsi</h4>
                                  <p className="text-center typography-6 text-dark">
                                      pukul 11:00 - 13:00 WIB<br />
                                  </p>
                              </div>
                              <div className="col-10 col-md-6" id="resepsiSesi1">
                                  <h4 className="text-center typography-2 text-medium-large color-primary">Resepsi</h4>
                                  <p className="text-center typography-6 text-dark">
                                      pukul 11:00 - 12:00 WIB<br />
                                  </p>
                              </div>
                              <div className="col-10 col-md-6" id="resepsiSesi2">
                                  <h4 className="text-center typography-2 text-medium-large color-primary">Resepsi</h4>
                                  <p className="text-center typography-6 text-dark">
                                      pukul 12:00 - 13:00 WIB<br />
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row justify-content-center margin-top-2">
                      <div className="col-10 col-md-6">
                          <p className="text-center typography-6 text-dark">
                              Mempertimbangkan Protokol Kesehatan, acara Akad Nikah hanya dapat dihadiri oleh undangan terbatas.
                          </p>
                      </div>    
                  </div>
              </div>
          </div>
      </section>
  );
}