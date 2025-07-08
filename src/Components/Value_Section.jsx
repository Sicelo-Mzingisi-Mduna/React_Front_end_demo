import React from "react";
import "../Component_Styles/Value_Section.css"
import Value_Section_Content from "./Value_Section_Content";
import Value_Section_Tabs from "./Value_Section_Tabs";


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
      <Value_Section_Tabs />
{/* ---------------------------------------end ------------------------- */}
      
    </div>
  );
}

export default Value_Section;