import { useEffect, useRef } from 'react'; 


export const Background = () =>{
    const canvasRef = useRef(null); 

    useEffect(() => {
        const canvas = canvasRef.current; 
        const ctx = canvas.getContext('2d'); 

        let requestId; 

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.fillStyle = 'yellow';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const circles = []; 

        const createCircle = () => {
            const randomColor = Math.random() < 0.5 ? 'red' : 'blue';
            const circle = {
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              radius: Math.random() * 30 + 10,
              color: randomColor,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
            };
            circles.push(circle);
          };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for(let i = 0; i < circles.length; i++){
                const circle = circles[i]; 
        
                ctx.beginPath();
                ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
                ctx.fillStyle = circle.color;
                ctx.fill();
        
                circle.x += circle.vx;
                circle.y += circle.vy;
        
                if (circle.x + circle.radius < 0 || circle.x - circle.radius > canvas.width || circle.y + circle.radius < 0 || circle.y - circle.radius > canvas.height) {
                  circles.splice(i, 1);
                }            

            }
            requestId = requestAnimationFrame(animate); 
        }
        animate(); 
        const intervalId = setInterval(() => {
            createCircle();
        }, 1000);

        return () => {
            cancelAnimationFrame(requestId);
            clearInterval(intervalId);
        };
    }, [])

    
    return <canvas ref={canvasRef} className="animated-background" />;
}