import React from "react";
import Nav from "./Nav";
import "./ResponsiveDesign.scss";

export default function ResponsiveDesign() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main id="mainResponsive">
        <h1>Responsive Web Design</h1>
        <li>The number of columns don't change when screen is resized.</li>
        <div className="container">
          <div className="row row-cols-6">
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
          </div>
        </div>

        <h1>Mobile Row Size</h1>
        <li>The number of columns for small mobile devices only</li>
        <li>Doesn't add more columns for larger screens</li>
        <div className="container">
          <div className="row row-cols-2">
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
          </div>
        </div>

        <h1>Responsive Rows</h1>
        <li>Specify the max number of columns based on breakpoints</li>
        <li>The number of columns change for mobile-first, small and large devices</li>
        <div className="container">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4">
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
          </div>
        </div>
      </main>
    </>
  )
}