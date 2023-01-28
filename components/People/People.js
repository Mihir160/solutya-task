import Image from "next/image";

const People = () => {
    return (
        <div>
            <div className="relative ">
                <Image
                    src="/Rectangle 28.png" width={1440} height={510}
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gradient-to-t h-[510px] from-indigo-500 ">
                    <div className="">
                        <div className="">
                            <div className="">
                                <div className="flex py-[113px] justify-around py-25 items-center">
                                    <div className="flex flex-col items-center">
                                        <Image src='/Vector1.png' width={97} height={112}></Image>
                                        <h1 className="font-[700] text-[40px] text-[#FFFFFF]">50</h1>
                                        <div className="divider ml-[50px]  divider-horizontal w-[128px] h-[5px] rounded-[10px] bg-[#FFFFFF]"></div>

                                        <p className="font-[700] text-[32px] text-[#FFFFFF]">Medical Experts</p>
                                    </div>
                                    <div className="flex flex-col text-center items-center">
                                        <Image src='/bed.png' width={98} height={59}></Image>
                                        <h1 className="font-[700] text-[40px] text-[#FFFFFF]">500</h1>
                                        <div className="divider ml-[50px]   divider-horizontal w-[128px] h-[5px] rounded-[10px] bg-[#FFFFFF]"></div>

                                        <p className="font-[700] text-[32px] text-[#FFFFFF]">Hospital Rooms</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Image src='/cup.png' width={72} height={73}></Image>
                                        <h1 className="font-[700] text-[40px] text-[#FFFFFF]">20</h1>
                                        <div className="divider  ml-[50px]  divider-horizontal w-[128px] h-[5px] rounded-[10px] bg-[#FFFFFF]"></div>

                                        <p className="font-[700] text-[32px] text-[#FFFFFF]">Awwwards Win</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Image src='/emoji.png' width={86} height={87}></Image>
                                        <h1 className="font-[700] text-[40px] text-[#FFFFFF]">5000</h1>
                                        <div className="divider ml-[50px]   divider-horizontal w-[128px] h-[5px] rounded-[10px] bg-[#FFFFFF]"></div>

                                        <p className="font-[700] text-[32px] text-[#FFFFFF]">Happy Patients</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default People;