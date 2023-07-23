import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { isAuthenticated, logout } from "../../actions/userApi";

function Navbar() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const { asPath } = router;

  const categories = ["posts", "about"];

  useEffect(() => {
    if (isAuthenticated()) {
      setIsAuth(true);
      setUser(isAuthenticated().user);
    }
    // console.log(isAuthenticated())
  }, [router]);

  const handleLogout = () => {
    setIsAuth(false);
    logout();
    router.push("/login");
  };


  const generateLinks = () => {
    return categories?.map((cat, i) => {
      return (
        <Link
          key={i}
          className={`${styles.link} ${asPath === `/${cat}` && styles.active}`}
          href={`/${cat}`}
        >
          {cat}
        </Link>
      );
    });
  };
  return (
    <div className={styles.container}>
      {/* LEFT */}
      <Link href="/">
        <div className={styles.logo}>AstroPhy</div>
      </Link>
      {/* MIDDLE */}
      <div className={styles.middle}>
        <Link
          className={`${styles.link} ${asPath === "/" && styles.active}`}
          href="/"
        >
          Home
        </Link>
        {generateLinks()}

        {isAuth && (
          <Link
            className={`${styles.active}`}
            href={`/create-post`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 150,
            }}
          >
            Create post
          </Link>
        )}
        {!isAuth && <Link
          className={`${styles.link} ${asPath === "/" && styles.active}`}
          href="/login"
        >
          Login
        </Link>}
        {!isAuth && <Link
          className={`${styles.link} ${asPath === "/" && styles.active}`}
          href="/register"
        >
          Signup
        </Link>}
        
        {isAuth && <div
          className={`${styles.link} ${asPath === "/" && styles.active}`}
          onClick={handleLogout}
        >
          Logout
        </div>}

      </div>
      {/* RIGHT */}
      {/* <div className={styles.right}>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div> */}
    </div>
  );
}

export default Navbar;
