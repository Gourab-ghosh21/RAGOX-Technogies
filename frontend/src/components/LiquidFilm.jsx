import React, { useEffect, useRef, useState } from 'react';

/**
 * LiquidFilm — GPU-Accelerated WebGL2 Thin-Film Fluid Interference Shader
 *
 * Designed for REGOX Inner Pages:
 * - Real-time thin film iridescent fluid simulation
 * - Interactive pointer displacement & propagating ripples
 * - Full-screen responsive viewport mapping (minWidth 1200 overflow bug fixed)
 * - Safe WebGL2/WebGL1 context initialization with CSS mesh fallback
 * - Full cleanup on unmount to prevent GPU memory leaks
 * - Accessibility: respects prefers-reduced-motion
 */

const VS_SOURCE = `#version 300 es
in vec2 a_position;
out vec2 v_uv;
void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FS_SOURCE = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_hover;
uniform vec2 u_ripples[6];
uniform float u_ripple_times[6];

float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(0.87758, 0.47942, -0.47942, 0.87758);
    for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p = rot * p * 2.02 + vec2(100.0);
        a *= 0.5;
    }
    return v;
}

// Thin film iridescent palette tuned to REGOX aesthetic: vibrant cobalt, violet, cyan & obsidian
vec3 filmPalette(float t) {
    vec3 a = vec3(0.05, 0.08, 0.15);
    vec3 b = vec3(0.35, 0.45, 0.70);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.05, 0.35, 0.65);
    return a + b * cos(6.2831853 * (c * t + d));
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float aspect = u_resolution.x / u_resolution.y;
    vec2 p = (st - 0.5) * vec2(aspect, 1.0);

    // Interactive pointer ripples
    vec2 rippleDisp = vec2(0.0);
    float rippleGlow = 0.0;
    for (int i = 0; i < 6; i++) {
        float rAge = u_time - u_ripple_times[i];
        if (rAge > 0.0 && rAge < 3.0) {
            vec2 rPos = (u_ripples[i] - 0.5) * vec2(aspect, 1.0);
            float dist = length(p - rPos);
            float wave = sin(dist * 28.0 - rAge * 9.0) * exp(-rAge * 1.2) * exp(-dist * 3.5);
            vec2 dir = (dist > 0.001) ? normalize(p - rPos) : vec2(0.0);
            rippleDisp += dir * wave * 0.05;
            rippleGlow += abs(wave) * exp(-rAge * 1.5) * 0.25;
        }
    }

    // Direct cursor proximity reaction
    vec2 mousePos = (u_mouse - 0.5) * vec2(aspect, 1.0);
    float mDist = length(p - mousePos);
    float mInfluence = smoothstep(0.5, 0.0, mDist) * u_hover;
    p += rippleDisp + (p - mousePos) * mInfluence * 0.03;

    // Organic fluid domain warping (multi-octave flow)
    float t = u_time * 0.20;
    vec2 q = vec2(
        fbm(p + vec2(t * 0.28, t * 0.20)),
        fbm(p + vec2(2.1, 4.3) - t * 0.25)
    );

    vec2 r = vec2(
        fbm(p + 3.0 * q + vec2(1.7, 9.2) + t * 0.16),
        fbm(p + 3.0 * q + vec2(8.3, 2.8) + t * 0.22)
    );

    float f = fbm(p + 3.4 * r + vec2(t * 0.1));

    // Optical path difference for thin-film interference
    float opd = f * 2.2 + length(q) * 1.0 + length(r) * 0.7;
    vec3 col = filmPalette(opd);

    // Fluid iridescent crests: electric cobalt & neon violet sheen
    float sheen = pow(clamp(f * 1.2, 0.0, 1.0), 2.8);
    col += vec3(0.0, 0.45, 1.0) * sheen * 0.75;
    col += vec3(0.4, 0.1, 0.9) * pow(clamp(length(q) - 0.2, 0.0, 1.0), 2.2) * 0.5;
    col += vec3(0.0, 0.8, 1.0) * pow(clamp(length(r) - 0.3, 0.0, 1.0), 2.5) * 0.4;
    col += vec3(0.2, 0.5, 1.0) * rippleGlow;

    // Vignette towards edges
    float vig = smoothstep(1.4, 0.3, length(p));
    col *= vig * 0.75 + 0.25;

    // Rich base blending into REGOX deep obsidian
    col = mix(vec3(0.027, 0.031, 0.04), col, 0.88);

    fragColor = vec4(col, 1.0);
}
`;

// WebGL1 Fallback shaders
const VS_FALLBACK = `
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FS_FALLBACK = `
precision mediump float;
varying vec2 v_uv;
uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float t = u_time * 0.2;
    float wave = sin(st.x * 3.14 + t) * cos(st.y * 3.14 - t * 0.7);
    vec3 col = mix(vec3(0.03, 0.03, 0.05), vec3(0.0, 0.25, 0.6), (wave + 1.0) * 0.15);
    gl_FragColor = vec4(col, 1.0);
}
`;

export const LiquidFilm = ({ className = '', opacity = 0.85 }) => {
  const canvasRef = useRef(null);
  const [hasWebGLError, setHasWebGLError] = useState(false);
  const mouseRef = useRef({ x: 0.5, y: 0.5, hover: 0 });
  const ripplesRef = useRef({
    coords: new Float32Array(12), // 6 points [x, y]
    times: new Float32Array(6),
    index: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Accessibility check: reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Try WebGL2 first, fallback to WebGL1
    let isWebGL2 = true;
    let gl = canvas.getContext('webgl2', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'high-performance',
    });

    if (!gl) {
      isWebGL2 = false;
      gl = canvas.getContext('webgl', {
        alpha: false,
        antialias: false,
        depth: false,
        stencil: false,
      });
    }

    if (!gl) {
      setHasWebGLError(true);
      return;
    }

    // Compile helper
    const createShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vsSource = isWebGL2 ? VS_SOURCE : VS_FALLBACK;
    const fsSource = isWebGL2 ? FS_SOURCE : FS_FALLBACK;

    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);

    if (!vs || !fs) {
      setHasWebGLError(true);
      return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('Program link error:', gl.getProgramInfoLog(program));
      setHasWebGLError(true);
      return;
    }

    gl.useProgram(program);

    // Quad geometry [-1, -1] to [1, 1]
    const vertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uMouse = isWebGL2 ? gl.getUniformLocation(program, 'u_mouse') : null;
    const uHover = isWebGL2 ? gl.getUniformLocation(program, 'u_hover') : null;
    const uRipples = isWebGL2 ? gl.getUniformLocation(program, 'u_ripples') : null;
    const uRippleTimes = isWebGL2 ? gl.getUniformLocation(program, 'u_ripple_times') : null;

    // Responsive Canvas Sizing (fixes the minWidth: 1200px overflow bug)
    let animationFrameId;
    let startTime = performance.now();

    const handleResize = () => {
      if (!canvas || !gl) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      const displayWidth = Math.floor(width * dpr);
      const displayHeight = Math.floor(height * dpr);

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, displayWidth, displayHeight);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Pointer Ripple Interactions
    const handlePointerMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = 1.0 - e.clientY / window.innerHeight;
      mouseRef.current.x = x;
      mouseRef.current.y = y;
      mouseRef.current.hover = 1.0;

      // Add ripple on movement threshold
      const now = (performance.now() - startTime) * 0.001;
      const r = ripplesRef.current;
      const idx = r.index;
      r.coords[idx * 2] = x;
      r.coords[idx * 2 + 1] = y;
      r.times[idx] = now;
      r.index = (idx + 1) % 6;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Render loop
    const render = (time) => {
      const elapsed = prefersReducedMotion ? 1.0 : (time - startTime) * 0.001;

      gl.useProgram(program);

      if (uResolution) {
        gl.uniform2f(uResolution, canvas.width, canvas.height);
      }
      if (uTime) {
        gl.uniform1f(uTime, elapsed);
      }
      if (isWebGL2) {
        if (uMouse) {
          gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);
        }
        if (uHover) {
          // Decay hover
          mouseRef.current.hover *= 0.96;
          gl.uniform1f(uHover, mouseRef.current.hover);
        }
        if (uRipples) {
          gl.uniform2fv(uRipples, ripplesRef.current.coords);
        }
        if (uRippleTimes) {
          gl.uniform1fv(uRippleTimes, ripplesRef.current.times);
        }
      }

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);

      if (gl) {
        if (program) gl.deleteProgram(program);
        if (vs) gl.deleteShader(vs);
        if (fs) gl.deleteShader(fs);
        if (positionBuffer) gl.deleteBuffer(positionBuffer);
      }
    };
  }, []);

  return (
    <div
      className={`liquid-film-container fixed inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      style={{
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        minWidth: 0, // Explicitly enforce responsive scaling (resolving minWidth 1200 issue)
        opacity,
      }}
      aria-hidden="true"
    >
      {hasWebGLError ? (
        // High-fidelity CSS Fallback if WebGL2 / WebGL1 is unavailable
        <div className="w-full h-full bg-[#07080a] relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient opacity-60 mix-blend-screen animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.18)_0%,rgba(99,102,241,0.08)_40%,transparent_70%)] blur-3xl" />
        </div>
      ) : (
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            minWidth: 0,
            maxWidth: '100%',
          }}
        />
      )}
    </div>
  );
};

export default LiquidFilm;
