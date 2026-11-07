import React, { useEffect, useRef } from 'react';

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let angleX = 0;
    let angleY = 0;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // 3D vertices for a Swiss brutalist geometric isometric cube
    const size = Math.min(width, height) * 0.28;
    const vertices = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1],
    ].map(([x, y, z]) => [x * size, y * size, z * size]);

    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // back face
      [4, 5], [5, 6], [6, 7], [7, 4], // front face
      [0, 4], [1, 5], [2, 6], [3, 7], // connecting edges
    ];

    const render = () => {
      // Smooth lerp toward mouse
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      angleY += 0.006 + (mouseX - width / 2) * 0.00003;
      angleX += 0.004 + (mouseY - height / 2) * 0.00003;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle Swiss coordinate cross grid behind the geometry
      ctx.strokeStyle = 'rgba(17, 17, 17, 0.08)';
      ctx.lineWidth = 1;
      const step = 32;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Center offset
      const cx = width / 2;
      const cy = height / 2;

      // Project vertices with 3D rotation
      const projected: [number, number][] = vertices.map(([vx, vy, vz]) => {
        // Rotate around Y
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        const x1 = vx * cosY + vz * sinY;
        const z1 = -vx * sinY + vz * cosY;

        // Rotate around X
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const y2 = vy * cosX - z1 * sinX;
        const z2 = vy * sinX + z1 * cosX;

        // Isometric projection perspective
        const perspective = 800 / (800 + z2);
        return [cx + x1 * perspective, cy + y2 * perspective];
      });

      // Draw geometric planes (shaded brutalist faces)
      const faces = [
        [0, 1, 2, 3], // back
        [4, 5, 6, 7], // front
        [0, 1, 5, 4], // top
        [2, 3, 7, 6], // bottom
        [0, 3, 7, 4], // left
        [1, 2, 6, 5], // right
      ];

      // Highlight one face in acid-lime to fit the Swiss brutalist motif
      faces.forEach((face, idx) => {
        ctx.beginPath();
        ctx.moveTo(projected[face[0]][0], projected[face[0]][1]);
        for (let i = 1; i < face.length; i++) {
          ctx.lineTo(projected[face[i]][0], projected[face[i]][1]);
        }
        ctx.closePath();

        if (idx === 1) {
          ctx.fillStyle = 'rgba(214, 255, 0, 0.12)';
          ctx.fill();
        } else if (idx === 2) {
          ctx.fillStyle = 'rgba(17, 17, 17, 0.04)';
          ctx.fill();
        }
      });

      // Draw wireframe edges
      ctx.strokeStyle = '#111111';
      ctx.lineWidth = 1.5;
      edges.forEach(([start, end]) => {
        ctx.beginPath();
        ctx.moveTo(projected[start][0], projected[start][1]);
        ctx.lineTo(projected[end][0], projected[end][1]);
        ctx.stroke();
      });

      // Draw vertices / nodal points
      projected.forEach(([px, py], i) => {
        ctx.fillStyle = i === 5 ? '#D6FF00' : '#111111';
        ctx.fillRect(px - 3, py - 3, 6, 6);
        ctx.strokeStyle = '#111111';
        ctx.lineWidth = 1;
        ctx.strokeRect(px - 3, py - 3, 6, 6);
      });

      // Technical label overlay
      ctx.fillStyle = '#777777';
      ctx.font = '10px "IBM Plex Mono", monospace';
      ctx.fillText(`ROT_X:${(angleX % (Math.PI * 2)).toFixed(2)} | ROT_Y:${(angleY % (Math.PI * 2)).toFixed(2)}`, 16, height - 16);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[300px] border border-ink bg-surface/40 flex items-center justify-center overflow-hidden">
      <div className="absolute top-2 left-2 z-10 font-mono text-[10px] bg-ink text-background px-1.5 py-0.5 border border-ink">
        KINETIC_FORM // FIG 0.1
      </div>
      <div className="absolute top-2 right-2 z-10 font-mono text-[10px] text-ink-muted">
        INTERACTIVE 3D MESH
      </div>
      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />
      <div className="absolute bottom-2 right-2 z-10 font-mono text-[10px] text-ink-muted flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 bg-acid-lime inline-block"></span>
        <span>DRAG VECTOR</span>
      </div>
    </div>
  );
};
