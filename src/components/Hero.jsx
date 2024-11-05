import logo from "../assets/logoBlue2.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <img src={logo} alt="sumz_logo" className="w-20 object-contain" />
    <button type="button" onClick={()=>window.open('Link To My GitHub Project')} className="black_btn">
    GitHub</button>
      </nav>
        <h1 className="head_text">
           Summarize Articles with <br
           className="max-md:hidden"/> 
           <span
           className="orange_gradient"
           >OpenAI GPT-4</span>
        </h1>
        <h2 className="desc">
        Save time and effort with Summize. <br/>Paste a link to any article and get a concise summary.</h2>
      </header>
  );
};

export default Hero;


