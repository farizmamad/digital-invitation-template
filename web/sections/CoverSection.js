export default function CoverSection({ brideName, groomName, marriageDate }) {
  return(
      <section className="container-fluid cover">
          <div className="d-flex vh-100">
              <div className="col-12">
                  <div className="row align-items-start">
                      <div className="d-flex flex-column vh-50 justify-content-center margin-bottom-1">
                          <p className="text-center text-medium-large typography-2 shadow-black text-light fade-in-text-fast">Wedding Invitation</p>
                          <h1 className="text-center text-large typography shadow-gray text-light fade-in-text-medium">{`${brideName ?? 'Marie'} & ${groomName ?? 'John'}`}</h1>
                          <p className="text-center text-medium-large typography-3 shadow-black text-light fade-in-text-slow">{`${marriageDate ?? 'Saturday, 5 Jan 2025'}`}</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}