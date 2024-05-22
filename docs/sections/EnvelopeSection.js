export default function EnvelopeSection({ brideName, groomName, marriageDate, recepient, audioButton, playAudioButton }) {
  function openInvitation() {
      let pageHeight = window.innerHeight;
      window.scrollBy(0, pageHeight);
      playAudioButton.setShowPlayAudioButton = false;
  }

  return(
      <section className="container-fluid envelope">
          <div className="d-flex vh-100 align-items-center"> 
              <div className="col-12">
                  <div className="row justify-content-center">
                      <div className="d-flex flex-column vh-50 justify-content-center margin-bottom-1">
                          <p className="text-center text-medium-large typography-2 color-primary">Wedding Invitation</p>
                          <h1 className="text-center text-large typography color-primary">{`${brideName ?? 'Marie'} & ${groomName ?? 'John'}`}</h1>
                          <p className="text-center text-medium-large typography-3 color-primary">{`${marriageDate ?? 'Saturday, 5 Jan 2025'}`}</p>
                      </div>
                  </div>
                  <div className="row justify-content-center">
                      <div className="col-10 col-md-5 justify-content-center border rounded bg-color-secondary">
                          <p className="text-center text-medium color-primary">Kepada Yth.</p>
                          <h4 className="text-center color-primary guest-name">{recepient ?? 'Tamu Undangan'}</h4>
                          <p className="text-center text-small color-primary">Mohon maaf apabila ada kesalahan penulisan nama dan/atau gelar</p>
                      </div>
                  </div>
                  <div className="row justify-content-center">
                      <div className="d-grid gap-2 col-8 col-md-4 mx-auto" onClick={playAudioButton.onClick}>
                          <button id="openInvitationButton" className="btn btn-success margin-top-5" onClick={openInvitation}>Buka undangan<br /> atau scroll ke bawah</button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}