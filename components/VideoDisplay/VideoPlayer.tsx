const VideoPlayer = () => {
  const cloudinaryMp4URL = 'https://res.cloudinary.com/hardcodepunk/video/upload/v1701940586/cw2egrtiegzaljg3347k.mp4'
  const cloudinaryWebmURL = 'https://res.cloudinary.com/hardcodepunk/video/upload/v1701949596/zfrqvj08czjna2zaupf8.webm'

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      style={{ objectFit: 'cover', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
    >
      <source src={cloudinaryWebmURL} type="video/webm" />
      <source src={cloudinaryMp4URL} type="video/mp4" />
    </video>
  )
}

export default VideoPlayer
