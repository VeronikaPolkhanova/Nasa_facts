import ReactPlayer from 'react-player';

function VideoBg({ url }) {
    return (
        <div className='react-player-container' style={{
            position: "fixed",
            width: "-webkit-fill-available"
        }}>
            <ReactPlayer
                url={url}
                playing={true}
                loop={true}
                style={{
                    filter: "brightness(0.4)",
                }}
                width="100%"
                height="100%"
            />
        </div>
    )
}
export default VideoBg;