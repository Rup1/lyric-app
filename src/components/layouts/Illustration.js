import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layouts/Spinner";

class Illustration extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { track_list } = value;
          if (track_list === undefined || track_list.length === 0) {
            console.log("waiting");
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <div className="slds-illustration slds-illustration_small">
                  <svg
                    className="slds-illustration__svg"
                    viewBox="0 0 505 319"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g transform="translate(-48.000000, -60.000000)">
                        <g>
                          <g
                            transform="translate(374.000000, 116.000000)"
                            className="slds-illustration__stroke-secondary"
                            stroke-linecap="round"
                            stroke-width="3"
                          >
                            <path
                              vectorEffect="non-scaling-stroke"
                              d="M44,17.5 L63,17.5 C62.2789714,12.0723971 64.081543,7.53186978 68.4077148,3.87841797 C73.3754883,-0.195556641 79.2734375,0.717773438 82.440918,2.12353516 C85.6083984,3.52929687 87.9606934,5.46069336 89.5913086,9.10524041 C90.2822266,10.6397351 90.7517904,11.9379883 91,13"
                            />
                            <path
                              vectorEffect="non-scaling-stroke"
                              d="M83,20.5 C84.0558268,16.8461914 86.2227376,14.4572754 89.5007324,13.333252 C94.4177246,11.6472168 99.0800781,13.8925781 100.942383,16.1518555 C102.804687,18.4111328 103.39502,20.2260742 103.746582,22.1201172 C103.980957,23.3828125 104.06543,24.8427734 104,26.5 C108.141764,26.3313802 110.918945,27.1647135 112.331543,29 C114.040039,31.1936035 114.215332,33.817627 113.593018,35.75 C112.970703,37.682373 110.894531,40.5 107,40.5 L28,40.5"
                            />
                            <path
                              vectorEffect="non-scaling-stroke"
                              d="M18,27.5 L83.0004985,27.5"
                            />
                            <path
                              vectorEffect="non-scaling-stroke"
                              d="M0,27.5 L8,27.5"
                            />
                          </g>
                          <g transform="translate(110.000000, 62.000000)">
                            <g
                              transform="translate(223.000000, 36.000000)"
                              fill="#FFFFFF"
                            >
                              <polyline
                                vectorEffect="non-scaling-stroke"
                                points="0 30 30.5 0 132 102"
                              />
                            </g>
                            <g>
                              <polyline
                                vectorEffect="non-scaling-stroke"
                                className="slds-illustration__stroke-secondary"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                points="19 137 155.5 0 253.5 97"
                              />
                              <polyline
                                vectorEffect="non-scaling-stroke"
                                className="slds-illustration__stroke-secondary"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                points="155.5 1 155.5 108 126.5 78 67 137"
                              />
                              <polyline
                                vectorEffect="non-scaling-stroke"
                                className="slds-illustration__stroke-secondary"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                points="223 66 253.5 36 355 138"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M66.9662349,126.623381 L70,138 L62,138 L65.0337651,126.623381 C65.1760682,126.089744 65.7240258,125.772506 66.2576627,125.914809 C66.6036917,126.007083 66.8739605,126.277352 66.9662349,126.623381 Z"
                                className="slds-illustration__fill-secondary"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M7.98704354,117.243143 L14,137 L8.43164063,137 L0.351444231,137.273826 L6.06883361,117.259626 C6.22053451,116.728584 6.77400674,116.421068 7.30504843,116.572769 C7.6314191,116.666002 7.88821562,116.918423 7.98704354,117.243143 Z"
                                className="slds-illustration__fill-secondary"
                                transform="translate(7.175722, 126.903937) scale(-1, 1) translate(-7.175722, -126.903937) "
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M212.924392,42.0372884 L219,62 L214.366211,59.0361328 L207.351444,53.2738261 L211.016872,42.0187879 C211.187893,41.4936498 211.752242,41.2065817 212.27738,41.3776034 C212.587805,41.4786994 212.829336,41.7249613 212.924392,42.0372884 Z"
                                className="slds-illustration__fill-secondary"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M351.956674,117.143357 L358,137 L352.431641,137 L346.351444,129.273826 L350.043326,117.143357 C350.20413,116.615001 350.762805,116.317041 351.291162,116.477845 C351.610053,116.574899 351.85962,116.824466 351.956674,117.143357 Z"
                                className="slds-illustration__fill-secondary"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M16.9662349,126.623381 L20,138 L12,138 L15.0337651,126.623381 C15.1760682,126.089744 15.7240258,125.772506 16.2576627,125.914809 C16.6036917,126.007083 16.8739605,126.277352 16.9662349,126.623381 Z"
                                className="slds-illustration__fill-secondary"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M359.966235,126.623381 L363,138 L355,138 L358.033765,126.623381 C358.176068,126.089744 358.724026,125.772506 359.257663,125.914809 C359.603692,126.007083 359.873961,126.277352 359.966235,126.623381 Z"
                                className="slds-illustration__fill-secondary"
                              />
                            </g>
                          </g>
                          <g
                            transform="translate(50.000000, 199.000000)"
                            stroke-linecap="round"
                            stroke-width="3"
                          >
                            <g
                              transform="translate(31.000000, 17.000000)"
                              className="slds-illustration__stroke-secondary"
                              stroke-linejoin="round"
                            >
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M160.859434,21.9317322 C153.615902,23.4382712 149.119418,16.2091973 149.119418,16.2091973 L149.110743,16.2091973 C149.110743,16.2091973 145.68127,22.1543876 138.637261,22.1543876 C131.888197,22.1543876 128.18402,16.2091973 128.18402,16.2091973 L128.172453,16.2091973 C128.172453,16.2091973 124.748764,22.1543876 117.704754,22.1543876 C110.952799,22.1543876 107.251514,16.2091973 107.251514,16.2091973 L107.239947,16.2091973 C107.239947,16.2091973 101.445121,23.556828 94.3577375,22.050289"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M66.8594335,6.36153137 C59.6159016,7.86807036 55.1194176,0.638996521 55.1194176,0.638996521 L55.1107427,0.638996521 C55.1107427,0.638996521 51.6812701,6.58418685 44.6372606,6.58418685 C37.8881972,6.58418685 34.1840198,0.638996521 34.1840198,0.638996521 L34.1724533,0.638996521 C34.1724533,0.638996521 30.7487639,6.58418685 23.7047543,6.58418685 C16.9527994,6.58418685 13.2515136,0.638996521 13.2515136,0.638996521 L13.239947,0.638996521 C13.239947,0.638996521 7.44512146,7.98662717 0.357737464,6.48008818"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M129.894531,6.36153137 C122.650999,7.86807036 118.154515,0.638996521 118.154515,0.638996521 L118.14584,0.638996521 C118.14584,0.638996521 114.716368,6.58418685 107.672358,6.58418685 C100.923295,6.58418685 97.2191175,0.638996521 97.2191175,0.638996521 L97.207551,0.638996521 C97.207551,0.638996521 93.7838616,6.58418685 86.739852,6.58418685 C79.9878971,6.58418685 76.2866113,0.638996521 76.2866113,0.638996521 L76.2750448,0.638996521 C76.2750448,0.638996521 70.4802192,7.98662717 63.3928352,6.48008818"
                              />
                            </g>
                            <g className="slds-illustration__stroke-primary">
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M12,1.5 L241,1.5 C221.757517,5.48210094 211.757517,15.3154343 211,31 C211,53.685446 233.935059,61.5 241,61.5 L335,61.5 C344.415527,61.5 354,65.6098885 354,76 C354,86.3901115 345.468506,91.5 337,91.5 L309,91.5 C304.502197,91.5 298,94.7274061 298,102 C298,109.272594 304.481445,112.5 308,112.5 L409.819301,112.5"
                                stroke-linejoin="round"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M0,1.5 L6,1.5"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M337,1.5 L477,1.5"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M483,1.5 L501,1.5"
                              />
                            </g>
                          </g>
                          <g transform="translate(344.000000, 177.000000)">
                            <g
                              transform="translate(0.000000, 1.000000)"
                              className="slds-illustration__fill-secondary"
                            >
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M18.9136025,2.35240645 L33.2155648,49.4185143 C33.5367105,50.4753677 32.9403015,51.5924567 31.8834481,51.9136025 C31.6949332,51.9708864 31.4989885,52 31.3019623,52 L2.69803765,52 C1.59346815,52 0.698037653,51.1045695 0.698037653,50 C0.698037653,49.8029739 0.727151263,49.6070291 0.784435201,49.4185143 L15.0863975,2.35240645 C15.4075433,1.295553 16.5246323,0.699144029 17.5814857,1.02028973 C18.2199465,1.2142986 18.7195936,1.71394567 18.9136025,2.35240645 Z"
                              />
                            </g>
                            <g
                              className="slds-illustration__stroke-primary"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                            >
                              <polygon
                                vectorEffect="non-scaling-stroke"
                                points="17.5 0.5 34 53.5 -1.82076576e-12 53.5"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M17.5,5.32394366 C17.5,42.4711356 17.5,61.4711356 17.5,62.3239437 C17.5,61.4711356 17.5,42.4711356 17.5,5.32394366 Z"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M18,28.3239437 C23.3333333,34.7851611 26,38.1184944 26,38.3239437 C26,38.1184944 23.3333333,34.7851611 18,28.3239437 Z"
                                transform="translate(22.000000, 33.323944) scale(-1, 1) translate(-22.000000, -33.323944) "
                              />
                            </g>
                          </g>
                          <g transform="translate(302.000000, 152.000000)">
                            <g
                              transform="translate(1.000000, 3.000000)"
                              className="slds-illustration__fill-secondary"
                            >
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M25.6478873,0 L50.7274574,72.3449136 C51.0892516,73.3885508 50.5365086,74.5278782 49.4928714,74.8896724 C49.2821865,74.9627098 49.0607706,75 48.837785,75 L2.45798968,75 C1.35342018,75 0.457989684,74.1045695 0.457989684,73 C0.457989684,72.7770143 0.495279843,72.5555985 0.568317287,72.3449136 L25.6478873,0 Z"
                              />
                            </g>
                            <g
                              className="slds-illustration__stroke-primary"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                            >
                              <polygon
                                vectorEffect="non-scaling-stroke"
                                points="26.5 0 52.6478873 78.5 0.647887324 78.5"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M26.5,5 C26.5,58.1639615 26.5,85.4972948 26.5,87 C26.5,85.4972948 26.5,58.1639615 26.5,5 Z"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M15.6478873,33 C22.9812207,40.078692 26.6478873,43.7453587 26.6478873,44 C26.6478873,43.7453587 22.9812207,40.078692 15.6478873,33 Z"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M27.6478873,62 C36.9812207,51.078692 41.6478873,45.7453587 41.6478873,46 C41.6478873,45.7453587 36.9812207,51.078692 27.6478873,62 Z"
                              />
                            </g>
                          </g>
                          <g transform="translate(115.000000, 84.000000)">
                            <g
                              transform="translate(79.000000, 21.000000)"
                              fill="#FFFFFF"
                            >
                              <polygon
                                vectorEffect="non-scaling-stroke"
                                points="20.9057617 0.729980469 24.6303711 2.34033203 27.0927734 9.15527344 13.0463867 19.8769531 0.130859375 19.8769531"
                              />
                            </g>
                            <g
                              className="slds-illustration__stroke-secondary"
                              stroke-linecap="round"
                              stroke-width="3"
                            >
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M44,17.5 L63,17.5 C62.2789714,12.0723971 64.081543,7.53186978 68.4077148,3.87841797 C73.3754883,-0.195556641 79.2734375,0.717773438 82.440918,2.12353516 C85.6083984,3.52929687 87.9606934,5.46069336 89.5913086,9.10524041 C90.2822266,10.6397351 90.7517904,11.9379883 91,13"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M83,20.5 C84.0558268,16.8461914 86.2227376,14.4572754 89.5007324,13.333252 C94.4177246,11.6472168 99.0800781,13.8925781 100.942383,16.1518555 C102.804687,18.4111328 103.39502,20.2260742 103.746582,22.1201172 C103.980957,23.3828125 104.06543,24.8427734 104,26.5 C108.141764,26.3313802 110.918945,27.1647135 112.331543,29 C114.040039,31.1936035 114.215332,33.817627 113.593018,35.75 C112.970703,37.682373 110.894531,40.5 107,40.5 L28,40.5"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M18,27.5 L83.0004985,27.5"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M0,27.5 L8,27.5"
                              />
                            </g>
                          </g>
                          <g
                            transform="translate(111.000000, 251.000000)"
                            className="slds-illustration__stroke-primary"
                            stroke-linecap="round"
                            stroke-width="3"
                          >
                            <g>
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M0,67.5 L94.9945068,67.5 C100.998169,68.0087318 104,70.6307975 104,75.3661972 C104,80.1015969 100.998169,82.8128645 94.9945068,83.5 L86,83.5 C81.9711914,84.3176839 79.9567871,86.3684957 79.9567871,89.6524354 C79.9567871,92.9363752 81.9711914,94.8855634 86,95.5 L227,95.5"
                                stroke-linejoin="round"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M234.5,95.5 L239,95.5"
                              />
                              <polygon
                                vectorEffect="non-scaling-stroke"
                                className="slds-illustration__fill-secondary"
                                stroke-linejoin="round"
                                points="53.5 0 77 78.5 29 78.5"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M53.5,0.5 C53.5,57.9126239 53.5,87.2866458 53.5,88.6220657 C53.5,87.2866458 53.5,57.9126239 53.5,0.5 Z"
                                stroke-linejoin="round"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M38,53.5868545 C48,62.2873586 53,66.7944008 53,67.1079812 C53,66.7944008 48,62.2873586 38,53.5868545 Z"
                                stroke-linejoin="round"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M54,55.5821596 C62,46.2544947 66,41.7474525 66,42.0610329 C66,41.7474525 62,46.2544947 54,55.5821596 Z"
                                stroke-linejoin="round"
                              />
                            </g>
                          </g>
                          <g
                            transform="translate(249.500000, 311.504695) scale(-1, 1) translate(-249.500000, -311.504695) translate(216.500000, 245.004695)"
                            className="slds-illustration__stroke-primary"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                          >
                            <g>
                              <polygon
                                vectorEffect="non-scaling-stroke"
                                className="slds-illustration__fill-secondary"
                                points="33 0 66 114.495305 0 114.495305"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M33,1.49530516 C33,86.5418924 33,130.105273 33,132.185446 C33,130.105273 33,86.5418924 33,1.49530516 Z"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M12,77.6244131 C26,92.3250386 33,99.8367756 33,100.159624 C33,99.8367756 26,92.3250386 12,77.6244131 Z"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M21,44.57277 C29,55.2671356 33,60.7757428 33,61.0985915 C33,60.7757428 29,55.2671356 21,44.57277 Z"
                              />
                              <path
                                vectorEffect="non-scaling-stroke"
                                d="M33,82.1314554 C44,66.7851324 49.5,59.2733954 49.5,59.5962441 C49.5,59.2733954 44,66.7851324 33,82.1314554 Z"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div className="slds-text-longform">
                    <h3 className="slds-text-heading_medium">
                      Apologies while we build the new Dashboard. Learn the
                      lyrics to some of your favorite songs in the meantime
                    </h3>
                  </div>
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Illustration;
