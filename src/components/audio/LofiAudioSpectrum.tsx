import { useEffect, useState } from "react"
import AudioSpectrum from "react-audio-spectrum2"
import "./style.css"


export const LofiAudioSpectrum = () => {
    const [audio] = useState(new Audio("./sound.mp3"))
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        playing ? audio.play() : audio.pause()
    },
        [playing, audio]
    )

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false))
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false))
        };
    }, [audio])

    const handleUpVolume = () => {
        if (audio.volume < 1) {
            audio.volume = Number((audio.volume + 0.1).toFixed(1))
        }
    }

    const handleDownVolume = () => {
        if (audio.volume > 0.1) {
            audio.volume = Number((audio.volume - 0.1).toFixed(1))
        }
    }

    return (
        <div style={{ border: "double" }} className="text-center d-flex justify-content-center">
            <AudioSpectrum
                id="audio-canvas"
                height={170}
                width={213}
                audioEle={audio}
                capColor={'red'}
                capHeight={2}
                meterWidth={2}
                meterCount={512}
                meterColor={[
                    { stop: 0, color: '#f00' },
                    { stop: 0.5, color: '#0CD7FD' },
                    { stop: 1, color: 'red' }
                ]}
                gap={3}
            />
            <div style={{ position: "absolute" }} className="d-flex justify-content-around">
                <button
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Turn down volume"
                    onClick={() => handleDownVolume()}
                    style={{ cursor: "pointer" }}
                    id="bPlusLess"
                    className="fa fa-minus"
                />
                <button 
                    data-toggle="tooltip" 
                    data-placement="top" 
                    title={`${playing ? "Pause" : "Play"} music`} 
                    onClick={() => setPlaying(!playing)} 
                    style={{ cursor: "pointer" }} 
                    id="bPlay" 
                    className={`fa ${playing ? "fa-stop" : "fa-play"}`} 
                />
                <button 
                    data-toggle="tooltip" 
                    data-placement="top" 
                    title="Turn up volume" 
                    onClick={() => handleUpVolume()} 
                    style={{ cursor: "pointer" }} 
                    id="bPlusLess" 
                    className="fa fa-plus" 
                />
            </div>
        </div>
    )
}