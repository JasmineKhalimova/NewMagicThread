import React, {useState} from 'react';
import './services.css';
import { GiLaserPrecision, GiBodyBalance} from 'react-icons/gi';
import { AiOutlineArrowRight, AiOutlineClose, AiOutlineDownload} from 'react-icons/ai';
import { RiFilePaperLine} from 'react-icons/ri';
import {VscDebugBreakpointLogUnverified} from 'react-icons/vsc';
import {BiBody} from 'react-icons/bi';
import {MdOutlineFaceRetouchingNatural} from 'react-icons/md';
import {FaRegHandPaper} from 'react-icons/fa';
import Facials from '../../assets/Facials.pdf';
import Pedicure from '../../assets/Pedicure.pdf';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <h3 className='section__subtitle'>Services & Treatments we offer</h3>
      <div className='services__container custom-container grid'>

        {/* Service 1 */}
        <div className='services__content'>
          <div>
            <GiLaserPrecision className='services__icon'/>
            <h3 className='services__title'>Laser Treatments</h3>
            <p className='services__title-info'>
              Trend Health and Beauty introducing new laser treatments such as facial and body hair removals. 
              For more information please contact us.
            </p>
          </div>
          <span className='service__button' onClick={() => toggleTab (1)}>
            View Services & Prices
            <AiOutlineArrowRight className='service__button-icon'/>
          </span>
          <div className={toggleState ===1 ? 'services__modal active-modal' : 'services__modal' }>
            <div className='services__modal-content'>
              <AiOutlineClose className='services__modal-close' onClick={() => toggleTab(0)} />
              <h3 className='services__modal-title'>Laser Hair Removal Treatments</h3>
              <p className='services__modal-description'>Prices for courses of 6 laser treatments</p>
              <div className='services__modal-items'>
                <div className='services__modal-inner'>
                  <h4>Women</h4>
                  <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Lip - €100</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Chin - €150</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Lip + Chin - €200</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Face  - €250</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Full Face + Neck  - €300</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Underarms - €200</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Underarms - €350</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Chest - €230</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Bikini - €200</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Hollywood/Brazilian - €500</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Legs - €400</p>
                    </li>
                  </ul>
                </div>
                <div className='services__modal-inner'>
                  <h4>Men</h4>
                  <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Neck - €200</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Face - €400</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Chest - €450</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Stomach  - €200</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Full Face  - €450</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Back- €900</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Arms- €500</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Legs- €900</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className='services__content'>
          <div>
          <BiBody className='services__icon'/>
            <h3 className='services__title'>1060nm Diode Lasershape</h3>
            <p className='services__title-info'>
              The 1060nm diode laser has a high affinity for subcutaneous adipose tissue. The energy transmitted by
              the laser causes the molecules in the irradiated tissue to move, create heat, then raise the temperature
              between 42 C and 47 C.Trend Health and Beauty introducing new laser treatments such as facial and body hair removals. 
              For more information please contact us.
            </p>
          </div>
          <span className='service__button' onClick={() => toggleTab (2)}>
            View Services & Prices
            <AiOutlineArrowRight className='service__button-icon'/>
          </span>
          <div className={toggleState === 2 ? 'services__modal active-modal' : 'services__modal' }>
            <div className='services__modal-content'>
              <AiOutlineClose className='services__modal-close' onClick={() => toggleTab(0)} />
              <h3 className='services__modal-title'>1060nm Diode Lasershape</h3>
              <p className='services__modal-description'>
                Benefits <br />
              - Non-invasive, non-surgical<br />
              - Fast treatment in about 25 minutes<br />
              - Versatility in treating the different area of stubborn fat<br />
              </p>
              <div className='services__modal-items'>
                <div className='services__modal-inner'>
                  <h4> Full Body</h4>
                  <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 1 treatment €300</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 2 treatment €600</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Lip + Chin - €200</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 3 treatment €800</p>
                    </li>
                  </ul>
                </div>
                <div className='services__modal-inner'>
                  <h4>Abdomen</h4>
                  <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 1 treatment €200</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 2 treatment €350 </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className='services__content'>
          <div>
          <GiBodyBalance className='services__icon'/>
            <h3 className='services__title'>Fractional laser And Skin Tightening & lifting</h3>
            <p className='services__title-info'>
              Effective mole, warts and sarcoma removal. Collagen contraction and removal. Skin tightening and lifting.
             Tighten vagina-fast tightening, lasting construction, tightness to improve by 60%
            </p>
          </div>
          <span className='service__button' onClick={() => toggleTab (3)}>
            View Services & Prices
            <AiOutlineArrowRight className='service__button-icon'/>
          </span>
          <div className={toggleState === 3 ? 'services__modal active-modal' : 'services__modal' }>
            <div className='services__modal-content'>
              <AiOutlineClose className='services__modal-close' onClick={() => toggleTab(0)} />
              <h3 className='services__modal-title'>Fractional laser And Skin Tightening & lifting</h3>
              <p className='services__modal-description'>
                Effective mole, warts and sarcoma removal.
                Vascular leison therapy <br />
                Spired viens/Face veins
              </p>
              <div className='services__modal-items'>
                <div className='services__modal-inner'>
                  <h4>Fractional laser </h4>
                  <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 1 treatment €120</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 2 treatment €200</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Lip + Chin - €200</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 3 treatment €270</p>
                    </li>
                  </ul>
                </div>
                <div className='services__modal-inner'>
                  <h4>Skin Tightening and lifting</h4>
                  <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                      <p className='services__modal-info'><b> Face arm neck chest</b></p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 1 treatment €100</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 2 treatments €180</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 3 tretments €240</p>
                    </li>
                    <li className='services__modal-service'>
                      <p className='services__modal-info'><b>Face neck arm abdomen</b> </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 1 treatment €170</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 2 treatmenys €300</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 3 treatments €430</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* Service 4 */}
         <div className='services__content'>
          <div>
          <MdOutlineFaceRetouchingNatural className='services__icon'/>
            <h3 className='services__title'>Facials Treatments</h3>
            <p className='services__title-info'>
              We offer range of facial treatments
            </p>
          </div>
          <span className='service__button' onClick={() => toggleTab (4)}>
            View Services & Prices
            <AiOutlineArrowRight className='service__button-icon'/>
          </span>
          <div className={toggleState === 4 ? 'services__modal active-modal' : 'services__modal' }>
            <div className='services__modal-content'>
              <AiOutlineClose className='services__modal-close' onClick={() => toggleTab(0)} />
              <h3 className='services__modal-title'>Facials Treatments</h3>
                <a download="" href={Facials} className='button button--flex'>
                    Download Full List 
                    <AiOutlineDownload />
                </a>
              <div className='services__modal-items'>
                <div className='services__modal-inner'>
                  <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                      <p className='services__modal-info'>
                        <b>Dermalift </b>
                      <span> Non-surgical face lift, electronic beauty treatment using the dermalift machine.<br />
                      This lifts the face by toning facial muscles, smoothing away fine lines and wrinkles and prevents sagging skin
                      </span>
                      </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>75 mins - €65 </p>
                    </li>
                    <li className='services__modal-service'>
                      <p className='services__modal-info'>
                        <b>Dermalogica skin treatment</b>
                      <span>Luxury facial which involves a combination of professional double cleansing, 
                        exfoliation, extraction, masque, toner and skin protection
                      </span>
                      </p>                  
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 60 mins - €65 </p>
                    </li>
                    <li className='services__modal-service'>
                      <p className='services__modal-info'>
                        <b>Environmental control (sensitive skin)</b>
                      <span>
                      Calms red, inflamed, itchy skin, super soothing treatment that instantly clears redness and reduces inflamation 
                      </span>
                      </p>                  
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>60 mins - €65 </p>
                    </li>
                  </ul>
                </div>
                <div className='services__modal-inner'>
                  <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                      <p className='services__modal-info'>
                        <b>Age smart treatment</b>
                      <span>
                      Revitalising power boost treatment, designed to help firm, smooth, nourish and regenerate
                      </span>
                      </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 60 mins - €65 </p>
                    </li>
                    <li className='services__modal-service'>
                      <p className='services__modal-info'>
                        <b>MediBac clearning treatment</b>
                      <span>
                      This powerful treatment jump starts acne clearing using dermalogica medi-bae product
                      </span>
                      </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> 60 mins - €65 </p>
                    </li>
                    <li className='services__modal-service'>
                      <p className='services__modal-info'>
                        <b>Multi vitamin facial</b>
                      <span>
                      This is dermalogicas most powerful treatment for premature 
                      ageing or dry/dehydrated skin. This will improve elasticity, tone and texture of the skin 
                      </span>
                      </p>                  
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>  65 mins - €65  </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* Service 5 */}
         <div className='services__content'>
          <div>
            <RiFilePaperLine className='services__icon'/>
            <h3 className='services__title'>Wax</h3>
            <p className='services__title-info'>
              We offer range of wax treatments
            </p>
          </div>
          <span className='service__button' onClick={() => toggleTab (5)}>
            View Services & Prices
            <AiOutlineArrowRight className='service__button-icon'/>
          </span> 
          <div className={toggleState === 5 ? 'services__modal active-modal' : 'services__modal' }>
            <div className='services__modal-content'>
              <AiOutlineClose className='services__modal-close' onClick={() => toggleTab(0)} />
              <h3 className='services__modal-title'>Laser Hair Removal Treatments</h3>
              <p className='services__modal-description'>Prices for courses of 6 laser treatments</p>
              <div className='services__modal-items'>
                <div className='services__modal-inner'>
                  <h4>Women</h4>
                  <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> Eyebrow shape & Wax - €10 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Eyebrow wax & tint - €20 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Eyelash tint - €15 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Entire eyebrow & eyelash focus - €30 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Lip & Chin & Side face - €20 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Underarm - €15 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Bikini wax regular or high line - €25 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Brazilian/Hollywood bikini wax - €40 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Full leg wax - €30 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Hollywood/Brazilian - €500</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Full arm wax - €30 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>leg wax - €15  </p>
                    </li>
                  </ul>
                </div>
                <div className='services__modal-inner'>
                  <h4>Men</h4>
                  <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'> Chest wax - €30 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Back wax - €30 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Back, neck & Shoulder & Chest - €50 </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 6 */}
        <div className='services__content'>
          <div>
            <FaRegHandPaper className='services__icon'/>
            <h3 className='services__title'>Nails</h3>
            <p className='services__title-info'>
              We offer range of pedicure and manicure treatments. 
              We also offer funagal treatments <br />
              <b>Damaged Nail Reconstruction</b>
            </p>
          </div>
          <span className='service__button' onClick={() => toggleTab (6)}>
            View Services & Prices
            <AiOutlineArrowRight className='service__button-icon'/>
          </span>
          <div className={toggleState === 6 ? 'services__modal active-modal' : 'services__modal' }>
            <div className='services__modal-content'>
              <AiOutlineClose className='services__modal-close' onClick={() => toggleTab(0)} />
              <h3 className='services__modal-title'>Damaged Nail Reconstruction</h3>
              <p className='services__modal-description'>
              In some severe cases, nails can become very damaged and look extremely unhealthy. 
              This can be caused by fungal infection, discolouration, corns under nails, loss of nail 
              or its part due to a nail removal surgery or injury
              </p>
              <a download="" href={Pedicure} className='button button--flex'>
              Download Full List 
                    <AiOutlineDownload />
                </a>
              <div className='services__modal-items'>
                <div className='services__modal-inner'>
                  <h4>Pedicure</h4>
                  <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>File, cuticles & gel polish 30mins - €25 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Without gel polish 60 mins - €50</p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>With gel polish 70 mins - €60 </p>
                    </li>
                  </ul>
                </div>
                <div className='services__modal-inner'>
                  <h4>Manicure</h4>
                  <ul className='services__modal-services grid'>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>File gel polish 25 mins - €20 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>File gel polish & cuticles 35 mins - €25 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>File shellac 40 mins - €25 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Shellac/gel removal 20 - €10 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Gel nails full set 90 mins - €50 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Gel/acrylic removal 60 mins - €25 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Gel nails & shellac 90 mins - €65 </p>
                    </li>
                    <li className='services__modal-service'>
                      <VscDebugBreakpointLogUnverified className='services__modal-icon'/>
                      <p className='services__modal-info'>Paraffin or Hand scrub treatments 15 mins - €10 </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services