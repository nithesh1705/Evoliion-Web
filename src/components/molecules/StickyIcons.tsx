import { InstagramLogo, DiscordLogo } from "@phosphor-icons/react";

const StickyIcons = () => {
    return (
        <aside className="fixed lg:bottom-0 bottom-1/2 left-0  flex flex-col gap-5 items-center bg-gradient-to-t z-40 from-violet-500 to-blue-500 rounded-e-lg py-3 px-2 ">
            <a href="https://discord.gg/hBbYuajh" target="_blank" className="text-zinc-100 hover:text-zinc-900">
                <DiscordLogo size={15} color="currentColor" weight="fill" />
            </a>
            <a href="https://www.instagram.com/cool_cyborgs/" target="_blank" className="text-zinc-100 hover:text-zinc-900">
                <InstagramLogo size={15} color="currentColor" weight="fill" />
            </a>
        </aside>
    )
}

export default StickyIcons