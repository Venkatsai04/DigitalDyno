import React from 'react'

const ContactMobile = ({mode}) => {

 const isLightMode = mode == "light"

  return (
    <div id='contact'  className={`m-auto w-[95%] h-[99%] ${mode == 'light' ? 'bg-sky-400 text-black' : 'bg-[#11022a] text-white'} rounded-xl my-3  overflow-hidden`}>
      <div className="relative w-full h-[800px] overflow-hidden text-left text-[17.88px] text-black font-porter-sans-block">
        <div className="absolute top-[39px] left-[34px] w-[292.5px] h-[79.5px]">
          <img
            className="absolute top-[0px] left-[140.2px] w-[79.5px] h-[79.5px]"
            alt=""
            src="/ellipse-13.svg"
          />
          <div className="absolute top-[31.3px] left-[0px] inline-block w-[292.5px] h-[17.8px] [backdrop-filter:blur(1.62px)]">
          <span className={isLightMode ? 'text-black' : 'text-white'}>{`contact  `}</span>
            <span className="text-yellow-400">us.</span>
          </div>
        </div>
        <div className="absolute top-[128px] left-[34px] w-[142px] h-[143px] flex flex-col items-start justify-start gap-[31.35px] text-[32.85px] text-darkslategray font-poiret-one">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.02em] [-webkit-text-stroke:0.7px_#000]">
              <p className={`m-0 ${isLightMode ? 'text-black [-webkit-text-stroke:1.3px_#000]' : 'text-white [-webkit-text-stroke:1.3px_white]'}`}>{`Get in Touch `}</p>
                <p className={`m-0 ${isLightMode ? 'text-black [-webkit-text-stroke:1.3px_#000]' : 'text-white [-webkit-text-stroke:1.3px_white]'} `}>with Us!</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-0 pl-[7.465296745300293px] gap-[7.47px] text-[11.94px] font-aladin">
            <div className="flex flex-row items-start justify-start gap-[10.45px]">
              <img
                className="relative w-[23.9px] h-[23.9px] overflow-hidden shrink-0"
                alt=""
                src="/icoutlinehomerepairservice.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[2.24px]">
              <div className={`relative tracking-[-0.01em] ${isLightMode ? 'text-black' : 'text-yellow-400'}`}>Phone</div>
                <div className="relative text-[8.96px] font-abel text-gray-100">
                  +919705772881
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[10.45px]">
              <img
                className="relative w-[23.9px] h-[23.9px] overflow-hidden shrink-0"
                alt=""
                src="/icoutlinemessage.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[2.24px]">
              <div className={`relative tracking-[-0.01em] ${isLightMode ? 'text-black' : 'text-yellow-400'}`}>Email</div>
                <div className="relative text-[8.96px] font-abel text-gray-100">
                  hi@website.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[45%] w-[100%] h-[50%] flex  items-center justify-center text-[11.94px] text-yellow-400 font-poiret-one">
          <div className="relative rounded-[17.88px] bg-black w-[80%] h-[97%] z-[0] flex flex-col justify-center items-center gap-y-5 text-yellow-400-400" >
            <input
              type="text"
              id="name"
              name="Name or Business Name"
              placeholder="Business Name"
              class="outline-none w-[80%] h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px]"
            />

            <input
              type="Phone"
              id="Phone"
              name="Phone or Business Phone"
              placeholder="Business Phone no"
              class="outline-none w-[80%] h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px]"
            />
            <input
              type="Email"
              id="Email"
              name="Email or Business Email"
              placeholder="Business Email"
              class="outline-none w-[80%] h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px]"
            />
            <input
              type="text"
              id="Service"
              name="Service or Business Service"
              placeholder="Business Service"
              class="outline-none w-[80%] h-[8%] bg-transparent border-white border rounded-md px-5 text-[20px]"
            />
      
            <textarea type="textarea"
              id="Message"
              placeholder="Business Message"
              class="outline-none w-[80%] h-[18%] bg-transparent border-white border rounded-md px-5 py-1 text-[20px]"
              name="postContent" rows={4} cols={40} />

            <div className="rounded-[45.84px] bg-yellow-400 w-[156.4px] overflow-hidden flex flex-row items-center justify-center  box-border text-[17.98px] text-black font-poiret-one cursor-pointer px-4 py-4">
              <div className="relative [-webkit-text-stroke:1px_#000]">
                <button type='submit'>Submit Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMobile