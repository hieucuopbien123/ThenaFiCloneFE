import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import bgfooter from "src/assets/bg-footer.webp";
import bgpattern from "src/assets/bg-pattern.webp";

export default function MainLayout(props) {
  return (
    <div className="bg-violetbackground w-full h-fit">
      <div
        style={{
          backgroundImage: `url(${bgfooter}), url(${bgpattern})`,
          minHeight: "calc(100vh)",
          width: "100%",
          backgroundRepeat: "no-repeat, repeat",
          backgroundPosition: "bottom center",
        }}
        className="wrapperlayout"
      >
        <Header />
        <div style={{ minHeight: "calc(100vh - 250px - 88px)" }}>
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
