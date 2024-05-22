export default function PauseAudioButton({ show, onClick, audio }) {
  React.useEffect(() => {
      if (show) {
          audio.play();
      } else {
          audio.pause();
      }
  }, [show, audio]);
  return (
      <button id="pauseAudio" className="btn-floating" style={{ display: show ? 'block' : 'none' }} onClick={onClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pause" viewBox="0 0 16 16">
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
          </svg>
      </button>
  );
}