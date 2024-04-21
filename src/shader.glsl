#ifdef GL_ES
precision highp float;
#endif

#define PI 3.1415926535
#define HALF_PI 1.57079632679

precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_position;

float sdRing( in vec2 p, in vec2 n, in float r, in float th )
{
    p.x = abs(p.x);

    p = mat2(n.x,n.y,-n.y,n.x)*p;

    return max( abs(length(p)-r)-th*0.5,
                length(vec2(p.x,max(0.0,abs(r-p.y)-th*0.5)))*sign(p.x) );
}

float sdCircle( in vec2 p, in float r )
{
    return length(p)-r;
}

void main()
{
    // normalized pixel coordinates
    vec2 p = (2.0*gl_FragCoord.xy-u_resolution.xy)/u_resolution.y;

    float angle = 1.5708;
    mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));

    vec2 m = u_resolution.xy/u_resolution.y;
    p *= rotation;

    // animation
    float t = 3.14159 / 7.0;
    vec2 cs = vec2(sin(t),cos(t));
    const float ra = 0.6;
    const float th = 0.3;

    // distance
    float d = min(sdRing(p, cs, ra, th), sdCircle(p,0.3));
    d = min(sdRing(-p, cs, ra, th), d);

    // coloring
    vec3 col = (d > 0.0) ? vec3(1.0,1.0,1.0) : vec3(0.0,0.0,0.0);
    //vec3 col = vec3(1.0, 1.0, 0.0);

    col = mix( col, vec3(1.0), 1.0-smoothstep(0.0, 0.006, abs(d)) );

	gl_FragColor = vec4(col, 1.0);
}
