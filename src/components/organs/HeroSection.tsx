import { useCallback, useRef } from "react";
import { Image } from "../atoms/Image";
import HeroImg1 from "../../assets/hero/1.png";
import HeroImg2 from "../../assets/hero/2.png";
import HeroImg3 from "../../assets/hero/3.png";
import { HeroTexts } from "../particles/Data";
import Slider from "react-slick";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import StickyIcons from "../molecules/StickyIcons";
import { Slide, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const HeroSection = () => {
    const sliderRef = useRef<Slider | null>();

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const redirectToEmail = (subject: string, body: string) => {
        const emailAddress = "notification@evoliion.com";
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);

        const mailtoURL = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;

        window.location.href = mailtoURL;
    };

    const redirectToEnrollNow = () => {
        const subject = "Enroll Now - Registration Request";
        const body = "Dear EVOLiiON Team,\n\nI would like to enroll in the training program. Please provide me with further details and registration instructions.\n\nThank you.";

        redirectToEmail(subject, body);
    };

    const redirectToHireUsNow = () => {
        const subject = "Hiring Request";
        const body = "Dear EVOLiiON Team,\n\nI am interested in hiring your services. Could we schedule a meeting to discuss the details?\n\nThank you.";

        redirectToEmail(subject, body);
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        cssEase: "linear",
    };

    const renderProfileImg = useCallback((element: number) => {
        switch (element) {
            case 0:
                return HeroImg1;
            case 1:
                return HeroImg2;
            case 2:
                return HeroImg3;
            default:
                return "";
        }
    }, []);

    return (
        <section className="w-full h-auto bg-gradient-to-r from-red-500 to-amber-500 relative overflow-x-hidden">
            <Slider ref={(slider) => (sliderRef.current = slider)} {...settings} className="h-full">
                {HeroTexts.map((hero, index) => (
                    <main className="w-full lg:h-screen md:h-[50vh] h-screen relative bg-zinc-900 overflow-x-hidden" key={index}>
                        <Zoom className="h-full">
                            <Image className="md:w-[60%] w-full md:h-full h-1/2" alt={`HeroImg${index + 1}`} objectCover="object-cover" image={renderProfileImg(index)} />
                        </Zoom>

                        <div className="md:w-[50%] w-full md:h-full h-1/2 absolute md:top-0 top-1/2 right-0 bg-zinc-900 flex flex-col md:justify-center justify-start lg:gap-8 md:gap-4 gap-2 lg:px-20 md:px-6 px-4 overflow-x-hidden">
                            <Text as="h1" className="lg:text-6xl md:text-4xl text-4xl md:mt-10 mt-10 text-zinc-100 font-extrabold">
                                <Slide direction="right">{hero.Heading}</Slide>
                            </Text>
                            <Text as="p" className="lg:text-lg text-base text-zinc-400 my-4">
                                <Slide direction="left">{hero.Paragraph}</Slide>
                            </Text>
                            <div className="flex items-center gap-8">
                                <Slide direction="up">
                                    {hero.Button === "Hire Us Now!" && (
                                        <Button
                                            type="button"
                                            className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-purple-500 to-pink-500"
                                            onClick={redirectToHireUsNow}
                                        >
                                            {hero.Button}
                                        </Button>
                                    )}
                                    {hero.Button === "Explore Projects" && (
                                        <Link to="/projects" className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-purple-500 to-pink-500">
                                            {hero.Button}
                                        </Link>
                                    )}
                                    {hero.Button === "Enroll Now" && (
                                        <Button
                                            type="button"
                                            className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-purple-500 to-pink-500"
                                            onClick={redirectToEnrollNow}
                                        >
                                            {hero.Button}
                                        </Button>
                                    )}
                                </Slide>
                            </div>
                        </div>
                    </main>
                ))}
            </Slider>
            <div className="flex justify-end lg:justify-start items-center gap-4 absolute lg:bottom-10 md:bottom-5 md:right-10 right-4 bottom-4">
                <Button onClick={previous} type="button" className="w-8 h-8 border rounded-full border-white-500 flex items-center justify-center text-pink-500 hover:text-green-500 hover:border-blue-500">
                    <ArrowCircleLeft size={20} color="currentColor" weight="light" />
                </Button>
                <Button onClick={next} type="button" className="w-8 h-8 border rounded-full border-white-500 flex items-center justify-center text-pink-500 hover:text-green-500 hover:border-blue-500">
                    <ArrowCircleRight size={20} color="currentColor" weight="light" />
                </Button>
            </div>
            <StickyIcons />
        </section>
    );
};

export default HeroSection;
