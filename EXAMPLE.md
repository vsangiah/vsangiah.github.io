
# **toolkit.f90**: a set of functions and subroutines for numerical computation in _Fortran 90_

#### by Borja Petit (CUNEF)

<br>

This code can be freely used and distributed. If you find any error, or have any suggestion, please contact me at [bpetit@cunef.edu](mailto:bpetit@cunef.edu).

**Note**: All real numbers in this code are defined as `DOUBLE PRECISION`.

---

## <a name="index">List of functions and subroutines</a>

- Algebra

 - ```VECTORIZE```

 - ```DIAG```

 - ```MULMV```

 - ```MULMM```

 - ```TRANSMAT```

 - ```INVERSE```

- Numerical optimization:

 - [```LMMIN```](limmin): Levenberg-Marquardt algorithm for solving a system of non-linear equations

 - ```SIMPLEX```

 - ```JACOBIAN```

 - ```BROYDEN```


---

###### <a name="limmin">Levenberg-Marquardt algorithm for solving a system of non-linear equations</a> [back](#index).
<br>

**Symmary:**
This subroutine solves a system of _M_ non-linear equations with _N_ unknowns, with potentially _N<M_. The Levenberg-Marquardt algorithm is a least-saqures monimization routine that lies in between the Gauss–Newton algorithm and the method of gradient descent. It includes a damping factor that makes it more robust than the Gauss–Newton algorithm to the choice of the initial guess. You can find more information [here](https://en.wikipedia.org/wiki/Levenberg–Marquardt_algorithm).

**Syntax:**
```
CALL LMMIN(FUNC,X,Y,IY,IND,X0,ITERMAX,DAMP,TOL,SHCK,USEBRO,IPRINT
```

**Outputs:**
- `X` (double precisions): vector that minimizes the function of size _N_
- `Y` (double precisions): value of the functionat the minimum of size _M_
- `IY` (integer): number of function evaluations
- `IND` (integer): indicator variable for the convergence criteria

**Inputs:**
- `FUNC` (function): function to be minimize of the form:
```
FUNCTION FUNC(X) RESULT(RESID)
     DOUBLE PRECISION               :: X(:)
     DOUBLE PRECISION , ALLOCATABLE :: RESID(:)
     ...
END FUNCTION FUNC
```
- `X0` (double precisions): vector with the initial guess of size _N_

**Optional inputs:**
- `ITERMAX` (integer): maximum number of function evaluations (optional, default = 500). Posible values: any positive integer.
- `DAMP` (double precisions): damping factor (optional, default = 1). Posible values: any positive real number.
- `TOL` (double precisions): tolerance factor (optional, default = 0.00000001). Posible values: any positive real number.
- `SHCK` (double precisions): shock to compute the jacobian of the system (optional, default = 0.05). Posible values: any positive real number.
- `USEBRO` (integer): indicator of whether to use Broyden method to update the jacobian if it is set to 1 (optional, default = 0). Possible values: 0 = recompute the jacobian numerically at each iteration; 1 = update the jacobian using Broyden's method.
- `IPRINT` (integer): indicator for printing results (optional, default = 0). Possible values: 0 = the program does not print any result; 1 = the program prints the initial and final iterations; 2 =  the program prints every iteration.


It is important that you define the output of `FUNC`as `ALLOCATABLE`.

**Notes**:
- There is no need to specify the number of unkonws _N_ nor the number of equations _M_
- It is important that you define the output of `FUNC`as `ALLOCATABLE`.

**Dependencies**:  `JACOBIAN`, `BROYDEN`


```
  DOUBLE PRECISION , INTENT(OUT)           :: X(:),Y(:)
  INTEGER          , INTENT(OUT)           :: IY,IND
  DOUBLE PRECISION , INTENT(IN)            :: X0(:)
  DOUBLE PRECISION , INTENT(IN) , OPTIONAL :: SHCK
  DOUBLE PRECISION , INTENT(IN) , OPTIONAL :: DAMP
  DOUBLE PRECISION , INTENT(IN) , OPTIONAL :: TOL
  INTEGER          , INTENT(IN) , OPTIONAL :: ITERMAX
  INTEGER          , INTENT(IN) , OPTIONAL :: IPRINT
  INTEGER          , INTENT(IN) , OPTIONAL :: USEBRO

```
