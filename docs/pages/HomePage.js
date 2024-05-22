import PauseAudioButton from "../components/PauseAudioButton";
import PlayAudioButton from "../components/PlayAudioButton";
import Sound from "../components/Sound";
import BrideGroomSection from "../sections/BrideGroomSection";
import CautionSection from "../sections/CautionSection";
import CoverSection from "../sections/CoverSection";
import EnvelopeSection from "../sections/EnvelopeSection";
import EventSection from "../sections/EventSection";
import GallerySection from "../sections/GallerySection";
import GiftSection from "../sections/GiftSection";
import InvitationSection from "../sections/InvitationSection";
import LiveStreamingSection from "../sections/LiveStreamingSection";
import LocationSection from "../sections/LocationSection";
import PreambleSection from "../sections/PreambleSection";
import RsvpSection from "../sections/RsvpSection";

export default function HomePage() {
  const [playAudio, setPlayAudio] = React.useState(false);
  const [audio] = React.useState(new Sound());
  const [showAudioButton, setShowAudioButton] = React.useState(false);
  const [showPlayAudioButton, setShowPlayAudioButton] = React.useState(true);
  const [showPauseAudioButton, setShowPauseAudioButton] = React.useState(false);
  const [congratulationList, setCongratulationList] = React.useState([
      { id: 1, formName: "Bobby", formCongratulationList: "Have a happy wedding" },
      { id: 2, formName: "Alice", formCongratulationList: "Semoga apa yang kalian cita-citakan dalam pernikahan bisa tercapai." },
      { id: 3, formName: "Bapak Ir. Sodarmo", formCongratulationList: "Saya mengucapkan selamat atas pernikahan ananda dan adinda. Semoga selalu dalam keberkahan dan kebahagiaan." },
      { id: 4, formName: "Ibu Hj. Arin Suarin", formCongratulationList: "Barakallahulakuma wa barakah 'alaikuma." },
      { id: 5, formName: "Raim Laos", formCongratulationList: "Terima kasih atas undangannya. Semoga lancar segala urusan hingga hari H." },
      { id: 6, formName: "Menteri Sosial", formCongratulationList: "Semoga berbahagia dalam ikatan cinta pernikahan." },
      { id: 7, formName: "Menteri Pariwisata", formCongratulationList: "Semoga berbahagia dalam ikatan cinta pernikahan." },
      { id: 8, formName: "Menteri Pendidikan dan Kebudayaan", formCongratulationList: "Semoga berbahagia dalam ikatan cinta pernikahan." },
  ]);
  const [showGiftModal, setShowGiftModal] = React.useState(false);

  function onClickPlayAudioButton() {
      setShowAudioButton(false);
      setShowPlayAudioButton(false);
      setShowPauseAudioButton(true);
      setPlayAudio(true);
  }

  function onClickPauseAudioButton() {
      setShowAudioButton(true);
      setShowPlayAudioButton(true);
      setShowPauseAudioButton(false);
      setPlayAudio(false);
  }

  function onClickGiftButton() {
      if (showGiftModal) setShowGiftModal(false);
      else setShowGiftModal(true);
  }

  const { brideSurname, brideDescription, brideFullName } = {
      brideSurname: 'Maya',
      brideDescription: 'Putri ke-1 dari Bapak H. Kaka & Ibu Hj. Elya',
      brideFullName: 'Mayasari Ningsih, S.Si',
  };
  const { groomSurname, groomDescription, groomFullName } = {
      groomSurname: 'Abdul',
      groomDescription: 'Putra ke-2 dari Bapak Elmy & Ibu Kokom',
      groomFullName: 'Ahmad Abdul, S.T.',
  };
  const { marriageDate, venueName, venueAddress } = {
      marriageDate: 'Minggu, 12 Jul 2045',
      venueName: 'Harris Hotel & Convention',
      venueAddress: 'Jalan Gatot Subroto Kav. 4 No. 1123 DKI Jakarta 10250'
  };
  const recepient = 'Kel. H. Eep Sumenep';
  const imagesUrl = [
      "./images/gallery-8.jpg",
      "./images/gallery-12.jpg",
      "./images/gallery-9.jpg",
      "./images/gallery-11.jpg",
  ];
  return (
    <div>
      <EnvelopeSection
          brideName={brideSurname}
          groomName={groomSurname}
          marriageDate={marriageDate}
          recepient={recepient}
          audioButton={{ showAudioButton, setShowAudioButton }}
          playAudioButton={{ showPlayAudioButton, setShowPlayAudioButton, onClick: onClickPlayAudioButton }}
      />
      <CoverSection brideName={brideSurname} groomName={groomSurname} marriageDate={marriageDate} />
      <PreambleSection />
      <BrideGroomSection
          bride={{ brideSurname, brideDescription, brideFullName }}
          groom={{ groomSurname, groomDescription, groomFullName }}
      />
      <EventSection marriageDate={marriageDate} venue={venueName} venueAddress={venueAddress} />
      <LocationSection venueName={venueName} venueAddress={venueAddress} marriageDate={marriageDate} />
      <LiveStreamingSection />
      <CautionSection />
      <GallerySection imagesUrl={imagesUrl} />
      <RsvpSection congratulationList={congratulationList} setCongratulationList={setCongratulationList} recepient={recepient}/>
      <GiftSection showGiftModal={showGiftModal} onClick={onClickGiftButton} />
      <InvitationSection />
      <PauseAudioButton show={showPauseAudioButton} onClick={onClickPauseAudioButton} audio={audio}/>
      <PlayAudioButton show={showPlayAudioButton} onClick={onClickPlayAudioButton} audio={audio}/>
    </div>
  );
}