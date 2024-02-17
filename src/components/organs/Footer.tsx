import { Link } from "react-router-dom"
import { Text } from "../atoms/Text"
import { Alien, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react"
import { FooterTexts } from "../particles/Data"
import { List } from "../atoms/List"
import { useCallback } from "react"



const Footer = () => {


    const renderIcon = useCallback((element: number) => {
        switch (element) {
            case 0:
                return <MapPin size={20} color="currentColor" />;
            case 1:
                return <EnvelopeSimple size={20} color="currentColor" />;
            case 2:
                return <Phone size={20} color="currentColor" />
        }
    }, [])

    return (
        <footer className="w-full bg-zinc-950 flex flex-col">
            <main className="w-full lg:pt-28 lg:pb-12 pt-20 pb-12 px-6 grid md:grid-cols-3 lg:gap-8 md:gap-5 gap-8 lg:px-32">
                <div className="flex flex-col gap-2">
                <Link to={`/`} className="font-extrabold flex items-center relative md:text-2xl text-lg">
                <Text as="span" className="bg-gradient-to-r from-fuchsia-600 to-blue-500 bg-clip-text text-transparent">
                    EVOL
                </Text>
                <div className="relative">
                    <Text as="span" className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                        iiON
                    </Text>
                    <Text as="span" className="text-lime-500 absolute -top-5 -left-1">
                        <Alien size={23} color="currentColor" weight="fill" />
                    </Text>
                </div>
            </Link>
                    <Text as="p" className="text-zinc-400 text-justify">{FooterTexts.underLogoText}</Text>
                </div>

                {/* Quick Links  */}
                <div className="flex flex-col md:items-center md:mt-8 gap-4">
                    <Text as="h1" className="text-zinc-300 text-2xl font-bold">{FooterTexts.quickLinks.caption}</Text>
                    <ul className="flex flex-col gap-2">
                        {
                            FooterTexts.quickLinks.links.map((link, index) => (
                                <List className="text-zinc-400" key={index}>
                                    <Link to={link.url} className="transition-all duration-200 hover:text-violet-500">{link.name}</Link>
                                </List>
                            ))
                        }
                    </ul>
                </div>

                {/* Quick contacts  */}
                <div className="flex flex-col md:mt-8 gap-6">
                    <Text as="h1" className="text-zinc-300 text-2xl font-bold">{FooterTexts.contacts.caption}</Text>
                    <ul className="flex flex-col gap-4">
                        {
                            FooterTexts.contacts.names.map((name, index) => (
                                <List className="text-zinc-400 flex items-start gap-2" key={index}>
                                    <Text as="span" className="text-amber-500 mt-1">{renderIcon(index)}</Text>
                                    <Text as="span" className="">{name.name}</Text>
                                </List>
                            ))
                        }
                    </ul>
                </div>
            </main>
            <div className="text-center py-3 bg-gradient-to-r from-violet-500 to-blue-500">
                <Text as="p" className="text-zinc-200 md:text-sm text-xs font-bold">{FooterTexts.copyright}</Text>
            </div>
        </footer>
    )
}

export default Footer