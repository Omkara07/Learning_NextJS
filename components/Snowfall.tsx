"use client";

import React, { useEffect, useRef } from "react";

const SnowfallCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        const snowflakes: any[] = [];
        const width = canvas.width = window.innerWidth;
        const height = canvas.height = window.innerHeight;

        class Snowflake {
            x: number;
            y: number;
            radius: number;
            speed: number;
            wind: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.radius = Math.random() * 2 + 0.5;
                this.speed = Math.random() * 1 + 0.5;
                this.wind = Math.random() * 1 - 0.5;
            }

            update() {
                this.y += this.speed;
                this.x += this.wind;
                if (this.y > height) this.y = 0;
                if (this.x > width || this.x < 0) this.x = Math.random() * width;
            }

            draw() {
                if (ctx) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.fillStyle = "white";
                    ctx.fill();
                }
            }
        }

        for (let i = 0; i < 50; i++) {
            snowflakes.push(new Snowflake());
        }

        const animate = () => {
            if (!ctx) return;

            ctx.clearRect(0, 0, width, height);
            snowflakes.forEach((snowflake) => {
                snowflake.update();
                snowflake.draw();
            });
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            snowflakes.length = 0; // Clean up
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                opacity: 0.7
            }}
        ></canvas>
    );
};

export default SnowfallCanvas;
