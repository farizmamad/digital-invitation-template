export default function BrideGroomSection({ bride, groom }) {
  const { brideSurname, brideDescription, brideFullName } = bride;
  const { groomSurname, groomDescription, groomFullName } = groom;
  return (
      <section className="container-fluid bride-groom">
          <div className="d-flex vh-100 align-items-center justify-content-center">
              <div className="w-100 h-80">
                  <div className="row justify-content-center">
                      <div className="col-10">
                          <p className="text-center typography-6 text-dark">
                              Ya Allah, kami memohon Ridho-Mu untuk pernikahan putra-putri kami :
                          </p>    
                      </div>
                  </div>
                  <div className="row justify-content-center">
                      <div className="col-4 col-md-2 text-center">
                          <div className="row justify-content-start">
                              <img src="./images/bride.jpg" className="rounded img-person" alt="foto mempelai wanita" />  
                          </div>  
                      </div>
                      <div className="col-8 col-md-4 text-center">
                          <h4 className="text-start typography-4 text-medium-large text-dark">{`${brideFullName ?? 'Marie'},  (${brideSurname ?? 'Marie'})`}</h4>
                          <p className="text-start typography-4 text-medium color-primary">{`${brideDescription ?? 'Putri dari David & Julia'}`}</p>
                      </div>
                  </div>
                  <div className="row justify-content-center">
                      <div className="col-12 col-md-1">
                          <p className="text-center typography text-medium-large text-dark">&</p>
                      </div>
                  </div>
                  <div className="row justify-content-center">
                      <div className="col-8 col-md-4 text-center">
                          <h4 className="text-end typography-4 text-medium-large text-dark">{`${groomFullName ?? 'John'},  (${groomSurname ?? 'John'})`}</h4>
                          <p className="text-end typography-4 text-medium color-primary">{`${groomDescription ?? 'Putra ke-2 dari Pablo & Anne'}`}</p>
                      </div>
                      <div className="col-4 col-md-2 text-center">
                          <div className="row justify-content-end">
                              <img src="./images/groom.jpg" className="rounded img-person" alt="foto mempelai pria" />
                          </div>
                      </div>
                  </div>
                  <div className="row justify-content-center">
                      <div className="col-10">
                          <p className="text-center typography-6 text-dark">
                              untuk mengikuti sunnah Rasul-Mu dalam membentuk
                              keluarga yang sakinah, mawaddah, warahmah
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}