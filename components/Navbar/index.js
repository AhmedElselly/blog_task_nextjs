import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.css";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/router";
// import { isAuthenticated } from "../../actions/userApi";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const { asPath } = router;

  const categories = ["posts", 'about'];

  //   useEffect(() => {
  //     if (isAuthenticated()) {
  //       setUser(isAuthenticated().user);
  //     }
  //   }, []);

  const generateLinks = () => {
    return categories?.map((cat, i) => {
      return (
        <Link
          key={i}
          className={`${styles.link} ${
            asPath === `/${cat}` && styles.active
          }`}
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
      </div>
      {/* RIGHT */}
      {/* <div className={styles.right}>
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
      </div> */}
    </div>
  );
};

export default Navbar;
