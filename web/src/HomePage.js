export default function HomePage() {
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
      marriageDate: 'Minggu, 5 Apr 2025',
      venueName: 'Harris Hotel & Convention',
      venueAddress: 'Jalan Gatot Subroto Kav. 4 No. 1123 DKI Jakarta 10250'
  };
  const recepient = 'Kel. H. Eep Sumenep';
  const imagesUrl = [
      "./images/gallery-12.jpeg",
      "./images/gallery-8.jpeg",
      "./images/gallery-9.jpeg",
      "./images/gallery-11.jpeg",
  ];
  return (
    <div>
      <EnvelopeSection brideName={brideSurname} groomName={groomSurname} marriageDate={marriageDate} recepient={recepient} />
      <CoverSection brideName={brideSurname} groomName={groomSurname} marriageDate={marriageDate} />
      <PreambleSection />
      <BrideGroomSection
          bride={{ brideSurname, brideDescription, brideFullName }}
          groom={{ groomSurname, groomDescription, groomFullName }}
      />
      <EventSection marriageDate={marriageDate} venue={venueName} venueAddress={venueAddress} />
      <LocationSection venueName={venueName} venueAddress={venueAddress} />
      <LiveStreamingSection />
      <CautionSection />
      <GallerySection imagesUrl={imagesUrl} />
      <RsvpSection />
      <GiftSection />
      <InvitationSection />
      <Audio />
      <PauseButton />
      <PlayButton />
    </div>
  );
}