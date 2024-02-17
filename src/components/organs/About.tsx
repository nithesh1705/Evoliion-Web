import { Fade } from "react-awesome-reveal";
import Image1 from "../../assets/images/1.png";
import Image2 from "../../assets/images/2.png";
import Image3 from "../../assets/images/3.png";
import Image4 from "../../assets/images/4.png";
import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";
import { AboutTexts } from "../particles/Data";

const About = () => {
    return (
        <section id="about-section" className="w-full h-auto flex items-center bg-zinc-950">
            <main className="w-full md:h-[1100px] grid md:grid-cols-2 items-center lg:mx-20 md:mx-10 mx-6 gap-10 md:gap-10 py-12 md:py-0">
                <div className="h-full w-full md:order-1 order-2 flex flex-col justify-center items-start gap-2 pb-8 md:pb-12">
                    <Fade>
                        <div className="flex flex-col mt-10 items-start relative before:absolute before:-bottom-6 before:left-0 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-pink-500 before:to-violet-500 z-10"></div>
                        <Text as="h2" className="text-zinc-200 mt-10 mb-4 text-lg">{AboutTexts.aboutTilte}</Text>
                        <Text as="p" className="text-zinc-400 text-justify text-base">{AboutTexts.aboutContent}</Text>
                        <div className="flex flex-col mt-10 items-start relative before:absolute before:-bottom-6 before:left-0 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-pink-500 before:to-violet-500 z-10"></div>
                        <Text as="h2" className="text-zinc-200 mt-10 mb-4 text-lg">{AboutTexts.missionTilte}</Text>
                        <Text as="p" className="text-zinc-400 text-justify text-base">{AboutTexts.missionContent}</Text>
                        <div className="flex flex-col mt-10 items-start relative before:absolute before:-bottom-6 before:left-0 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-pink-500 before:to-violet-500 z-10"></div>
                        <Text as="h2" className="text-zinc-200 mt-10 mb-4 text-lg">{AboutTexts.collobrationtitle}</Text>
                        <Text as="p" className="text-zinc-400 text-justify text-base">{AboutTexts.collobrationcontent}</Text>
                        <div className="flex flex-col mt-10 items-start relative before:absolute before:-bottom-6 before:left-0 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-pink-500 before:to-violet-500 z-10"></div>
                        <Text as="h2" className="text-zinc-200 mt-10 mb-4 text-lg">{AboutTexts.inovationTilte}</Text>
                        <Text as="p" className="text-zinc-400 text-justify text-base">{AboutTexts.inovationContent}</Text>
                        <div className="flex flex-col mt-10 items-start relative before:absolute before:-bottom-6 before:left-0 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-pink-500 before:to-violet-500 z-10"></div>
                        <Text as="h2" className="text-zinc-200 mt-10 mb-4 text-lg">{AboutTexts.partnerTitle}</Text>
                        <Text as="p" className="text-zinc-400 text-justify text-base">{AboutTexts.partnerContent}</Text>
                    </Fade>
                </div>
                <div className="w-full md:h-[800px] h-[700px] md:order-2 order-1 grid grid-cols-3 grid-rows-3">
                    <Image alt="Welcome Image" objectCover="object-cover" className="col-span-3 row-span-2 w-full h-full" image={Image4} />
                    <Image alt="Welcome Image" objectCover="object-cover" className="w-full h-full" image={Image2} />
                    <Image alt="Welcome Image" objectCover="object-cover" className="w-full h-full border border-amber-500" image={Image3} />
                    <Image alt="Welcome Image" objectCover="object-cover" className="w-full h-full" image={Image1} />
                </div>
            </main>

        </section>
    )
}

export default About