settings.outformat="pdf";
import graph;
import math;
import geometry;
size(7cm,0);

real f( real x ){return ( sqrt(5)-1 )/2*x; }

draw(graph(f, 0, 8.5), purple+linewidth(1));



for ( int i = 0; i<10; ++i ) {
    draw( (i, 0)--(i, 6), linewidth(0.25) );
    
    if(i > 0 && i < 9) {
        draw( (i, (sqrt(5) - 1)/2*i + 0.1)--(i, (sqrt(5) - 1)/2*i - 0.1),  blue+linewidth(1) );
        } 
    }

for ( int i = 0; i<7; ++i ) {
    draw( (0, i)--(9, i), linewidth(0.25) );
    if(i > 0 && i < 6) {
        draw(((sqrt(5) + 1)/2*i + 0.1, i)--((sqrt(5) + 1)/2*i - 0.1, i),  red+linewidth(1) );
        } 
    }


xaxis(axis=YZero,
           xmin=-infinity, xmax=infinity,
           ticks=NoTicks,  arrow=Arrow(HookHead), above=false);
yaxis(axis=YZero,
                      ymin=-infinity, ymax=infinity,
                      ticks=NoTicks,  arrow=Arrow(HookHead), above=false);
                      
label("$0$", (1, 0.25));
label("$1$", (1.6, 0.7));
