import { Package, MapPin, Truck, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    icon: Package,
    title: "צעד הראשון",
    description: "יש לבחור מבין כל החברות האהובות עליך בחו״ל (כן אנחנו יודעים שהבחירה קשה)",
    color: "from-red-500 to-red-600",
    imageUrl: "https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMGJveGVzJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2MzM3NzAxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    dualImages: [
      "https://martinroll.com/wp-content/uploads/Uniqlo-The-Strategy-Behind-The-Global-Japanese-Fast-Fashion-Retail-Brand-Martin-Roll-1.jpg",
      "https://parade.com/.image/w_3840,q_auto:good,c_limit/MjEyNjQ3NTgzMjg0MjA5Mjgw/banana-republic.jpg",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIWFRUVFhUVFRcVGBUVFRUVFRUWFhUWFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQGi0dHR0tLS0tLS0tLS0tLS0tKystLS0rKy0tKy0tLSstKy0tLS0tLS0tLSstKzcrLSstKzctK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEoQAAECAgUEDQgKAQMFAQAAAAEAAgMRBAUSITFBUZLRBhMiI1JhcXKBkbGy0hQWMzNCU6HhFSRUYnOhorPB8DRDg+IHY5TC8aP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAQEAAQUAAQUAAAAAAAAAARECEgMTITFBUQQyYXHR/9oADAMBAAIRAxEAPwDI0usXlwLXOaLLQQHxCCQJF26cSJ5sig8uiD/Vfpuu+KsjUrOG/wDTqSFSQ792/wCGpePw6evz5AmmRMdseRl3TsvSo4lJf7x1+BtOVqKoZKVt/wCnUuGpoZutO/TqTw6PPlT+UvPtumPvFG1XWjobiXWnCUjeZgEiZHGOwokVJD4b+tupIVKwGYe/9OpWcdRL3zVh9MQ8pcOIjHixkqKsqQXEuYXNANwmcMh4r53casvotkpWnXc3oyJGqmSladm9nUr1O+vtOfDn6VVDpJIEycZG84Ow1Jj3uBIJOOc8hKs4dTsHtv626k+LVbCZ2nfp1LPt9Ne5ypXRncI3C+8zuTGR3EemcoxPKrp9UwyZ2n9bc0uCo21NDwtP62+FPb6Pc5V8WM7hHAHE5VGykET3R9nKc5Varh8J2AGLcnQo3VPD4T+tupPb6Pc5VrqQZekcuU51PGjmTRORaCCQXTfMztOmSJjC6SKNTw7t0+7jbqXTVTOE/rbqT2+jz5AwIjiPSOTKeUrroxwtGfKcpR7atYBKbusak01WzhP626k9vo9zlWxKQR7Ry5TyBMbHdwj1nAKxdU8PhP626lxtTwxfafdzfCnt9HnFfFpDhdbPWelRwaW7G27rOKsnVKw+2/9OpOFTQ5Stu/TqT2+jzivocaI93pukLzujhk61q6nornSLiTPOSbLenKdSzUCGWUgQhe0vbOeJBYDK7jW+orLDeM46l245xx9TrRgkBIYBcLlAYqaYq6OaYuTbShMVNMVBOXJpcoDETTERE5cuWkOHSu+aeKSbJZdIkE3Cd2F+IHEgfaXLSHMRcD+NUEWklDtwSQZk7M6H7t+j/yXPPSie6fo/wDJYaw7gnqK7tbuC7qKuDc+e1E90/R/5LvnvQ/cxNEeJYUQncB2idSRgO4DtE6kw1uvPeh+5iaI8S7570P3MTRHiWCEB/AdonUumC7gO0TqUw1uzs2ofuYmiPGuee1E9zE0W+NYQwncB2iUtofwHaLtSYa3XnvRPcRNFvjTfPiifZ4mizxrEbQ/3b9F2pLyWJ7t+g7UmGtsdm1E+zxNFnjS89aL9niaLPGsUKNE92/RdqTjRYkvVv0XakyG1sfPai+4fos8SQ2bUb7O/RZ4li/I4vuomg7UntokX3UTQfqTIa2PntRvs79FniS89qL9nfos8Sx3kcX3UTQfqXPIovuomg/UmQ1sTs2ov2d+izxLnnrRfs79FviWPNCi+6iaD9S4aFF91E0H6kyGtkNmtE+zv0WeNLz1on2d+i3xrGihxfdRNB2pLyOL7qJoP1JkNbLz0on2d+i3xp0PZlQyROA8flHjWKNEi+6foO1LjaK+Y3DsR7Ls/ImQ1rW7JYcKMYkSE6+9jWSIbkvmRfKSKds+g+7i6LfEszXkFxc2TXG44AnKq0wH8B2i7UpJ8Lftt/PyD7uLos8SR2dwPdxdFnjWI2l3Bd1FNLDwT1FXEbg7OoHu4uizxrg2cwOBF0W+JYchcLgmDdee9H4MXRb4kvPaj5omiPEsJaGdKYzhMG789aP/ANzRGtLzzo/39H5rB2hnC5MKje+eNHzv0fmmnZfR87tFYMyzppkmDfed9Hzu0SksFMJIPVhEdwTpJsSK8Cdk6SfCc3KOQz4+RE7Q02RhO6c7hM44K+DHmDZFcfZPWnyfwfiiqfRmwxIFr9y4za4OFzSReORV8GMCWiWM538Snivkc5zwZWOo/NPaHZvigDELpm1Zl94AkX4TN675YDgD1rLSeixnPZbs5XDHguLf4T2OcfZI5T81V1TG3touvc+8nCcR15R9IhmE4hz2PnIgtex4A5WzHQh8pzazf3rUYiE+yVAIsyBclJm0TmS7CnUxhhu0km0k0aF5xcVKPX3rpgZ0NSBg8rkadFEuyjZS+1xAlvN2EeRYFMFtm5dJwDJSm+bfHJHRE/TqQAaZiBfnwjoDCwbPnJZxG2oaNr6Gqo84cqC4TZBrQkDHGkaw7lEzq586OAaK+JOyArrXlgQDKfpwQE3tBqU2zeCQBMpTdqMKUxq44hVZYMpVwkgoBCxkQaB6/NpzDgg+HkI7CynkThzQ2qYlxXu2h3LZEuCOqOHzlMLTUtpNp82fXxEhQTxXATN5wmhpXLVs2RLcHt40VvtN1I5aDlgZYZUVN0h3cXxn5SRrUPknLMu2cOHH/wBt/sVKq0z6Rz9YRW22y2X5d61iZ+8YLHJWp+MzeXzORAhekOj1orH4zpJwG/rwQ5XUsWrA1A5MoCNJdF5paUjd5g0AUVtGGdz3RByj4lCtsj4szyq08UdFldJNjOI0bWBcMYJZy0ZR39R+NV/rJoB2kUgBSSUqvSAIJGOeWeqL+n2U0OMxvxd5KzfuxHVLmOdVB1qmgp+LhIugpBAJutpFd5XAnWgPdHXtpebFmxQbhSfaXcL/ANKxcaRaORnON2gMt3Y1aIppO8mmjRR0b+7pZGNxp+lcTdP9eKJspYTyETvSS3tgTN+ySKYQGvSBt7g3pLOFVCvZxRlsPklONdXN+9tz/vhvCFg8SNNrCk/lPPu8u6LiazFxpG0LGGKg0gdJPRD1PtZhpwdeb+mF28/nCSKgbpA0A0RNPnB3x7sOIXzb/ZVm21+0Sn+HCbRYgA3hAvX75lz+DnX+lD3Qhx8QW2bJN8lWhJH3MauXpnAV1vD8xbHDdB/yXN1q/GZuP5F1b7ykF2+CQG6K4qOeFO1vvKTYsu2Bp9L8r9H9m2t9KYUm1GMtpmXPwC2spCfGO7F2unEq/v5wqZluNpz+rqhv/V0WvC+7oX+sOiluKDaVS/E7c7owm/8AJ7nxuVxWjTJaI1VVNrc1pIZ3L7o1kAiCG1LRddSrOnbq/FWZpLHEj6FaWDTAQTsW7H/kULY1nIbacdX4phpVVGdHUAHARE0bHOkYumkBQN10VXpI9m2LH9Js8rSB0qLyGszpbCHByIFIWsZpMO0n+S5bxpwCWl0w/bDTziXBzopLFRH97sP/AJD+Uq7c0pme/s0e51v5Sqh6slqNVuOoSaOJIHRBohf+ozk96M3XABtGQOq6A2V/gZWNNgU1eqZdI/tviDfRJ7o1gipgY0vI0+0YT3LuhMo4rH+sHh0y0fxEkdhpdIPxiG/ikBB3NLxmTMiMy1dExdO6I7qD76VvH3CeJ1X8z98aNLLbUkgzSO6dAO9OUDmz2WItJBmN0dQODyfaGvajHfHZujOqPfPXFT1OP++Zx/hH8wjrzJUc/wCOeObYEsN7pB+Rg+8lsRWtnF/vJlkdDEuX/b0q8kn7JaNqSdJqQ6Edb2y7c0j8w/lMCMPqm2j73eR2Rq/1WbIpWkNH5m0cjTK7eUfkz/GZuqnBNe2kFQPY3lIFUEk3aVm9FYljKemXGr9ub0RO1J/wO/8AC0/lUZoxP/Lxz/CR3TIsTyUegvwR3TI6YmPRM+R03wGv2hDS3O/u8i/MmqzkdETV0Jv3PNJxQEEDRJvLlE/lHRE1VmJ78eNHmidZqPyb6/z/ANuJS/D6d9/fP/bjoW41f5/7nDqWl1zQ9Zs5Fdwh3UlbdEA+TM/VRkJVdZzHgZ15YqkqexHEptKdJSq5uidC/dEXx4Ly3rpFZ/WV/Eb4JWlNuqJ3RlwGgxcKlLgJpAJvAkTnLDBRUe0t0TfmQ7bV/u4mxXJr/Qj/AGeNZkTLGJRHRHSBnfXrUSbJJnhnnTNB5opUJsI41UYGy1bDxcExVGE/w+kN+qBbZc5MVp9IUy0IYu0+8nH7mWvfZIpqJRCpV6YI3SBWU5ytC9hWVjC0xXA7nJIJnhhhHQ2YupnfyZM/Ud70W6kqMKWtGfJXZhCZlm8LjG9bnvt7w5pltqdH5hPcm5Ffc0kZ1qW+Fp09qP5RL+hVq7Qz/J+Yb+6L+kTvHH5v70VBVbSH35ZXHuQIlKtKHxH+E3o7I9dV1HF7wuTjfkjhtCb+lLlM+lZH/WP1tfo1Ss5N9Wl3eH/kUrpA/wBRH/HHdFPXdBFfoelwj36vJbO/H/6J/R6RPxg0OEL6t33+5A1CsWkqkA6Qfhu6pifRexz8cfNk/wD1WJNmN+Ht/R/m97pFW2DFdR4pYeTEYtJySVY3VVUG0T8TfhO6hiFSLEiVg2JvjAm44qwW3KUKUi+oP/dv6dqCn0qTdpcH/Q/uiGi9oMwaTRw6sbTnNItEycB2woVMskk+XAXpTvqoRTbGdNvybpnO6aYZxVTQ/CHF/wBv903R6fxwV5zX5vdhH0LjN01pXgQ5sqBZOscvAn9M7tV1a0wH8B2i7UuzadISK4gHeOC5z3ZV2wtK80cWsEKF5bvdJuJxmRfN3KgC1tWcuODk+hS1rXEzDVTzvl7UG8TuATeBxKRMZScgdQ5osNFJq46xtgDm3kGd4n0iMqCKTKCakNKSe/X0QENoVIaI0UZ7hG/e5JzLMo8Nsh2JN1I76qXBEnLmiFpLZxF65SakjQ/wW/NNDOlD3xZ7H+0fxAQHZcpvXSuzkqgSmUftP/0/mSXjT4f+p/UD1PJR8sJ7LkjoTtJxuU40/QVBuFHypOtJuzb+jLCmyHZZ+05f4b/0yxKKhaMbqLJSbIZ8/P8A0hVoLvTd5NX8oUlkdtfg0+gxpdo/1AJbk71RwqwrWgRaReU24pDRMAJXqb0NJFaKMxV9/F1SaO7C3gj+E2RtU6rJihUB8F5qSrCpnebOpI0+Y51UtBtEJLW5EJFRYtWkFtJkK+Uw5v8AzZe4g1atR7YkZ2V5xumP6ioipWoKw4CL4/LviVZN7dhXMn++eBXM9OJlQnq6f9Rb+X/lhVrUnC+u82f80RmI3r/Vr/KFYVWDvv7w/ltgGxVmSfx38vfRYUnf1/vRpq81ZVbEAvu73E9j+kqoWXD31sfjn+aBjp2yY0OKWqqLQSBeAkVEzEytS6c8eaNEslwOAjYSlhThPUqx3Q12xN9Yr7qsPJo6xLaHIxOWBVlrPFtC2fOqX+K/mUTKyb4/Cz05HJv5k4aLr/ywN/Hr3rJzq/eBMy3S3hJXL/lCp+wM1WY+fF/Tfr/9KWz/AGH/AO4z+n/yq5q9kE2hTaSVLaW24dj33ZPaVZVdQoO+sqrwn/f/APqmHXu16zfOidE5Yn9aBui+MfPX+xUHk8vnHFRR/RJtVR66CL3LW9MPBfmr+W1ZjnS+i80s0mF9Xj3p7o9z4X9Y3f06lAh0m0P1W+D/AHqSgOdIuKOvbY6pfIuuKPOb/P8A/wBnU5WtcBv+w/8A33q7b0H0X+SamNS8bCBu0aDEvFG8l5nWu7Y/i8eLojmUZb1OMxwpDz6seTNPyeFwdKrzV7OWRi7NE2Y3PEyxRtPol3OFRQ5Ll96Z4T+mIUFyuKHNS1mfCPHWLGyJJl1U/tP/AMkTZfO+U/8Av/fxRPqJ8jWDx/xQh/Sd8gDxvGq4Y1OtrZ03wj/Kq+D2LpP8rMxKTvbz5ZVXDPQn+F2GIdL/ACOfiH/kiSq+G0Ak80Q0c4n2NJPGqj7gTbr/AOU3q8rxBj6T8Gk8evNUMaHR2iJ5S71lY1Sz0m9kX/Nd0jNV9oq/GcR/7rjJXf8AERrpfDgPFKbmn/iDdZG+DfqNRdHi/C++W03/ALhVYL2x/wBT+8v+9E2iE+U/vJx/6qtgeuHgu7Gu/jUjB+3+8T/6qs8T4lTNc+Sz0q2HJRQ26yB5nqscG+j5+6CpKjJ37w70Rau3lKytM/w4P4T+tGVccmYdGiXNUOfQP/kW/jP600UdH9P+x/X14KdaZzmPk0Q/j0j8z/5UT6O90PyJ/wD+PsR1lfl/hqA/NcPAK0+DPp5r9/u/9I6zL/ksuOj23AYlKZMZ0an8hDRJ+0PBKdVr9ZBdA/VN07e9O6lnFfN8r/tU1HvNL/g/yPSmg/pOQf8AI0SgFr/c/Ee+rjzJ/Z/hf8qOb4//APMh/T/3p0EPWX/lj/8AYiISun5/Oj/5Qj5XflH7Q/loI/NVHzH5Ifj+fTlCgf8A1Yz/ACH+dEUb0/R/yIhj9s/k/wC78oyh9l8CfdT0r9nzSE75/vf8cD0Oaf2OGp+7oX7D+B/vP/jjoXNj/B4X04KFa1GsEhYS7tggzF9pNQCQsG+p+T0gO6TSsz7Dq3wGtc+0zovYqykl2d0JJ3WV0KtbWUlpQqUx7/5MzO7hDd6ycJV1/FI1RFkzMqSlShJuV1VEEbkmauBGrUJ+2PLLGIxKS8FO+pf1Gj+S3R+fF3//AKh/OiyXfcVvhv64jQuytHJC9X+Y1THr2f5kDR57m2k7hEY/kqnU3Yfx9HuxItN+G8/h/wCpO0cbe+rfD/1RdQrz/wC3/iVHpMb0BoJ/RA6ITY43zoj/AA/9xE2qd+fhvI/xoij3ve/+5/QlRdvb+5+pZaWiVB/0VIrO6m//AHlQW1t3M/nf0R3Q/f8A2jf4EBsF0dP3+PcVKHZ2keD7KiFBpPx4fip+9YJeXUfNwOaXK0Bf1b24cNv8lKhof+5j5OXvxXsY/wBQPD/Qp03W/f8A/cPdKC/qfvT9H96Ff/H+W2Iz6PvI+cv+JtqOFyf/AKiL0cAZh7T+xWg3vy8h9aIrCqc/dfe/iiohv3m37Q94pK2GlGsjI31fRr5O/wBK5VH0f+Vn7S0f0TcH5nxP3ozqLvnhfxChA2vPxfPu/tMVlQd58X/q/wDW1Xej1l4hV/p/+tqvNH5QnU70//W1EvIZbpCx+E/piGid+g/hj+dqO0dEpCv5v7uiqyDj0feL5kl61JxX9XRO3M+cJWj/AGB0/uoEHf8A+7f8UNSP0v8AxM/lhKjxPSGqv/KCMjKLu1Hv/hKdRDvvj+6RBFBxmBwUYTD9P/l/Onwtf+lH8wQ86Dj+r+5RFbNwLf8AwM/ljoYGGsOfiKkRFvTmKR8oI/8AN/wJ/wCEMOTvgqUxWg57xvgcokqb3RoqidUw7U/dD5M2vvVOgk9b/df9q91Jfq0DzR+9KBmj3L/0n6qn5aLdcPfMI0b8x3V/gp/ktO7EHm/wRNY0G18Y7B/4/wB6JtHu08HH+BoiHBo9rXGP4I6PBo9rXGP4I+OflR//2Q==",
      "data:image/jpeg;base64,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",
    ],
  },
  {
    icon: MapPin,
    title: "בחר נקודת איסוף",
    description: "בחר את נקודת האיסוף הנוחה לך מתוך מאות נקודות ברחבי הארץ",
    color: "from-orange-500 to-orange-600",
    imageUrl: "https://images.unsplash.com/photo-1754299356969-2b7d4ffefd9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhdGlvbiUyMG1hcCUyMHBpbnxlbnwxfHx8fDE3NjMzNzcwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Truck,
    title: "עקוב אחר המשלוח",
    description: "קבל עדכונים בזמן אמת על מיקום החבילה בכל שלב של המסע",
    color: "from-red-600 to-red-700",
    imageUrl: "https://images.unsplash.com/photo-1759671934974-a4928e049dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrJTIwdHJhbnNwb3J0fGVufDF8fHx8MTc2MzMwNzQ3OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: CheckCircle,
    title: "קבל את החבילה",
    description: "החבילה מגיעה ליעד במהירות ובבטחה עם אישור משלוח דיגיטלי",
    color: "from-green-500 to-green-600",
    imageUrl: "https://images.unsplash.com/photo-1606295835125-2338079fdfc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwcmVjZWl2aW5nJTIwcGFja2FnZXxlbnwxfHx8fDE3NjMzNzcwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

// SVG Arrow Component with playful curved path
function PlayfulArrow({ index }: { index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative h-24 w-full flex items-center justify-center">
      <svg 
        className="w-full h-full" 
        viewBox="0 0 200 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Playful curved path */}
        <path
          d={isEven 
            ? "M 100 10 Q 120 30, 100 50 Q 80 70, 100 90" 
            : "M 100 10 Q 80 30, 100 50 Q 120 70, 100 90"
          }
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="5,5"
          className="animate-dash"
        />
        
        {/* Arrow head */}
        <path
          d="M 100 90 L 95 80 M 100 90 L 105 80"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Decorative dots */}
        <circle cx={isEven ? "120" : "80"} cy="30" r="3" fill="#EF4444" opacity="0.6" />
        <circle cx={isEven ? "80" : "120"} cy="70" r="3" fill="#F97316" opacity="0.6" />
        
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>
      
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -10;
          }
        }
        .animate-dash {
          animation: dash 1s linear infinite;
        }
      `}</style>
    </div>
  );
}

export function ProcessSteps() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">
            איך זה עובד?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            תהליך פשוט ומהיר שלוקח רק כמה דקות - מהזמנת המשלוח ועד קבלת החבילה
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-0">
            {steps.map((step, index) => (
              <div key={index}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-red-500">
                  <CardContent className="p-0">
                    <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                      {/* Image side */}
                      <div className={`relative h-64 md:h-auto overflow-hidden ${index % 2 === 0 ? '' : 'md:col-start-2'}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 z-10"></div>
                        {step.dualImages ? (
                          <div className="grid grid-cols-2 grid-rows-2 gap-0 w-full h-full">
                            {step.dualImages.map((img, imgIndex) => (
                              <ImageWithFallback 
                                key={imgIndex}
                                src={img}
                                alt={`${step.title} - ${imgIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                            ))}
                          </div>
                        ) : (
                          <ImageWithFallback 
                            src={step.imageUrl}
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                        {/* Step number overlay */}
                        <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                          <span className="text-2xl text-red-600">{index + 1}</span>
                        </div>
                      </div>
                      
                      {/* Content side */}
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className={`flex items-start gap-6 ${index % 2 === 0 ? 'flex-row-reverse text-right' : 'text-right'}`}>
                          <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                            <step.icon className="w-8 h-8 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="text-2xl mb-3">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <PlayfulArrow index={index} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}