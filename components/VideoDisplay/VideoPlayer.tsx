// Cloudinary auto-format + eco-quality transformations let Cloudinary pick the
// best codec for each browser (AV1/HEVC/VP9) and slim the bitrate. The mobile
// variant additionally serves the video at 768px wide.
const BASE = 'https://res.cloudinary.com/hardcodepunk/video/upload'
const WEBM_ID = 'v1701949596/zfrqvj08czjna2zaupf8.webm'
const MP4_ID = 'v1701940586/cw2egrtiegzaljg3347k.mp4'

const desktopTransform = 'f_auto,q_auto:eco'
const mobileTransform = 'f_auto,q_auto:eco,w_768'

const webmDesktop = `${BASE}/${desktopTransform}/${WEBM_ID}`
const webmMobile = `${BASE}/${mobileTransform}/${WEBM_ID}`
const mp4Desktop = `${BASE}/${desktopTransform}/${MP4_ID}`
const mp4Mobile = `${BASE}/${mobileTransform}/${MP4_ID}`

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
