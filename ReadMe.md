![image](https://github.com/user-attachments/assets/58b3dbc9-d34c-459b-9165-0a6c97b27671)

# Polar Coordinates

In terms of the angle , a point on a unit circle can be written as $(cosθ , sinθ)$. For a general circle with center at a point $(a,b)$ , the coordinates can be written as $(a + rcosθ , b + rsinθ)$

<div align="center">
<img src="https://github.com/user-attachments/assets/16da8055-1537-4f3a-b009-064643ac428c" >
</div>

# Rotation of axes

<div align="center">
<img src="https://github.com/user-attachments/assets/132fbf4c-88cc-49cb-ab76-14b268f07736" >
</div><br>
This is the formula used to find the new coordinates of a point, when the entire coordinate axes system is rotated by an angle $θ$  

## Extra info: The proof of that formula 
![image](https://github.com/user-attachments/assets/6281ae7c-b0e5-49fd-a4bc-635b640f1629)
To prove this, we will use Complex Numbers
Let $z$ be a complex number representing the point B. Let the point B make angle $α$ with the origin x axis.
Hence, we can write $z = re^(iα)$
So, in the new set of axes, $z' = re^(i(α - θ))$

$re^(iθ) = rcosθ + risinθ$
So,
$z' = rcos(α - θ) + risin(α - θ)$
We know that $cos(α - θ) = cos(α)cos(θ) + sin(α)sin(θ) $
Also we know that if B has coordinates $(x,y)$ , 
$z=x + iy$, Implying $x = rcos(θ)$ and $y = rsin(θ)$

Hence, if $z' = rx' + riy'$ , 
$x' = xcos(α) + ysin(α)$

Similarly we can prove that $y' = ycos(α) - xsin(α)$
Further, this can be written in matrix form to get the equation :)
