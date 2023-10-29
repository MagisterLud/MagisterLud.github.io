settings.outformat="pdf";
import graph;
import math;
import geometry;
size(7cm,0);

real p = ( sqrt(5.) - 1. )/2.;

real f( real x ){
    return p*x + (1. - p)/2.; 
    }
    
real f1( real x ){
    return p*x + 1.; 
    } 
    
real f2( real x ){
    return p*x - p; 
    }   



for ( int i = 0; i<11; ++i ) {
    draw( (i, 0)--(i, 7), linewidth(0.25) );
    if( i < 8 ) draw( (0, i)--(10, i), linewidth(0.25) );  
    }


int[] array1 = {2, 4, 5, 7, 9};

for(int i : array1) {
    draw( (i, floor(p*i + (1. - p)/2.) )--(i, floor(p*i + (1. - p)/2.) + 1 ),  red+linewidth(1) );
    } 


draw((1,1)--(2,1), blue+linewidth(1));
draw((2,2)--(4,2), blue+linewidth(1));
draw((4,3)--(5,3), blue+linewidth(1));
draw((5,4)--(7,4), blue+linewidth(1));
draw((7,5)--(9,5), blue+linewidth(1));


draw(graph(f, 0, 9.5), purple+linewidth(0.7));

draw(graph(f1, 0, 9), deepgreen+linewidth(0.7));

draw(graph(f2, 0, 9.5), deepgreen+linewidth(0.7));

   


xaxis(axis=YZero,
           xmin=-infinity, xmax=infinity,
           ticks=NoTicks,  arrow=Arrow(HookHead), above=false);
yaxis(axis=YZero,
                      ymin=-infinity, ymax=infinity,
                      ticks=NoTicks,  arrow=Arrow(HookHead), above=false);
                      
label("$0$", (1.5, 0.7));
label("$1$", (1.8, 1.7));
