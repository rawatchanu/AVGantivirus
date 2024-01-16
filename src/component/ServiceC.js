import React from 'react';
import "./serviceC.css";
import {CiTimer} from "react-icons/ci";
import { MdBrowserUpdated } from "react-icons/md";
import { FaShieldVirus } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { MdSecurityUpdateGood } from "react-icons/md";
import { FaChalkboardUser } from "react-icons/fa6";
import { FcMultipleDevices } from "react-icons/fc";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { GrBusinessService } from "react-icons/gr";
import { GrMultiple } from "react-icons/gr";
import Simg from "../images/simage.jpg";
import Simg2 from "../images/simage2.jpg";
import Simg3 from "../images/simage3.jpg";
import Simg4 from "../images/simage4.jpg";

const ServiceC = () => {
  return (
    <div className='serviceC'>
            <div className='service-box'>

                    <div className='service-card'>
                        <div className='service-content'>
                            <h2>Malware Detection and Removal</h2>
                            <p>AVG Antivirus Program is better at Malware Detection and Removal, employing advanced algorithms
                                 to quickly identify and exclude cruel software. Pure and efficient system scans guarantee the
                                  removal of hidden threats, ensuring your digital space remains secure.
                                 Trust AVG for determined protection against a spectrum of malware threats.</p>
                            
                            <div className='service-desc'>
                                <div className='icon'>
                                    <FaShieldVirus className='i-n'/>
                                    <p>Virus and Malware Scans</p>
                                </div>
                                <div className='icon'>
                                    <MdBrowserUpdated className='i-n'/>
                                    <p>System Cleanup and Restoration</p>
                                </div>
                                <div className='icon'>
                                    <MdSecurity className='i-n' />
                                    <p>Security Audits and Recommendations</p>
                                </div>
                                <div className='icon'>
                                    <CiTimer className='i-n'/>
                                    <p>24/7 Support and Monitoring</p>
                                </div>
                            </div>
                            <div className='issues'>
                                <h3>Issues on your laptop</h3>
                                <ul>
                                    <li>Overlooking actual malware threats, resulting in incomplete detection.</li>
                                    <li>Intensive scanning processes leading to high CPU and memory usage.</li>
                                    <li>Failing to completely remove malware from the system.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='service-img'>
                            <img src={Simg} />
                        </div>
                    </div>

                    
                    <div className='service-card'>
                        <div className='service-content'>
                            <h2>Firewall Configuration</h2>
                            <p>AVG Antivirus Program prioritizes your online safety with customizable Firewall Configuration.
                                 Tailor your protective barrier against unauthorized access, optimizing security settings to 
                                 suit your needs. Experience peace of mind as AVG empowers you with control over your digital space, 
                                safeguarding against potential cyber threats with ease and efficiency.</p>

                            <div className='service-desc'>
                                <div className='icon'>
                                    <MdOutlineWifiProtectedSetup className='i-n'/>
                                    <p>Firewall Setup and Configuration</p>
                                </div>
                                <div className='icon'>
                                    <GiNetworkBars className='i-n'/>
                                    <p>Network Security Assessments</p>
                                </div>
                                <div className='icon'>
                                    <MdSecurityUpdateGood className='i-n' />
                                    <p>Firewall Management and Monitoring</p>
                                </div>
                                <div className='icon'>
                                    <CiTimer className='i-n'/>
                                    <p>24/7 Support and Monitoring</p>
                                </div>
                            </div>

                            <div className='issues'>
                                <h3>Issues on your laptop</h3>
                                <ul>
                                    <li>Cybercriminals may try to gain unauthorized access from your laptop, pretending security risks.</li>
                                    <li>Malicious software may attempt to communicate with external servers.</li>
                                    <li>Cyber attackers may perform port scans to identify weaknesses.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='service-img'>
                            <img src={Simg2} />
                        </div>
                    </div>

                    <div className='service-card'>
                        <div className='service-content'>
                            <h2>Identity Protection</h2>
                            <p>AVG Antivirus Program extends a shield of Identity Protection, securing your personal information
                                 from cyber threats. Our robust measures prevent unauthorized access and safeguard sensitive data,
                                  ensuring a secure online experience. Trust AVG to defend your digital identity, 
                                providing a resilient barrier against identity theft and online vulnerabilities.</p>       
                            <div className='service-desc'>
                                <div className='icon'>
                                    <GrMultiple className='i-n'/>
                                    <p>Compatibility Testing</p>
                                </div>
                                <div className='icon'>
                                    <FaChalkboardUser className='i-n'/>
                                    <p>User Experience (UX) Optimization</p>
                                </div>
                                <div className='icon'>
                                    <MdSecurity className='i-n' />
                                    <p>Security Audits and Recommendations</p>
                                </div>
                                <div className='icon'>
                                    <CiTimer className='i-n'/>
                                    <p>24/7 Support and Monitoring</p>
                                </div>
                            </div>

                            <div className='issues'>
                                <h3>Issues on your laptop</h3>
                                <ul>
                                    <li>Malicious applications may attempt to steal usernames and passwords.</li>
                                    <li>Attackers block communication between the user and an authorized website.</li>
                                    <li>Biometric data may be targeted for unauthorized access or misuse.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='service-img'>
                            <img src={Simg3} />
                        </div>
                    </div>

                    
                    <div className='service-card'>
                        <div className='service-content'>
                            <h2>Customer Support</h2>
                            <p>We at AVG Antivirus Program are proud of our prompt and helpful customer service.
                                 Our hardworking staff, which contains guard Shield Support, is here to help you with any 
                                 questions or problems you may have. Get individualized support to ensure a smooth and safe travel with AVG.
                                 Our first and very important priority is your internal well-being.</p> 
                            <div className='service-desc'>
                                <div className='icon'>
                                    <FcMultipleDevices className='i-n'/>
                                    <p>Multi-channel Support</p>
                                </div>
                                <div className='icon'>
                                    <IoChatboxEllipsesOutline className='i-n'/>
                                    <p>Technical Support</p>
                                </div>
                                <div className='icon'>
                                    <GrBusinessService className='i-n' />
                                    <p>Product or Service Training</p>
                                </div>
                                <div className='icon'>
                                    <CiTimer className='i-n'/>
                                    <p>24/7 Support and Monitoring</p>
                                </div>
                            </div>

                            <div className='issues'>
                                <h3>Issues on your laptop</h3>
                                <ul>
                                    <li>Users may face problems at the time of installation and first setup of the antivirus software.</li>
                                    <li>The antivirus software may cause system performance or slowdowns.</li>
                                    <li>Users are facing problems in updating antivirus programs to the latest version.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='service-img'>
                            <img src={Simg4} />
                        </div>
                    </div>
            
            </div>
    </div>
  )
}

export default ServiceC