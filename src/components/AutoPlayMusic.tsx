import React, { useEffect, useRef } from 'react';
import musica from '../assets/musica.mp3'

const AutoPlayMusic: React.FC = () => {
    // audioRef ile HTML audio elementine referans alıyoruz
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Sayfa yüklendiğinde müzik çalmaya başla
        if (audioRef.current) {
            audioRef.current.play();
        }

        // Cleanup: Bileşen unmount olduğunda müziği durdur
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0; // Müzik başa dönsün diye
            }
        };
    }, []); // Dependecy array boş -> sadece component mount olduğunda çalışır

    return (
        <div>

            {/* Audio etiketini kullanarak müzik dosyasını ekliyoruz */}
            <audio ref={audioRef} loop>
                <source src={musica} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AutoPlayMusic;
