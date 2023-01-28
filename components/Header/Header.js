import Image from "next/image";
import Link from "next/link";


const Header = () => {
    return (
        <div className="grid grid-cols-2 ">
            <div>
               <h1 className="font-[700] text-[40px] text-[#273240]">Find The Care <br /> You Need</h1>
               <p className="b-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
               <div className="p-[16px 44px] font-[500] text-center te  text-white gap-10px w-[243px] h-[56px] bg-[#FF8B42] rounded-[6px] " href='#'>
                Make Appointment
               </div>
            </div>
            <div>
                <div className="grid grid-cols-2">
                    <div className="relative">
                        <div className="gap-4">
                            <Image src='/Rectangle 60.png' className="w-[338px]" width={338} height={177}></Image>
                            <Image src='/Rectangle 16.png' width={338} height={434}></Image>
                        </div>
                        <Image className="absolute bottom-0 left-0" src='/pic1.png' width={407} height={618}></Image>
                    </div>
                    <div className="relative">
                        <div className="gap-4">
                            <Image src='/Rectangle 61.png' width={338} height={434}></Image>
                            <Image src='/Rectangle 62.png' width={338} height={177}></Image>
                        </div>
                        <Image className="absolute bottom-0 left-0" src='/pic2.png' width={407} height={618}></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;