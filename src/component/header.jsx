import React from 'react'
import logo from '../assets/logo.svg'
import wallet from '../assets/wallet.svg'   

const Header = () => {
  return (
     <div className="w-full h-[56px] p-[12px] gap-[6px] flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <div className="w-[28px] h-[28px] rounded-[8px] opacity-100 bg-[#A9E851] flex items-center justify-center">
              <img width="16px" height="16px" src={logo} />
            </div>
            <span className="font-inter font-semibold text-[20px] leading-6 tracking-normal text-[#FFFFFF] whitespace-nowrap">
              Token Portfolio
            </span>
          </div>
          <button
            className="w-[136px] min-w-[130px] h-8 opacity-100 flex items-center justify-center gap-[8px] 
         rounded-full px-10 py-[6px] 
         bg-[#A9E851] 
         shadow-[0px_0px_0px_1px_#1F6619,0px_1px_2px_0px_#1F661966,0px_0.75px_0px_0px_#FFFFFF33_inset] whitespace-nowrap"
          ><img src={wallet} />
               Connect Wallet
          </button>
        </div>
  )
}

export default Header
