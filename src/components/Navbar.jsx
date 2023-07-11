
import { motion } from "framer-motion";
export default function Navbar() {
  
  return (
    <div className="cardClass sticky-top navbar-body  ">
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <motion.div
            
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
            className="navbar-brand text-dark "
          >
            <a href="/" style={{ all: "unset" }}>
              ProFit
            </a>
          </motion.div>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <motion.div
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  
                  className="nav-a active text-dark"
                >
                  <a href="/" style={{ all: "unset" }}>
                    Home
                  </a>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div
                  className="nav-a active text-dark"
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                >
                  <a href="/diets" style={{ all: "unset" }}>
                    Diets
                  </a>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div
                  className="nav-a active text-dark"
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                >
                  <a href="/sign-in" style={{ all: "unset" }}>
                    Login/Signup
                  </a>
                </motion.div>
              </li>

              <li className="nav-item">
                <motion.div
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  className="nav-a active text-dark"
                >
                  <a href="/contact" style={{ all: "unset" }}>
                    Contact
                  </a>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
