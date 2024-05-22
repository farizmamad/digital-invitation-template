import SectionTitle from "../components/SectionTitle";

export default function LocationSection({ venueName, venueAddress, venueMapsUrl, marriageDate }) {
  const [textDay, setTextDay] = React.useState('00');
  const [textHour, setTextHour] = React.useState('00');
  const [textMinute, setTextMinute] = React.useState('00');
  const [textSecond, setTextSecond] = React.useState('00');

  function countdown() {
      // specify the date and time we are counting down to.
      const countDate = new Date(marriageDate).getTime();
      const now = new Date().getTime();
  
      // calculate remaining time
      const remainingTime = countDate - now;
  
      // workout the time in days, hours, mins, seconds
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
  
      setTextDay(`${Math.floor(remainingTime / day)}`);
      setTextHour(`${Math.floor((remainingTime % day) / hour)}`);
      setTextMinute(`${Math.floor((remainingTime % hour) / minute)}`);
      setTextSecond(`${Math.floor((remainingTime % minute) / second)}`);
  }

  React.useEffect(() => {
      const interval = setInterval(countdown, 500);
      return () => clearInterval(interval);
  }, [textDay, textHour,textMinute, textSecond]);

  return (
      <section className="container-fluid location">
          <div className="d-flex flex-column vh-100 align-items-center justify-content-center">
              <div className="row justify-content-center">
                  <SectionTitle text='Acara akan dimulai dalam' />
                  <div className="col-2 col-md-1 countdown border border-3 border-white rounded bg-color-secondary rounded-box">
                      <div className="container-day">
                          <h4 className="day-2 typography-6 color-primary">{`${textDay ?? '00'}`}</h4>
                          <p className="typography-6 color-primary">hari</p>
                      </div>
                  </div>
                  <div className="col-2 col-md-1 countdown border border-3 border-white rounded bg-color-secondary rounded-box">
                      <div className="container-hour">
                          <h4 className="hour-2 typography-6 color-primary">{`${textHour ?? '00'}`}</h4>
                          <p className="typography-6 color-primary">jam</p>
                      </div>
                  </div>
                  <div className="col-2 col-md-1 countdown border border-3 border-white rounded bg-color-secondary rounded-box">
                      <div className="container-minute">
                          <h4 className="minute-2 typography-6 color-primary">{`${textMinute ?? '00'}`}</h4>
                          <p className="typography-6 color-primary">menit</p>
                      </div>
                  </div>
                  <div className="col-2 col-md-1 countdown border border-3 border-white rounded bg-color-secondary rounded-box">        
                      <div className="container-second">
                          <h4 className="second-2 typography-6 color-primary">{`${textSecond ?? '00'}`}</h4>
                          <p className="typography-6 color-primary">detik</p>
                      </div>
                  </div>
              </div>
              <div className="margin-top-5"></div>
              <div className="row justify-content-center">
                  <div className="col-12 col-md-12 justify-content-center">
                      <SectionTitle text='Peta Lokasi' />
                      <p className="text-center typography-6 text-dark">
                          {`${venueName ?? 'Hotel & Convention'}`}<br />
                          {`${venueAddress ?? 'Jl. Hotel, Jakarta 12420'}`}<br />
                          Ballroom 1<br />
                      </p>
                  </div>
              </div>
              <div className="row justify-content-center margin-top-5">
                  <div className="col-12 align-items-center">
                      <button id="openMaps" className="btn btn-success text-center" onClick={() => window.open(venueMapsUrl ?? 'https://goo.gl/maps/gY69sfQoqaogec8j8')}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-map" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
                          </svg>
                          Lihat Peta
                      </button>
                  </div>
              </div>
          </div>
      </section>
  );
}