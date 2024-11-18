import Image from "next/image";
import img from "../(public)/abc.jpg"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import desert from "../(public)/desert.png"
import page from "../(public)/multi page website.png"
import flower from "../(public)/flower homepage.png"
import periodic from "../(public)/periodic table.png"



export default function Home() {

  return (
   <div className="home">
      
      <div className="container">
         <h3>Hello!</h3>
         <h1>I'm <span>Arhama Yousfi</span></h1>
         <p>A passionate web developer who loves turning ideas into interactive, user-friendly websites. 
            I specialize in creating clean, responsive, and accessible web experiences using modern web 
            technologies. I’m always excited to tackle new challenges and continue learning in this ever-evolving 
            field.</p>
      </div>

      <div className="img">
         <Image
            src={img}
            width={300}
            height={300}
            alt="img"
          />
      </div>

      <div className="btn">
        <a href="#contact">
        <button>Hire Me</button>
        </a>
      </div>

      <div className="butn">
        <a href="https://www.linkedin.com/in/arhama-yousfi-3174782ba">
        <button>Let's Talk</button>
        </a>
      </div>

      <div>
         <a href="http://github.com/ArhamaYousfi">
         <FaGithub className="git" />
         </a>
      </div>

      <div>
         <a href="https://www.linkedin.com/in/arhama-yousfi-3174782ba">
         <FaLinkedin className="lindn" />
         </a>
      </div>
  
      <div>
         <a href="mailto:arhamayousfi05@gmail.com">
         <CgMail className="mail" />
         </a>
      </div>






      <div className="about">
        <h1>About <span>Me</span></h1>
     </div>

      <div className="abt-img">
        <Image
          src={img}
          width={250}
          height={250}
          alt="igm"
        />
      </div>

      <div className="abth1">
        <h1>Web <span> Developer!</span></h1>
     </div>

      <div className="para">
        <p>Hi, I’m Arhama Yousfi, a web developer with expertise in front-end and back-end technologies like HTML,
   CSS, TypeScript and JavaScript and currently exploring in Next.js, Phyton, Metaverse and Web3.0. I’m passionate about building clean, responsive websites and 
        always eager to learn and implement new technologies to improve my skills.</p>
     </div>

     <div className="about-btn">
        <a href="https://www.linkedin.com/in/arhama-yousfi-3174782ba">
        <button>View My Profile</button>
        </a>
      </div>






      <div className="skill">
        <p>Explore My</p>
        <h1>My <span>Skills</span></h1>

      <div> <div className="skill-bar-h">
                <div className="skill-name">HTML-5</div>
                <div className="progress-bar">
                    <div className="progress-fill" style={{width: `85%`}}></div>
                </div>
      </div>
    
        <div className="skill-bar-c">
                <div className="skill-name">CSS-3</div>
                <div className="progress-bar">
                     <div className="progress-fill" style={{width: `75%`}}></div>
              </div>
       </div>

         <div className="skill-bar-t">
                <div className="skill-name">Typescript</div>
                <div className="progress-bar">
                     <div className="progress-fill" style={{width: `70%`}}></div>
              </div>
        </div>

        <div className="skill-bar-j">
                <div className="skill-name">Javacript</div>
                <div className="progress-bar">
                     <div className="progress-fill" style={{width: `70%`}}></div>
                </div>
        </div>

      </div>






       <div className="projects">
         <h1>My <span>Projects</span></h1>
       </div>

        <div className="cards">
            <div className="card1">
                <Image
                  src={desert}
                  width={200}
                  height={200}
                  alt="desert"
                />
                <h4>Desert Home Page</h4>
            </div>

            <div className="card2">
                <Image
                  src={page}
                  width={200}
                  height={200}
                  alt="page"
                />
                <h4>Multi Page website</h4>
            </div>

            <div className="card3">
                <Image
                  src={flower}
                  width={200}
                  height={200}
                  alt="flower"
                />
                <h4>Flower Home Page</h4>
             </div>

             <div className="card4">
                <Image
                  src={periodic}
                  width={200}
                  height={200}
                  alt="periodic"
                />
                <h4>Periodic Table</h4>
           </div>

           <div className="project-btn">
            <a href="http://github.com/ArhamaYousfi">
            <button>View All Projects</button>
            </a>
           </div>
        </div>






        <div id="contact"  className="contact">

          <h1>Contact <span>Me</span></h1>
          
         <div className="name"> 
            <input
              type="text"  
              placeholder="Full Name" 
            />
         </div>

         <div className="email">
           <input
             type="text"  
             placeholder="Email Address" 
            /> 
          </div>

          <div className="number">
             <input
              type="number"  
              placeholder="Mobile Number" 
            />
          </div>

          <div className="subject">
            <input
              type="text"  
              placeholder="Subject" 
            />  
          </div>

          <div className="msg">
            <input
              type="text"  
              placeholder="Your Message" 
            /> 
          </div>

          <div className="contact-btn">
            <a href="mailto:arhamayousfi05@gmail.com">
            <button>Send</button>
            </a>
           </div>

        </div>

        

     </div>
    </div>
  )
};
