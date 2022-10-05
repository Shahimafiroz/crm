import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
  LineChart,
} from "./components";

import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  ColorPicker,
  ColorMapping,
  Financial,
  Editor,
  Pie,
  Bar,
  Line,
} from "./pages";

import "./App.css";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* div for settings icon  */}
          <div className="fixed right-4 bottom-4 " style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover: drop-shadow-xl 
                hover: bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "20%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* SI end */}
          {/*  Div for Side bar */}
          <div>
            {activeMenu ? (
              <div className=" w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className=" w-0 dark:bg-secondary-dark-bg">
                {" "}
                <Sidebar />{" "}
              </div>
            )}
          </div>
          {/*SB end */}
          {/* div for navigation bar */}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "  md:ml-72" : "   flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              navbar
            </div>
          </div>
          {/* nav end */}
          {/* routing div */}
          <div>
            <Routes>
              {/* dashboard routing */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              {/* Accounts */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />
              {/* productivity */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/colorpicker" element={<ColorPicker />} />

              {/* graphs */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
          {/* </div> */}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
