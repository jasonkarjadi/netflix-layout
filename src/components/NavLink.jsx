const NavLink = ({ children, href }) => {
  return (
    <a className="navlink" href={href}>
      {children}
    </a>
  );
};

export default NavLink;

// props = {link : "/browse", text: "beranda"}

// <div> parent
//  <button></button> children
//  <button></button> children
// </div> parent
