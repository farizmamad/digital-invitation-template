export default function GiftModal({ show, onClickExit }) {
  return (
      <div id="giftModal" className="modal" style={{display: show ? 'block' : 'none'}}>
          <div className="modal-content">
              <span className="modal-close" onClick={onClickExit}>&times;</span>
              <div className="row justify-content-center">
                  <div className="col-6 col-md-2">
                      <img src="./images/logo_mandiri.png" className="img-fluid" alt="..." />
                  </div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-12 col-md-12">
                      <p className="text-center">
                          <button id="copyToClip1" className="btn btn-success text-center margin-top-5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                              </svg>
                              1234567890 <br />
                              a/n John
                          </button>
                      </p>
                  </div>
              </div>
              <div className="margin-top-5"></div>
              <div className="row justify-content-center">
                  <div className="col-6 col-md-2">
                      <img src="./images/logo_bca.png" className="img-fluid" alt="..." />
                  </div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-12 col-md-12">
                     <p className="text-center">
                      <button id="copyToClip2" className="btn btn-success text-center margin-top-5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                          </svg>
                          1234567890 <br />
                          a/n Marie
                      </button>
                     </p>
                  </div>
              </div>
          </div>
  
      </div>
  );
}