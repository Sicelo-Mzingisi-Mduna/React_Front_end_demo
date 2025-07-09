import React from "react";
import * as Accordion from "@radix-ui/react-accordion"; // corrected import
import "./Test.css";

function App() {
  return (
    <div>
      {/* --------------------------- start------------------------------- */}
      <Accordion.Root
        defaultValue="item-1"
        type="single"
        collapsible
        className="w-accordion"
        data-orientation="vertical"
      >
        {/* Item 1 */}
        <Accordion.Item value="item-1">
          <Accordion.Trigger
            className="w-item-trigger c17s3srt c1qk8tr0 czhmlg cs1dg1y c1wr5t15 c1xl7rdr c1g5txgq cb5gdj3 c13an6qd c3tuc1o c1fa9t26 cvubeyy c1or2fm7 cbp56o5 c1tosfr5 cgt9zz4 c49x0c7 c1pjj69s c1pffa1d cxfzo7d cwr7eqp c1ajerut c9tvn26"
          >
            <div className="w-text c1alm8rx cmuzm2h c1s8mw8h c1jy7n11 c1feb0u7 cptw6lb">
              1. What is Neuro's and how does it differ from other analytics
              platforms?
            </div>
            <div className="w-box c1je0yw8 c1qjqynw c1xmwae2 c1wf2jh4 c1twibre c1sffrl0 c1scdndq c1hjq8pu critdah">
              <div className="w-html-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  width="100%"
                  height="100%"
                  style={{ display: "block" }}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4 6 4 4 4-4"
                  />
                </svg>
              </div>
            </div>
          </Accordion.Trigger>
          <Accordion.Content
            className="w-item-content co0vv7x c1kbbfij cq1j38b cmuzm2h c1twibre c8etcqd c1scdndq c1hjq8pu critdah cptw6lb"
            style={{
              "--radix-accordion-content-height":
                "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width":
                "var(--radix-collapsible-content-width)",
            }}
          >
            Neuro's is an AI-powered business analytics platform designed to
            provide real-time insights, predictive analytics, and seamless
            integration with various tools. Unlike traditional analytics
            platforms, Neuro's harnesses the power of artificial intelligence
            to offer more accurate forecasts, customizable dashboards, and a
            user-friendly interface tailored for businesses of all sizes.
          </Accordion.Content>
        </Accordion.Item>

        {/* Item 2 */}
        <Accordion.Item value="item-2" className="w-item c16tgxou">
          <Accordion.Trigger className="w-item-trigger c17s3srt c1qk8tr0 czhmlg cs1dg1y c1wr5t15 c1xl7rdr c1g5txgq cb5gdj3 c13an6qd c3tuc1o c1fa9t26 cvubeyy c1or2fm7 cbp56o5 c1tosfr5 cgt9zz4 c49x0c7 c1pjj69s c1pffa1d cxfzo7d cwr7eqp c1ajerut c9tvn26">
            <div className="w-text c1alm8rx cmuzm2h c1s8mw8h c1jy7n11 c1feb0u7 cptw6lb">
              2. Is my data secure on Neuro's?
            </div>
            <div className="w-box c1je0yw8 c1qjqynw c1xmwae2 c1wf2jh4 c1twibre c1sffrl0 c1scdndq c1hjq8pu critdah">
              <div className="w-html-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  width="100%"
                  height="100%"
                  style={{ display: "block" }}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4 6 4 4 4-4"
                  />
                </svg>
              </div>
            </div>
          </Accordion.Trigger>
          <Accordion.Content className="w-item-content">
            Yes, Neuro’s implements end-to-end encryption, regular audits, and
            follows best practices for data privacy and security compliance.
          </Accordion.Content>
        </Accordion.Item>

        {/* Item 3 */}
        <Accordion.Item value="item-3">
          <Accordion.Trigger className="w-item-trigger">
            <div className="w-text">
              3. How is the pricing structure for Neuro's? Are there any hidden
              fees?
            </div>
            <div className="w-box">
              <div className="w-html-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  width="100%"
                  height="100%"
                  style={{ display: "block" }}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4 6 4 4 4-4"
                  />
                </svg>
              </div>
            </div>
          </Accordion.Trigger>
          <Accordion.Content className="w-item-content">
            Neuro's offers transparent pricing with no hidden fees. You can
            choose from multiple plans depending on your business size and
            analytics needs.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
      {/* ---------------------------------------end ------------------------- */}
    </div>
  );
}

export default App;
