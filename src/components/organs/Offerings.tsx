import { List } from "../atoms/List"
import { Text } from "../atoms/Text"
import { Card } from "../molecules/Card"
import { OfferingPlans } from "../particles/Data"
import { Button } from "../atoms/Button";
import { SmileyWink } from "@phosphor-icons/react";


const Offerings = () => {

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

    const redirectToProjects = () => {
        const subject = "Project Inquiry";
        const body = "Dear EVOLiiON Team,\n\nI am interested in exploring your projects and would like to know more. Can you provide additional details and information?\n\nThank you.";

        redirectToEmail(subject, body);
    };


    return (
        <section className="w-full  h-auto py-20 md:py-28 lg:py-40 bg-zinc-950 flex flex-col md:gap-28 gap-20 justify-center items-center">
            <div className="flex flex-col items-center relative before:absolute before:-bottom-6 before:left-30 before:w-36 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-indigo-400 before:to-cyan-400 z-10">
                <Text as="p" className="text-teal-500 md:text-sm text-xs tracking-widest uppercase">{OfferingPlans.firstText}</Text>
                <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">{OfferingPlans.secondText}</Text>
                <Text as="h1" className="absolute text-zinc-500/20 md:left-24 lg:left-40 left-20 lg:text-9xl md:text-7xl text-6xl font-extrabold lg:-top-32 md:-top-20 -top-16 -z-10" >
                    <SmileyWink size={80} color="currentColor" weight="fill" />
                </Text>
            </div>
            <main className="grid lg:w-[90%] md:w-[96%] w-[90%] md:grid-cols-3 items-center gap-8 md:gap-4 lg:gap-8">
                {
                    OfferingPlans.cards.map((card, index) => (
                        <Card className={`w-full flex flex-col items-center gap-4 border border-zinc-500  transition-all duration-200 cursor-pointer hover:border-red-500/50 ${index === 1 ? "lg:py-16 py-10" : "py-10"}`} key={index}>
                            
                            <Text as="h3" className={`capitalize text-base font-semibold w-full py-2 text-center  text-zinc-100 my-3 ${card.caption.includes('12') ? "bg-gradient-to-r from-emerald-500 to-cyan-500" : "bg-gradient-to-r from-emerald-500 to-cyan-500"}`}>{card.caption}</Text>

                            <ul className="flex flex-col items-center">
                                {
                                    card.benefits.map((benefit, index) => (
                                        <List className="text-zinc-300 py-3 text-base capitalize relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-zinc-700 last:before:w-0" key={index}>{benefit}</List>
                                    ))
                                }
                            </ul>
                            
                            {card.Button === "Get one" && (
                                <Button
                                    type="button"
                                    className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-fuchsia-600 to-purple-600"
                                    onClick={redirectToProjects}
                                >
                                    {card.Button}
                                </Button>
                            )}
                            {card.Button === "Hire Us Now!" && (
                                <Button
                                    type="button"
                                    className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-fuchsia-600 to-purple-600"
                                    onClick={redirectToHireUsNow}
                                >
                                    {card.Button}
                                </Button>
                            )}
                            {card.Button === "Enroll Now" && (
                                <Button
                                    type="button"
                                    className="px-10 font-medium text-white py-2.5 bg-gradient-to-r whitespace-nowrap from-fuchsia-600 to-purple-600"
                                    onClick={redirectToEnrollNow}
                                >
                                    {card.Button}
                                </Button>
                            )}
                            
                        </Card>
                    ))
                }

            </main>
        </section>
    )
}

export default Offerings