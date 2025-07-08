import React from "react";
import "../Component_Styles/Value_Section.css"
import Value_Section_Content from "./Value_Section_Content";
import Value_Section_Tabs_v1 from "./Value_Section_Tabs_v1";
import Value_Section_Tabs_v2 from "./Value_Section_Tabs_v2";


function Value_Section() {
  return (
    <div>
  {/* --------------------------------------- start------------------------------- */}
      <div className="w-element">
        <div className="w-element">
          <div className="w-element"><div className="w-element" /></div>
        </div>
      </div>
      <Value_Section_Content />
      <h3>************ Tabs_v1 ******** start *******</h3>
      <p>No background gradient on triggers and content(screen)</p>
      <Value_Section_Tabs_v1 />
      <h3>************ Tabs_v1 ******** end *******</h3>
      <h3>************ Tabs_v2 ******** start *******</h3>
      <p>has background gradient on triggers and content(screen)</p>
      <Value_Section_Tabs_v2 />
      <h3>************ Tabs_v2 ******** end *******</h3>

{/* ---------------------------------------end ------------------------- */}
      
    </div>
  );
}

export default Value_Section;