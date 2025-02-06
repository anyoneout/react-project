import React from "react";
import Nav from "./Nav";
import "./ResponsiveDesign.scss";

export default function ResponsiveDesign() {

  /*   const [didMount, setDidMount] = useState(false);
    useEffect(componentDidMount, []);
    useEffect(componentDidUnmount, []); */

  return (
    <>

      <main id="mainResponsiveDesign">
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

        <h1>Custom Column Sizes</h1>
        <li>Column Widths can be specified with 1 to 12</li>
        <div className="container">
          <div className="row">
            <div className="col-1">Column</div>
            <div className="col-1">Column</div>
            <div className="col-1">Column</div>
            <div className="col-1">Column</div>
            <div className="col-1">Column</div>
            <div className="col-1">Column</div>
            <div className="col-1">Column</div>
            <div className="col-1">Column</div>
            <div className="col-1">Column</div>
            <div className="col-1">Column</div>
            <div className="col-1">Column</div>
            <div className="col-1">Column</div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-2">Column</div>
            <div className="col-3">Column</div>
            <div className="col-5">Column</div>
            <div className="col-2">Column</div>
          </div>
        </div>

        <h1>Mobile Column Sizes</h1>
        <li>The column widths for mobile devices only</li>
        <li>Rows are automatically exceeded when widths exceed 12</li>
        <div className="container">
          <div className="row">
            <div className="col-6">Col-6</div>
            <div className="col-6">Col-6</div>
            <div className="col-6">Col-6</div>
            <div className="col-6">Col-6</div>
            <div className="col-6">Col-6</div>
            <div className="col-6">Col-6</div>
            <div className="col-4">Col-4</div>
            <div className="col-4">Col-4</div>
            <div className="col-4">Col-4</div>
            <div className="col-4">Col-4</div>
            <div className="col-4">Col-4</div>
            <div className="col-4">Col-4</div>
          </div>
        </div>

        <h1>Responsive Columns</h1>
        <li>Specify the column widths based on screen sizes</li>
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-3">Column</div>
            <div className="col-6 col-md-4 col-lg-3">Column</div>
            <div className="col-6 col-md-4 col-lg-3">Column</div>
            <div className="col-6 col-md-4 col-lg-3">Column</div>
            <div className="col-6 col-md-4 col-lg-3">Column</div>
            <div className="col-6 col-md-4 col-lg-3">Column</div>
            <div className="col-4 col-md-4 col-lg-3">Column</div>
            <div className="col-4 col-md-4 col-lg-3">Column</div>
            <div className="col-4 col-md-4 col-lg-4">Column</div>
            <div className="col-4 col-md-4 col-lg-4">Column</div>
            <div className="col-4 col-md-4 col-lg-4">Column</div>
            <div className="col-4 col-md-12 col-lg-12">Column</div>
          </div>
        </div>
      </main>
    </>
  )

  /*   function componentDidMount() {
      setDidMount(true);
      console.log("The component mounted");
      document.title = "React Project - Responsive"
      return componentDidUnmount;
    }
  
    function componentDidUnmount() {
      console.log("The component unmounted")
    } */

  /*   function componentDidUpdate() {
   */
}

