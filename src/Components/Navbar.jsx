import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Connect <span>U</span></div>
        <div className="navbar_buttons">

          <Link to="/login">
            <button className="navbar_btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="navbar_btn" >SignUP</button>
          </Link>

        </div>
      </nav>

    </>
  );
}

// import { Link } from 'react-router-dom';

// export const Navbar = () => {
//   return (
//     <nav>
//       <Link to="/login"><button>Login</button></Link>
//       <Link to="/signup"><button>Signup</button></Link>
//     </nav>
//   );
// };
