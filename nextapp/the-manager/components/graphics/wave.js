import { useEffect, useRef } from 'react'; 

export const WaveGraphic = ({   amplitude = 50,
    frequency = 0.02,
    phase = 0,
    speed = 0.05,
    width = 800,
    height = 100,
    color = 'blue',
    lineWidth = 3, }) => {
    const canvasRef = useRef(null); 

    useEffect(() => {    
        const canvas = canvasRef.current; 
        const ctx = canvas.getContext('2d'); 

        const wave = {
            amplitude: amplitude,
            frequency: frequency,
            phase: phase,
            speed: speed,
        }

        const draw = () => {
            if(!canvas || !ctx) return; 

            ctx.clearRect(0, 0, width, height);
            ctx.beginPath();


            for(let x = 0; x < width; x++){
                const y = wave.amplitude * Math.cos(wave.frequency * x - wave.phase) + height/2; 
                ctx.lineTo(x, y); 
            }
            ctx.strokeStyle = color; 
            ctx.lineWidth = lineWidth; 
            ctx.stroke(); 
            ctx.closePath(); 

            wave.phase += wave.speed; 
            requestAnimationFrame(draw);


        }; 
        draw(); 
        
    }, [amplitude, frequency, phase, speed, width, height, color, lineWidth]); 

    return <canvas ref={canvasRef} width={width} height={height} />;
}
