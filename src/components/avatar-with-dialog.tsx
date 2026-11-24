import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "./ui/separator"
import { ModalProfil } from "./modals/profil"
import { BookOpen, CalendarRange, LanguagesIcon } from "lucide-react"
import { QuestionResponse } from "./chat/chat"
import { useTranslation } from "react-i18next"

type Props = {
    className?: string
}

export default function AvatarWithDialog({ className }: Props) {
    const [openDialog, setOpenDialog] = useState<"profil" | "chat" | null>(null)
    const { t } = useTranslation();

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className={`cursor-pointer ${className}`}>
                        <AvatarImage src="/assets/images/profile.webp" alt="profile" />
                        <AvatarFallback>Profile</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem onClick={() => setOpenDialog("profil")}>
                        {t("viewMyprofile")}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpenDialog("chat")}>
                        Questions ?
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={openDialog === "profil"} onOpenChange={() => setOpenDialog(null)}>
                <DialogContent
                    className="w-[95vw] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl border-none p-0 gap-0"
                    style={{ height: "90vh", display: "flex", flexDirection: "column", overflow: "hidden" }}
                >
                    {/* Header fixe */}
                    <div className="flex justify-center items-center gap-3 sm:gap-5 flex-col shrink-0 pt-6 px-4">
                        <ModalProfil />
                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">MON PROFILE</h1>
                    </div>

                    {/* Contenu scrollable - Ajout de overflowX: "hidden" par sécurité */}
                    <div style={{ flex: 1, minHeight: 0, overflowY: "auto", overflowX: "hidden" }}>
                        {/* Ajout de w-full ici pour structurer le conteneur */}
                        <div className="flex flex-col items-center w-full px-4 sm:px-6 pb-6 pt-4">
                            <div className="p-3 sm:p-4 border border-white rounded-sm w-full max-w-lg">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <AvatarImage src="/assets/images/profile.webp" alt="profile" />
                                        <AvatarFallback>Profile</AvatarFallback>
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-lg sm:text-xl font-semibold">SETH TAFIKA</h1>
                                        <p className="text-sm sm:text-base">Développeur Front & Mobile</p>
                                    </div>
                                </div>
                                <Separator className="my-3" />
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <LanguagesIcon />
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-lg sm:text-xl font-semibold">Langues</h1>
                                        <p className="text-sm sm:text-base">Français, Anglais</p>
                                    </div>
                                </div>
                            </div>

                            {/* CORRECTION ICI : Remplacement de m-4 sm:m-7 par my-4 sm:my-6 */}
                            <h1 className="text-lg sm:text-xl font-semibold my-4 sm:my-6 self-start w-full max-w-lg mx-auto md:mx-0 md:self-center">
                                Diplômes et certifications
                            </h1>
                            <div className="p-3 sm:p-4 border border-white rounded-sm w-full max-w-lg">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <BookOpen />
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-base sm:text-xl font-semibold">2023: Licence en Informatique</h1>
                                        <p className="text-sm sm:text-base">EMIT-Ecole de Management et d'Innovation Technologique</p>
                                    </div>
                                </div>
                                <Separator className="my-3" />
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <CalendarRange />
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-base sm:text-xl font-semibold">2024: Certification</h1>
                                        <p className="text-sm sm:text-base">2ème-Hackathon "Mois de l'innovation"</p>
                                    </div>
                                </div>
                                <Separator className="my-3" />
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <BookOpen />
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-base sm:text-xl font-semibold">Mars 2026: Master 2 en Informatique</h1>
                                        <p className="text-sm sm:text-base">EMIT-Ecole de Management et d'Innovation Technologique</p>
                                    </div>
                                </div>
                                <Separator className="my-3" />
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <CalendarRange />
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-base sm:text-xl font-semibold">08 Mai 2026: Certification</h1>
                                        <p className="text-sm sm:text-base">Google Cloud Certified Professional Cloud Developer</p>
                                    </div>
                                </div>
                            </div>

                            {/* CORRECTION ICI : Remplacement de m-4 sm:m-7 par my-4 sm:my-6 */}
                            <h1 className="text-lg sm:text-xl font-semibold my-4 sm:my-6 self-start w-full max-w-lg mx-auto md:mx-0 md:self-center">
                                Expériences
                            </h1>
                            <div className="p-3 sm:p-4 border border-white rounded-sm w-full max-w-lg mb-4">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <BookOpen />
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-sm sm:text-xl font-semibold">Octobre 2025 - Maintenant: Développeur Frontend & mobile</h1>
                                        <p className="text-sm sm:text-base">Clearmind Analytics Antananarivo</p>
                                    </div>
                                </div>
                                <Separator className="my-3" />
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <BookOpen />
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-sm sm:text-xl font-semibold">Avril 2025 - Octobre 2025: Développeur Frontend & mobile</h1>
                                        <p className="text-sm sm:text-base">ESN ARATO Antambohobe Fianarantsoa</p>
                                    </div>
                                </div>
                                <Separator className="my-3" />
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <CalendarRange />
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-sm sm:text-xl font-semibold">2024: Développeur mobile</h1>
                                        <p className="text-sm sm:text-base">Projet PNUD</p>
                                    </div>
                                </div>
                                <Separator className="my-3" />
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <CalendarRange />
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-sm sm:text-xl font-semibold">2024: Développeur Frontend</h1>
                                        <p className="text-sm sm:text-base">Hackathon "Mois de l'innovation"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <Dialog open={openDialog === "chat"} onOpenChange={() => setOpenDialog(null)}>
                <DialogContent className="w-[95vw] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                    <QuestionResponse />
                </DialogContent>
            </Dialog>
        </>
    )
}