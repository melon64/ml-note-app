def generate_prompt(notes):
    return """What should I learn after taking notes on:

    What should I learn after taking notes on: In mathematics, a Riemann sum is a certain kind of approximation of an integral by a finite sum.
    What to continue learning: definite integral,fundamental theorem of calculus,trapezoidal rule,Simpson's rule
    
    What should I learn after taking notes on: The Battle of the Bulge, also known as the Ardennes Offensive, was the last major German offensive campaign on the Western Front during World War II.
    What to continue learning: Allied invasion of Normandy,the liberation of Paris,Allied crossing of the Rhine,the eventual defeat of Germany
    
    What should I learn after taking notes on: a perfect fifth is the musical interval corresponding to a pair of pitches with a frequency ratio of 3:2, or very nearly so
    What to continue learning: perfect intervals,imperfect intervals,chord triads,diatonic scales
    What should I learn after taking notes on: {}?
    What to continue learning: 
    """.format(notes)
