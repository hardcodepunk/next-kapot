// Desktop serves the original encoding (~1.8 MB, full quality). Mobile gets
// the same source resized to 768px wide via Cloudinary, saving ~50% bandwidth
// without re-encoding quality loss.
const BASE = 'https://res.cloudinary.com/hardcodepunk/video/upload'
const WEBM_ID = 'v1701949596/zfrqvj08czjna2zaupf8.webm'
const MP4_ID = 'v1701940586/cw2egrtiegzaljg3347k.mp4'

const webmDesktop = `${BASE}/${WEBM_ID}`
const webmMobile = `${BASE}/w_768/${WEBM_ID}`
const mp4Desktop = `${BASE}/${MP4_ID}`
const mp4Mobile = `${BASE}/w_768/${MP4_ID}`

const VideoPlayer = () => (
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{ objectFit: 'cover', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
  >
    <source media="(max-width: 768px)" src={webmMobile} type="video/webm" />
    <source media="(max-width: 768px)" src={mp4Mobile} type="video/mp4" />
    <source src={webmDesktop} type="video/webm" />
    <source src={mp4Desktop} type="video/mp4" />
  </video>
)

export default VideoPlayer
