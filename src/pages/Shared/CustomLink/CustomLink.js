const { useMatch, Link, useResolvedPath } = require("react-router-dom");

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      style={{ color: match ? "#2ecc71" : "#000", textDecoration: "none" }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}
export default CustomLink;
