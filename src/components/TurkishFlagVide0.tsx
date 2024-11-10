import React, {useEffect, useRef} from 'react';
import video from '../assets/turkflag.mp4'
import stars from '../assets/stars.mp4'

const TurkishFlagVideo = () => {
    const videoRef = useRef()
    useEffect(() => {
        // Video hızını ayarla (1.0 normal hız, 2.0 iki kat hızlı, 0.5 yarı hız)
        if (videoRef.current) {
            videoRef.current.playbackRate = 5.0; // Burada hızı 2 kat artırdım
        }
    }, []);
    return (
        <div className="w-full -z-0 h-full min-h-screen  absolute top-0 left-0 mx-auto">
            <div className="aspect-w-16 aspect-h-9 absolute top-0 left-0 z-0 w-full rounded-lg overflow-hidden">
                <video
                    className="w-full h-full min-h-screen object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src={video}
                        type="video/mp4"
                    />
                </video>

            </div>
            <div className="aspect-w-16 aspect-h-9 absolute top-[-100px] left-0 z-10 opacity-50  rounded-lg overflow-hidden">
                <video
                    ref={videoRef}

                    className="w-full h-full min-h-screen object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src={stars}
                        type="video/mp4"
                    />
                </video>

            </div>
        </div>
    );
};

export default TurkishFlagVideo;