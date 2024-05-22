import SectionTitle from "../components/SectionTitle";

function insertCongratulation(congratulationList) {
  return congratulationList.map(c => 
      <div key={c.id} className="col-11 col-md-8 bg-color-secondary border border-3 border-white rounded">
          <p className="typography-2 color-primary">{c.formName}</p>
          <p className="typography-6 color-primary">{c.formCongratulationList}</p>
      </div>
  );
}

export default function RsvpSection({ congratulationList, setCongratulationList, recepient }) {
  const congratulationListInsert = insertCongratulation(congratulationList);
  const [name, setName] = React.useState(recepient);
  const [presence, setPresence] = React.useState('present');
  const [paxCount, setPaxCount] = React.useState(1);
  const [congratulation, setCongratulation] = React.useState('Selamat berbahagia.');

  function onRadioChange(e) {
      setPresence(e.target.value);
  }

  function onPaxCountChange(e) {
      if (e.target.value > 0) {
          setPaxCount(e.target.value);
      } else {
          setPaxCount(0);
      }
  }

  function onCongratulationChange(e) {
      setCongratulation(e.target.value ?? '');
  }

  function onNameChange(e) {
      setName(e.target.value ?? '');
  }

  function onClickSubmitCongratulation() {
      if (!name || !congratulation) {
          return;
      }
      
      let lastId = 1;
      for(const congrat of congratulationList) {
          if (congrat?.id && lastId < congrat.id) {
              lastId = congrat.id;
          }
      }
      
      setCongratulationList([{
          id: lastId + 1,
          formName: name,
          formCongratulationList: congratulation,
      }].concat(congratulationList));
  }          

  return (
      <section className="container-fluid rsvp">
          <div className="d-flex flex-column vh-100 align-items-center justify-content-center">
              <div className="row justify-content-center">
                  <div className="col-12 col-md-12 rsvp-form">
                      <SectionTitle text='RSVP & Ucapan' />
                  </div>
              </div>
              <div className="row justify-content-center">
                  <div id="formContainer" className="col-11 col-md-11 margin-bottom-3">
                      <form action="#" method="POST" autoComplete="off">
                          <input type="hidden" name="_csrf" defaultValue="" />
                          <label htmlFor="formName">Nama:</label><br />
                          <input type="text" id="formName" name="formName" onChange={onNameChange} defaultValue={name ?? ""}/><br />
                          <div className="rsvp-form">
                              <input type="radio" id="present" name="formPresence" defaultValue="present" defaultChecked={presence === 'present' ? true : false} onChange={onRadioChange}/>
                              <label htmlFor="present">Ya, Saya hadir</label><br />
                              <input type="radio" id="absent" name="formPresence" defaultValue="absent" defaultChecked={presence === 'absent' ? true : false} onChange={onRadioChange}/>
                              <label htmlFor="absent">Maaf, Saya tidak hadir</label><br />
                          </div>
                          <label htmlFor="formTotalAudience">Jumlah yang hadir:</label><br />
                          <input type="text/number" id="formTotalAudience" name="formTotalAudience" defaultValue={paxCount} onChange={onPaxCountChange}/><br />
                          <label htmlFor="formCongratulationList">Ucapan:</label><br />
                          <textarea id="formCongratulationList" name="formCongratulationList" rows="4" cols="20" onChange={onCongratulationChange} defaultValue={congratulation ?? ""}></textarea><br />
                          <button id="formSubmit" type="button" className="btn btn-success" onClick={onClickSubmitCongratulation}>Kirim</button>
                      </form>
                  </div>
              </div>
              <div className="row justify-content-center" id="congratulationsList">
                  { congratulationListInsert }
              </div>
          </div>
      </section>
  );
}