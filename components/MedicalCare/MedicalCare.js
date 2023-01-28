import Image from "next/image";

const MedicalCare = () => {
    const medicalCare = [
        {
            'img': "/Rectangle 26 (1).png",
            'title': "Orthopedic Clinic"
        },
        {
            'img': "/Rectangle 26 (2).png",
            'title': "Cardiac Surgery"
        },
        {
            'img': "/Rectangle 26 (3).png",
            'title': "Cancer Screening"
        },
        {
            'img': "/Rectangle 26 (4).png",
            'title': "Neurology"
        },
        {
            'img': "/Rectangle 26 (5).png",
            'title': "Pediatric & Adult Audiology"
        }, {
            'img': "/Rectangle 26 (6).png",
            'title': "Neurology"
        }, {
            'img': "/Rectangle 26 (7).png",
            'title': "Hearing Tests & Aids"
        },
        {
            'img': "/Rectangle 26.png",
            'title': "Orthopedic Clinic"
        }

    ]
    return (
        <div>
            <div className="text-center mt-12">
                <h1 className="font-[700] text-[40px] text-[#273240]">Our Medical Care</h1>
                <p className="font-[500] text-[16px] text-[#273240]">Services We Provide </p>
            </div>
            <div>
                <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                    <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">

                        {
                            medicalCare.map(medical => <div

                                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                            >
                                <div className="flex flex-col h-full">
                                    <Image
                                        src={medical.img} width={303} height={227}
                                        className="object-cover w-full h-48"
                                        alt=""
                                    />
                                    <div className="flex-grow bg-[#6E27E0] text-center text-white  border border-t-0 rounded-b">
                                        <div className="p-5">
                                            <h6 className="mb-2 font-[500] text-[20px] leading-5">
                                                {medical.title}
                                            </h6>

                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }


                    </div>
                    <div className="text-center">
                        <a
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-[#FF8B42] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            LOAD MORE DEPARTMENTS
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalCare;