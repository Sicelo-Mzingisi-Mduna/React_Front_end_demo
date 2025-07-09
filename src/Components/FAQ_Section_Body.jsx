import React from "react";
import { Accordion } from "radix-ui";
// import { ChevronDownIcon } from "@radix-ui/react-icons";
import "../Component_Styles/FAQ_Section_Body.css"
import FAQ_Section_Body_Content from "./FAQ_Section_Body_Content";
import FAQ_Section_Body_Accordion from "./FAQ_Section_Body_Accordion";


function App() {
  return (
    <div>
  {/* --------------------------- start------------------------------- */}
        <div className="w-element">
          <div className="w-element">
            <div className="w-element">
              <div className="w-element"><div className="w-element" /></div>
            </div>
          </div>
        </div>

        <FAQ_Section_Body_Content />
        <FAQ_Section_Body_Accordion />

  {/* ---------------------------------------end ------------------------- */}
      
    </div>
  );
}

export default App;