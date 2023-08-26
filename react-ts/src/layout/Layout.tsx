import Educations from "../components/Education";
import Topbar from "../components/Topbar";
import About from "../components/about";

const Layout = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {" "}
      <Topbar />
      <About />
      <div>
        <Educations />
      </div>
    </div>
  );
};
export default Layout;
