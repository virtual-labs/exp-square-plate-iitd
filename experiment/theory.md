### EXPERIMENTAL METHODOLOGY

<strong>EQUATION OF MOTION: CLASSICAL PLATE THEORY

1.1 Equilibrium Approach

</strong>

The small deflection theory of thin plates, called classical plate theory or Kirchhoff theory, is based on assumptions similar to those used in thin beam or Euler-Bernoulli beam theory. The following assumptions are made in thin or classical plate theory:

1. The thickness of the plate (h) is small compared to its lateral dimensions.

2. The middle plane of the plate does not undergo in-plane deformation. Thus, the midplane
remains as the neutral plane after deformation or bending.

3. The displacement components of the midsurface of the plate are small compared to the thickness of the plate.

4. The influence of transverse shear deformation is neglected. This implies that plane sections normal to the midsurface before deformation remain normal to the midsurface even after deformation or bending. This assumption implies that the transverse shear strains, &#949;<sub>xy</sub> and &#949;<sub>yz</sub>, are negligible, where z denotes the thickness direction.

5. The transverse normal strain &#949;<sub>zz</sub> under transverse loading can be neglected. The transverse normal stress &#963;<sub>zz</sub> is small and hence can be neglected compared to the other components of stress.

Some of the important relations and equations are summarized below for a rectangular plate (see Fig. 1.1).

Moment resultant-transverse displacement relations:
<br>
<img src="images/th1.png" style="" draggable="false">
<br>
where D, the flexural rigidity of the plate, is given by
<br>
<img src="images/th2.png" style="" draggable="false">
<br>

where h is the thickness, E is Young's modulus, and v is Poisson's ratio of the plate.

Shear force resultants:<br>
<img src="images/th3.png" style="" draggable="false" draggable="false"><br><br>
Equation of motion (force equilibrium in the z direction):<br>
<img src="images/th4.png" style="" draggable="false" draggable="false"><br><br>
where &#961; is the density of the plate and &#402; is the distributed transverse load acting on the plate per unit area.

<b>1.2 Variational Approach</b>

Because of assumptions 4 and 5 in Section 1.1, the state of stress in a thin plate can be assumed to be plane stress. Thus, the nonzero stresses induced in a thin plate are given by &#963;<sub>xx</sub>, &#963;<sub>yy</sub>, and &#963;<sub>xy</sub>. The strain energy density &#960;0 of the plate can be expressed as<br>
<img src="images/th5.png" style="" draggable="false"><br><br>
The strain components can be expressed in terms of the transverse displacement of the middle surface of the plate, w(x, y), as follows:<br>
<img src="images/th6.png" style="" draggable="false"><br><br>
The stress–strain relations permit stresses to be expressed in terms of the transverse displacement,
w(x, y), a<br>
<img src="images/th7.png" style="" draggable="false"><br><br>
By substituting Eqs. (1.10)-(1.12) and Eqs. (1.14)-(1.16) into Eq. (1.9), the strain energy density
can be written in terms of w as<br>
<img src="images/th8.png" style="" draggable="false"><br><br>

Integrating Eq. (1.17) over the volume of the plate (V), the strain energy of bending can be obtained
as<br>
<img src="images/th9.png" style="" draggable="false"><br><br>

where dV = dAdz denotes the volume of an infinitesimal element of the plate. Noting that<br>
<img src="images/th10.png" style="" draggable="false"><br><br>

is the flexural rigidity of the plate (D), Eq. (1.18) can be rewritten as<br>
<img src="images/th11.png" style="" draggable="false"><br><br>

Considering only the transverse motion and neglecting the effect of rotary inertia, the kinetic
energy of the plate (T) can be expressed as<br>
<img src="images/th12.png" style="" draggable="false"><br><br>

If there is a distributed transverse load, &#402; (x, y,t), acting on the plate, the work done by the
external load (W) is given by<br>
<img src="images/th13.png" style="" draggable="false"><br><br>

The generalized Hamilton's principle can be used to derive the equations of motion:<br>
<img src="images/th14.png" style="" draggable="false"><br><br>

Substituting Eqs. (1.20) - (1.22) into Eq. (1.23), Hamilton's principle can be written as<br>
<img src="images/th15.png" style="" draggable="false"><br><br>

where &#8711;<sup>2</sup> denotes the harmonic operator with<br>
<img src="images/th16.png" style="" draggable="false"><br><br>

Performing the variation of the first integral term in Eq. (1.24), we have<br>
<img src="images/th17.png" style="" draggable="false"><br><br>

By using the two-dimensional Green's theorem, Eq. (1.26) can be written as<br>
<img src="images/th18.png" style="" draggable="false"><br><br>

where C denotes the boundary of the plate, n indicates the outward drawn normal to the boundary, and &#8711;<sup>4</sup> represents the biharmonic operator, so that<br>
<img src="images/th19.png" style="" draggable="false"><br><br>

Note that the integration on the boundary &#8747;<sub>C</sub>
, extends all around the boundary of the plate.
Similarly, we can express the variation of the second integral term in Eq. (1.24) as<br>
<img src="images/th20.png" style="" draggable="false"><br><br>

Noting that the quantity under the sign of the area integral in Eq. (1.29) can be written as<br>
<img src="images/th21.png" style="" draggable="false"><br><br>

Equation (1.29) can be expressed as<br>
<img src="images/th22.png" style="" draggable="false"><br><br>

Using the relations<br>
<img src="images/th23.png" style="" draggable="false"><br><br>

Eq. (1.33) can be rewritten as
<br>
<img src="images/th24.png" style="" draggable="false"><br><br>
where &#952; is the angle between the outward drawn normal to the boundary (n) and the x axis as
shown in Fig. 1.1. The quantities &#8706;(&#948;w)/&#8706;x and &#8706;(&#948;w)/&#8706;y appearing in h1 and h1
[Eqs. (1.31) and (1.32)] can be transformed into the new coordinate system (n, s) as follows:<br>

<img src="images/th25.png" style="height: 350px;" draggable="false"><br> 

<img src="images/th26.png" style="" draggable="false"><br><br>

where s is the tangential direction to the boundary. In view of Eqs. (1.37) and (1.38), Eqs. (1.31)
and (1.32) can be expressed as<br>
 
<img src="images/th27.png" style="" draggable="false"><br><br>

When Eqs. (1.39) and (1.40) are substituted, Eq. (1.36) becomes<br> 
<img src="images/th28.png" style="" draggable="false"><br><br>
The second integral involving integration with respect to C can be integrated by parts using the
relation<br> 
<img src="images/th29.png" style="" draggable="false"><br><br>
where in the present case, g(x, y) is given by<br> 
<img src="images/th30.png" style="" draggable="false"><br><br>

Since the variation of displacement, &#948;w, on the boundary is zero, Eq. (1.42) reduces to<br> 
<img src="images/th31.png" style="" draggable="false"><br><br>

Inserting Eq. (1.43) in (1.44) and the result in Eq. (1.41), we obtain<br> 
<img src="images/th32.png" style="" draggable="false"><br><br>

The variation of the third integral term in Eq. (1.24) can be expressed as<br> 
<img src="images/th33.png" style="" draggable="false"><br><br>

By using integration by parts with respect to time, the integral I<sub>3</sub> can be written as<br> 
<img src="images/th34.png" style="" draggable="false"><br><br>

Since the variation of the displacement (&#8706;w) is zero at t<sub>1</sub> 𝑎nd t<sub>2</sub>
, Eq. (1.47) reduces to<br> 
<img src="images/th35.png" style="" draggable="false"><br><br>

where w = &#8706; <sup>2</sup>w /&#8706;t<sup>2</sup> .The variation of the last integral term in Eq. (1.24) yields<br> 
<img src="images/th36.png" style="" draggable="false"><br><br>

Using Eqs. (1.27), (1.45), (1.48), and (1.49), Hamilton's principle of Eq. (1.24) can be expressed
as<br> 
<img src="images/th37.png" style="" draggable="false"><br><br>

To satisfy Eq. (1.50), each of the three terms within the outside parentheses must be zero.
Furthermore, since &#948;w is arbitrary, the expression inside the parentheses under the area integral
must be zero. This leads to the relations<br> 
<img src="images/th38.png" style="" draggable="false"><br><br>

It can be seen that Eq. (1.51) is the equation of motion for the transverse vibration of a plate and
Eqs. (1.52) and (1.53) are the boundary conditions. Note that for a clamped or fixed edge, the
deflection and the slope of deflection normal to the edge must be zero (Fig. 1.2):<br> 
<img src="images/th39.png" style="" draggable="false"><br><br>

Thus, &#948;w = 0, &#8706;&#948;w/&#8706;n = 0 in Eqs. (1.52) and (1.53). For a simply supported edge, the deflection
is zero and the slope of deflection normal to the edge is not zero (Fig. 1.2):<br> 
<img src="images/th40.png" style="" draggable="false"><br><br>


Thus, &#948;w = 0 in Eq. (1.53) and &#8706;&#948;w/&#8706;n is arbitrary in Eq. (1.52). Hence, the expression in braces,
which will later be shown to be equal to the bending moment on the edge, must be zero. For a free
edge, there is no restriction on the values of w, and &#8706;w/&#8706;n and hence &#8706;w and &#8706;&#948;w/&#8706;n are
arbitrary. Hence, the expressions inside braces in Eqs. (1.53) and (1.52), which will later be shown
to be equal to the effective shear force and bending moment, respectively, on the edge, must be
zero.<br> 
<img src="images/th41.png" style="" draggable="false"><br>
<img src="images/th42.png" style="" draggable="false"><br>
