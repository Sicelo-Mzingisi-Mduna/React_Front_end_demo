import React from "react";
import "../Component_Styles/Value_Section_Tabs.css"
import { Tabs } from "radix-ui";


function Value_Section_Tabs() {
  return (
    <div>
  {/* --------------------------------------- start------------------------------- */}
  <Tabs.Root defaultValue="tab1"
  
                    className="w-tabs c3tuc1o cjhgaod c14wgxly csdsuq c1g5txgq cbp56o5 caj69gj c1xl7rdr c1njw6zj cxvd5ir">
          
  <Tabs.List 
  
                    className="w-tabs-list c3tuc1o c14wgxly csdsuq cva5yiq c1nuwff6 c1to836g" tabIndex={-1} data-orientation="horizontal" style={{outline: 'none'}}>
          
  <Tabs.Trigger value="tab1"
  
                    className="w-tab-trigger c3tuc1o cjhgaod c14wgxly csdsuq caj69gj c1rlax4o c1x71pf8 c8bvq1m c1rbcwb6 c19id0i8 c1rgadb2 c11mbz4 c1m69hmy c1310f59 cbp56o5 c1frg5hg c14pol8 c1o24vuc c1a3twgp c1fxtjch cxn9xwm c4l4ehl c1pdfmb9 c17yk9sd chtzira cg63bzn cn5eujd cafpnsu cxt9705 c1pt2hym cz11jy5" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item>
                          <div className="w-element c1clxhjf cptw6lb">
                            <div className="w-element c3tuc1o cbp56o5 c1nuwff6 c14wgxly csdsuq">
                              <div className="w-html-embed cks9g95 cxfdxy1 c3tuc1o cbp56o5 caj69gj c1ntrrwq c1s8mw8h c1a4vgcx cvubeyy">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V8C20.25 8.41421 20.5858 8.75 21 8.75C21.4142 8.75 21.75 8.41421 21.75 8V4.5C21.75 3.25736 20.7426 2.25 19.5 2.25H4.5C3.25736 2.25 2.25 3.25736 2.25 4.5V9.5C2.25 10.0763 2.46664 10.6019 2.82292 11C2.46664 11.3981 2.25 11.9237 2.25 12.5V17.5C2.25 18.7426 3.25736 19.75 4.5 19.75H9C9.41421 19.75 9.75 19.4142 9.75 19C9.75 18.5858 9.41421 18.25 9 18.25H4.5C4.08579 18.25 3.75 17.9142 3.75 17.5V12.5C3.75 12.0858 4.08579 11.75 4.5 11.75H9C9.41421 11.75 9.75 11.4142 9.75 11C9.75 10.5858 9.41421 10.25 9 10.25H4.5C4.08579 10.25 3.75 9.91421 3.75 9.5V4.5ZM7.25 6.51251C7.25 6.0983 6.91421 5.76251 6.5 5.76251C6.08579 5.76251 5.75 6.0983 5.75 6.51251V7.51251C5.75 7.92673 6.08579 8.26251 6.5 8.26251C6.91421 8.26251 7.25 7.92673 7.25 7.51251V6.51251ZM12.25 7.01251C12.25 6.5983 12.5858 6.26251 13 6.26251H18.0125C18.4267 6.26251 18.7625 6.5983 18.7625 7.01251C18.7625 7.42673 18.4267 7.76251 18.0125 7.76251H13C12.5858 7.76251 12.25 7.42673 12.25 7.01251ZM6.4873 13.7375C6.90152 13.7375 7.2373 14.0733 7.2373 14.4875V15.4875C7.2373 15.9018 6.90152 16.2375 6.4873 16.2375C6.07309 16.2375 5.7373 15.9018 5.7373 15.4875V14.4875C5.7373 14.0733 6.07309 13.7375 6.4873 13.7375ZM9.5 5.76251C9.91421 5.76251 10.25 6.0983 10.25 6.51251V7.51251C10.25 7.92673 9.91421 8.26251 9.5 8.26251C9.08579 8.26251 8.75 7.92673 8.75 7.51251V6.51251C8.75 6.0983 9.08579 5.76251 9.5 5.76251ZM16.7803 15.2197L15.5303 13.9697C15.2374 13.6768 14.7626 13.6768 14.4697 13.9697C14.1768 14.2626 14.1768 14.7374 14.4697 15.0303L15.1893 15.75L14.4697 16.4697C14.1768 16.7626 14.1768 17.2374 14.4697 17.5303C14.7626 17.8232 15.2374 17.8232 15.5303 17.5303L16.7803 16.2803C17.0732 15.9874 17.0732 15.5126 16.7803 15.2197ZM17.25 17.5C17.25 17.0858 17.5858 16.75 18 16.75H19C19.4142 16.75 19.75 17.0858 19.75 17.5C19.75 17.9142 19.4142 18.25 19 18.25H18C17.5858 18.25 17.25 17.9142 17.25 17.5ZM15 10.25C12.9289 10.25 11.25 11.9289 11.25 14V18C11.25 20.0711 12.9289 21.75 15 21.75H19C21.0711 21.75 22.75 20.0711 22.75 18V14C22.75 11.9289 21.0711 10.25 19 10.25H15ZM12.75 14C12.75 12.7574 13.7574 11.75 15 11.75H19C20.2426 11.75 21.25 12.7574 21.25 14V18C21.25 19.2426 20.2426 20.25 19 20.25H15C13.7574 20.25 12.75 19.2426 12.75 18V14Z" fill="#343844" />
                                </svg>
                              </div>
                              <h3 className="w-element ca1wzz2 c14p1bxi c1jdlg92">
                                AI - Drive Forecasts
                              </h3>
                            </div>
                          </div>
  </Tabs.Trigger>
            
  <Tabs.Trigger value="tab2" 

          className="w-tab-trigger c3tuc1o cjhgaod c14wgxly csdsuq c1mbiqk8 c1rlax4o c1x71pf8 c8bvq1m c1rbcwb6 c19id0i8 c1rgadb2 c11mbz4 c1m69hmy c1310f59 c1frg5hg c14pol8 c1o24vuc c1a3twgp c1fxtjch cxn9xwm c4l4ehl c1pdfmb9 c17yk9sd chtzira cg63bzn cn5eujd cafpnsu cxt9705 c1pt2hym cz11jy5" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item>
                          <div className="w-element c1clxhjf cptw6lb">
                            <div className="w-element c3tuc1o cbp56o5 c1nuwff6 c14wgxly csdsuq">
                              <div className="w-html-embed cks9g95 cxfdxy1 c3tuc1o cbp56o5 caj69gj c1ntrrwq c1s8mw8h c1a4vgcx cvubeyy">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V8C20.25 8.41421 20.5858 8.75 21 8.75C21.4142 8.75 21.75 8.41421 21.75 8V4.5C21.75 3.25736 20.7426 2.25 19.5 2.25H4.5C3.25736 2.25 2.25 3.25736 2.25 4.5V9.5C2.25 10.0763 2.46664 10.6019 2.82292 11C2.46664 11.3981 2.25 11.9237 2.25 12.5V17.5C2.25 18.7426 3.25736 19.75 4.5 19.75H9C9.41421 19.75 9.75 19.4142 9.75 19C9.75 18.5858 9.41421 18.25 9 18.25H4.5C4.08579 18.25 3.75 17.9142 3.75 17.5V12.5C3.75 12.0858 4.08579 11.75 4.5 11.75H9C9.41421 11.75 9.75 11.4142 9.75 11C9.75 10.5858 9.41421 10.25 9 10.25H4.5C4.08579 10.25 3.75 9.91421 3.75 9.5V4.5ZM7.25 6.51251C7.25 6.0983 6.91421 5.76251 6.5 5.76251C6.08579 5.76251 5.75 6.0983 5.75 6.51251V7.51251C5.75 7.92673 6.08579 8.26251 6.5 8.26251C6.91421 8.26251 7.25 7.92673 7.25 7.51251V6.51251ZM12.25 7.01251C12.25 6.5983 12.5858 6.26251 13 6.26251H18.0125C18.4267 6.26251 18.7625 6.5983 18.7625 7.01251C18.7625 7.42673 18.4267 7.76251 18.0125 7.76251H13C12.5858 7.76251 12.25 7.42673 12.25 7.01251ZM6.4873 13.7375C6.90152 13.7375 7.2373 14.0733 7.2373 14.4875V15.4875C7.2373 15.9018 6.90152 16.2375 6.4873 16.2375C6.07309 16.2375 5.7373 15.9018 5.7373 15.4875V14.4875C5.7373 14.0733 6.07309 13.7375 6.4873 13.7375ZM9.5 5.76251C9.91421 5.76251 10.25 6.0983 10.25 6.51251V7.51251C10.25 7.92673 9.91421 8.26251 9.5 8.26251C9.08579 8.26251 8.75 7.92673 8.75 7.51251V6.51251C8.75 6.0983 9.08579 5.76251 9.5 5.76251ZM16.7803 15.2197L15.5303 13.9697C15.2374 13.6768 14.7626 13.6768 14.4697 13.9697C14.1768 14.2626 14.1768 14.7374 14.4697 15.0303L15.1893 15.75L14.4697 16.4697C14.1768 16.7626 14.1768 17.2374 14.4697 17.5303C14.7626 17.8232 15.2374 17.8232 15.5303 17.5303L16.7803 16.2803C17.0732 15.9874 17.0732 15.5126 16.7803 15.2197ZM17.25 17.5C17.25 17.0858 17.5858 16.75 18 16.75H19C19.4142 16.75 19.75 17.0858 19.75 17.5C19.75 17.9142 19.4142 18.25 19 18.25H18C17.5858 18.25 17.25 17.9142 17.25 17.5ZM15 10.25C12.9289 10.25 11.25 11.9289 11.25 14V18C11.25 20.0711 12.9289 21.75 15 21.75H19C21.0711 21.75 22.75 20.0711 22.75 18V14C22.75 11.9289 21.0711 10.25 19 10.25H15ZM12.75 14C12.75 12.7574 13.7574 11.75 15 11.75H19C20.2426 11.75 21.25 12.7574 21.25 14V18C21.25 19.2426 20.2426 20.25 19 20.25H15C13.7574 20.25 12.75 19.2426 12.75 18V14Z" fill="#343844" />
                                </svg>
                              </div>
                              <h3 className="w-element ca1wzz2 c14p1bxi c1jdlg92">
                                Connect &amp; Streamline
                              </h3>
                            </div>
                          </div>
  </Tabs.Trigger>
  
  <Tabs.Trigger value="tab3"
  
              className="w-tab-trigger c3tuc1o cjhgaod c14wgxly csdsuq c1mbiqk8 c1rlax4o c1x71pf8 c8bvq1m c1rbcwb6 c19id0i8 c1rgadb2 c11mbz4 c1m69hmy c1310f59 c1frg5hg c14pol8 c1o24vuc c1a3twgp c1fxtjch cxn9xwm c4l4ehl c1pdfmb9 c17yk9sd chtzira cg63bzn cn5eujd cafpnsu cxt9705 c1pt2hym cz11jy5" tabIndex={-1} data-orientation="horizontal" data-radix-collection-item>
                          <div className="w-element c1clxhjf cptw6lb">
                            <div className="w-element c3tuc1o cbp56o5 c1nuwff6 c14wgxly csdsuq">
                              <div className="w-html-embed cks9g95 cxfdxy1 c3tuc1o cbp56o5 caj69gj c1ntrrwq c1s8mw8h c1a4vgcx cvubeyy">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75H19.5C19.9142 3.75 20.25 4.08579 20.25 4.5V8C20.25 8.41421 20.5858 8.75 21 8.75C21.4142 8.75 21.75 8.41421 21.75 8V4.5C21.75 3.25736 20.7426 2.25 19.5 2.25H4.5C3.25736 2.25 2.25 3.25736 2.25 4.5V9.5C2.25 10.0763 2.46664 10.6019 2.82292 11C2.46664 11.3981 2.25 11.9237 2.25 12.5V17.5C2.25 18.7426 3.25736 19.75 4.5 19.75H9C9.41421 19.75 9.75 19.4142 9.75 19C9.75 18.5858 9.41421 18.25 9 18.25H4.5C4.08579 18.25 3.75 17.9142 3.75 17.5V12.5C3.75 12.0858 4.08579 11.75 4.5 11.75H9C9.41421 11.75 9.75 11.4142 9.75 11C9.75 10.5858 9.41421 10.25 9 10.25H4.5C4.08579 10.25 3.75 9.91421 3.75 9.5V4.5ZM7.25 6.51251C7.25 6.0983 6.91421 5.76251 6.5 5.76251C6.08579 5.76251 5.75 6.0983 5.75 6.51251V7.51251C5.75 7.92673 6.08579 8.26251 6.5 8.26251C6.91421 8.26251 7.25 7.92673 7.25 7.51251V6.51251ZM12.25 7.01251C12.25 6.5983 12.5858 6.26251 13 6.26251H18.0125C18.4267 6.26251 18.7625 6.5983 18.7625 7.01251C18.7625 7.42673 18.4267 7.76251 18.0125 7.76251H13C12.5858 7.76251 12.25 7.42673 12.25 7.01251ZM6.4873 13.7375C6.90152 13.7375 7.2373 14.0733 7.2373 14.4875V15.4875C7.2373 15.9018 6.90152 16.2375 6.4873 16.2375C6.07309 16.2375 5.7373 15.9018 5.7373 15.4875V14.4875C5.7373 14.0733 6.07309 13.7375 6.4873 13.7375ZM9.5 5.76251C9.91421 5.76251 10.25 6.0983 10.25 6.51251V7.51251C10.25 7.92673 9.91421 8.26251 9.5 8.26251C9.08579 8.26251 8.75 7.92673 8.75 7.51251V6.51251C8.75 6.0983 9.08579 5.76251 9.5 5.76251ZM16.7803 15.2197L15.5303 13.9697C15.2374 13.6768 14.7626 13.6768 14.4697 13.9697C14.1768 14.2626 14.1768 14.7374 14.4697 15.0303L15.1893 15.75L14.4697 16.4697C14.1768 16.7626 14.1768 17.2374 14.4697 17.5303C14.7626 17.8232 15.2374 17.8232 15.5303 17.5303L16.7803 16.2803C17.0732 15.9874 17.0732 15.5126 16.7803 15.2197ZM17.25 17.5C17.25 17.0858 17.5858 16.75 18 16.75H19C19.4142 16.75 19.75 17.0858 19.75 17.5C19.75 17.9142 19.4142 18.25 19 18.25H18C17.5858 18.25 17.25 17.9142 17.25 17.5ZM15 10.25C12.9289 10.25 11.25 11.9289 11.25 14V18C11.25 20.0711 12.9289 21.75 15 21.75H19C21.0711 21.75 22.75 20.0711 22.75 18V14C22.75 11.9289 21.0711 10.25 19 10.25H15ZM12.75 14C12.75 12.7574 13.7574 11.75 15 11.75H19C20.2426 11.75 21.25 12.7574 21.25 14V18C21.25 19.2426 20.2426 20.25 19 20.25H15C13.7574 20.25 12.75 19.2426 12.75 18V14Z" fill="#343844" />
                                </svg>
                              </div>
                              <h3 className="w-element ca1wzz2 c14p1bxi c1jdlg92">
                                Instant Insights
                              </h3>
                            </div>
                          </div>
  </Tabs.Trigger> 
  
  </Tabs.List>
  
  <Tabs.Content value="tab1"
  
                      className="w-tab-content cbp56o5 c1nuwff6" style={{animationDuration: '0s'}}>
                        <div className="w-element c1g5txgq">
                          <div className="w-element clv3796 c1ttajmm c10oknb6 c1cy6wxk c1jad3ab c101g2se c1iv4tzk c1nxkrc1 c1rlax4o c1x71pf8 c8bvq1m c1rbcwb6 c3tuc1o cbp56o5 caj69gj c14wgxly csdsuq c1xd2njd c11bde3r c1222p8t c1tcawvh cjhgaod c8canks c78s2i7">
                            <a className="w-link c1kcf4zv crur98k c4aog8j c158yvps c1jj5ia5 c13waxfy c1qk8tr0 czhmlg cs1dg1y c1wr5t15 c1rosn03 cwl2f3u cbp56o5 caj69gj c14wgxly csdsuq ctrnopk cgaqczo c1nmf8pb czf7a1w cuil3wh c1c2s4bs chr113t clkrh5c c1x8ohuk c1yfmkp2 cbcz7a" href="#"><div className="w-element cxfdxy1 c1kbacxl">
                                <div className="w-html-embed c1vd93yb cxfdxy1 cks9g95 c1kbacxl">
                                  <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.3334 0.666668C15.6023 1.91924 16.5808 2.89769 17.8334 3.16667C16.5808 3.43564 15.6023 4.4141 15.3334 5.66667C15.0644 4.4141 14.0859 3.43564 12.8334 3.16667C14.0859 2.89769 15.0644 1.91924 15.3334 0.666668ZM7.06006 0.833337C7.81964 4.3706 10.5828 7.13375 14.1201 7.89334C10.5828 8.65292 7.81964 11.4161 7.06006 14.9533C6.30048 11.4161 3.53733 8.65292 6.10352e-05 7.89334C3.53733 7.13375 6.30048 4.3706 7.06006 0.833337ZM17.8334 14C16.1633 13.6414 14.8587 12.3368 14.5 10.6667C14.1414 12.3368 12.8368 13.6414 11.1667 14C12.8368 14.3586 14.1414 15.6632 14.5 17.3333C14.8587 15.6632 16.1633 14.3586 17.8334 14Z" fill="currentColor" />
                                  </svg>
                                </div>
                              </div>
                              <div className="w-element c1mnwggj c1oeidi5 cotqv3m c1rx2nhk c3tuc1o cjhgaod cva5yiq c1nuwff6">
                                <h4 className="w-element ca1wzz2 c14p1bxi c1ige3mh c1ntrrwq cm7l3to">
                                  AI - Driven Forecasts
                                </h4>
                              </div></a>
                            <p className="w-element cnn0o66 c17s3srt ca1wzz2 c14p1bxi c1ntrrwq cptw6lb cg7qe82">
                              Harness the unmatched power of artificial intelligence
                              with Neuros. Dive deep into predictive analytics,
                              anticipate market tre...
                            </p>
                          </div>
                        </div>
                      
  </Tabs.Content>

  <Tabs.Content value="tab2"
  
                      className="w-tab-content cbp56o5 c1nuwff6" style={{animationDuration: '0s'}}>
                        <div className="w-element c1g5txgq">
                          <div className="w-element clv3796 c1ttajmm c10oknb6 c1cy6wxk c1jad3ab c101g2se c1iv4tzk c1nxkrc1 c1rlax4o c1x71pf8 c8bvq1m c1rbcwb6 c3tuc1o cbp56o5 caj69gj c14wgxly csdsuq c1xd2njd c11bde3r c1222p8t c1tcawvh cjhgaod c8canks c78s2i7">
                            <a className="w-link c1kcf4zv crur98k c4aog8j c158yvps c1jj5ia5 c13waxfy c1qk8tr0 czhmlg cs1dg1y c1wr5t15 c1rosn03 cwl2f3u cbp56o5 caj69gj c14wgxly csdsuq ctrnopk cgaqczo c1nmf8pb czf7a1w cuil3wh c1c2s4bs chr113t clkrh5c c1x8ohuk c1yfmkp2 cbcz7a" href="#"><div className="w-element cxfdxy1 c1kbacxl">
                                <div className="w-html-embed c1vd93yb cxfdxy1 cks9g95 c1kbacxl">
                                  <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.3334 0.666668C15.6023 1.91924 16.5808 2.89769 17.8334 3.16667C16.5808 3.43564 15.6023 4.4141 15.3334 5.66667C15.0644 4.4141 14.0859 3.43564 12.8334 3.16667C14.0859 2.89769 15.0644 1.91924 15.3334 0.666668ZM7.06006 0.833337C7.81964 4.3706 10.5828 7.13375 14.1201 7.89334C10.5828 8.65292 7.81964 11.4161 7.06006 14.9533C6.30048 11.4161 3.53733 8.65292 6.10352e-05 7.89334C3.53733 7.13375 6.30048 4.3706 7.06006 0.833337ZM17.8334 14C16.1633 13.6414 14.8587 12.3368 14.5 10.6667C14.1414 12.3368 12.8368 13.6414 11.1667 14C12.8368 14.3586 14.1414 15.6632 14.5 17.3333C14.8587 15.6632 16.1633 14.3586 17.8334 14Z" fill="currentColor" />
                                  </svg>
                                </div>
                              </div>
                              <div className="w-element c1mnwggj c1oeidi5 cotqv3m c1rx2nhk c3tuc1o cjhgaod cva5yiq c1nuwff6">
                                <h4 className="w-element ca1wzz2 c14p1bxi c1ige3mh c1ntrrwq cm7l3to">
                                  Connect & Streamline
                                </h4>
                              </div></a>
                            <p className="w-element cnn0o66 c17s3srt ca1wzz2 c14p1bxi c1ntrrwq cptw6lb cg7qe82">
                              Neuros seamlessly integrates with your favourite business tolls, CMRs and platforms. Experience a unified analytics..
                            </p>
                          </div>
                        </div>
                      
  </Tabs.Content>

  <Tabs.Content value="tab3"
  
                      className="w-tab-content cbp56o5 c1nuwff6" style={{animationDuration: '0s'}}>
                        <div className="w-element c1g5txgq">
                          <div className="w-element clv3796 c1ttajmm c10oknb6 c1cy6wxk c1jad3ab c101g2se c1iv4tzk c1nxkrc1 c1rlax4o c1x71pf8 c8bvq1m c1rbcwb6 c3tuc1o cbp56o5 caj69gj c14wgxly csdsuq c1xd2njd c11bde3r c1222p8t c1tcawvh cjhgaod c8canks c78s2i7">
                            <a className="w-link c1kcf4zv crur98k c4aog8j c158yvps c1jj5ia5 c13waxfy c1qk8tr0 czhmlg cs1dg1y c1wr5t15 c1rosn03 cwl2f3u cbp56o5 caj69gj c14wgxly csdsuq ctrnopk cgaqczo c1nmf8pb czf7a1w cuil3wh c1c2s4bs chr113t clkrh5c c1x8ohuk c1yfmkp2 cbcz7a" href="#"><div className="w-element cxfdxy1 c1kbacxl">
                                <div className="w-html-embed c1vd93yb cxfdxy1 cks9g95 c1kbacxl">
                                  <svg width="100%" height="100%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.3334 0.666668C15.6023 1.91924 16.5808 2.89769 17.8334 3.16667C16.5808 3.43564 15.6023 4.4141 15.3334 5.66667C15.0644 4.4141 14.0859 3.43564 12.8334 3.16667C14.0859 2.89769 15.0644 1.91924 15.3334 0.666668ZM7.06006 0.833337C7.81964 4.3706 10.5828 7.13375 14.1201 7.89334C10.5828 8.65292 7.81964 11.4161 7.06006 14.9533C6.30048 11.4161 3.53733 8.65292 6.10352e-05 7.89334C3.53733 7.13375 6.30048 4.3706 7.06006 0.833337ZM17.8334 14C16.1633 13.6414 14.8587 12.3368 14.5 10.6667C14.1414 12.3368 12.8368 13.6414 11.1667 14C12.8368 14.3586 14.1414 15.6632 14.5 17.3333C14.8587 15.6632 16.1633 14.3586 17.8334 14Z" fill="currentColor" />
                                  </svg>
                                </div>
                              </div>
                              <div className="w-element c1mnwggj c1oeidi5 cotqv3m c1rx2nhk c3tuc1o cjhgaod cva5yiq c1nuwff6">
                                <h4 className="w-element ca1wzz2 c14p1bxi c1ige3mh c1ntrrwq cm7l3to">
                                  Instant Insights
                                </h4>
                              </div></a>
                            <p className="w-element cnn0o66 c17s3srt ca1wzz2 c14p1bxi c1ntrrwq cptw6lb cg7qe82">
                              In the Fast-paced world of business, every second counts. Neuros processes data in real-time, ensuring you're always working with the most up-to-date information. React to changes as they happen and pivot your strategies instantly.
                            </p>
                          </div>
                        </div>
                     
                      
                      
  </Tabs.Content>
  </Tabs.Root>
{/* ---------------------------------------end ------------------------- */}
      
    </div>
  );
}

export default Value_Section_Tabs;