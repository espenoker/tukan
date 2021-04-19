const frag = `
  #ifdef GL_ES
precision highp float;
#endif

uniform float u_time;


uniform sampler2D disp2;

varying vec3 v_normal;
varying vec2 v_texcoord;

vec4 rgb(float r, float g, float b) {
   return vec4(r / 255.0, g / 255.0, b / 255.0, 1.0);
}

void main(void)
{
    vec2 uv = v_texcoord;
    
    vec2 point = fract(uv * 0.5 + vec2(sin(u_time*0.01), sin(u_time*0.025)));
    
    vec4 dispColor = texture2D(disp2, point);

    
    vec4 tl = rgb(118.0, 76.0, 158.0); 
    vec4 tr = rgb(30.0, 180.0, 123.0);
    vec4 bl = rgb(251.0, 177.0, 25.0);
    vec4 br = rgb(69.0, 181.0, 73.0);
    
    float dispX  = mix(-0.5, 0.5, dispColor.r);
    float dispY  = mix(-0.5, 0.5,dispColor.r);
     
    vec4 color = mix(
            mix(tl, tr, uv.x + dispX),
            mix(bl, br, uv.x - dispX), 
            uv.y + dispY * sin(u_time)
    );
    
    gl_FragColor = color;
}
`