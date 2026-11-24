import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ProjectCard } from "@/components/projects/card";
import { MOBILES, PROJECTS } from "@/constants";
import NextArrow from "@/components/ui/arrow-next";
import PrevArrow from "@/components/ui/arrow-prev"
import { useTranslation } from "react-i18next";
import useIsMobile from "@/hooks/useResponsive";

type FilterKey = "all" | "client" | "perso";

export default function Projects() {
    const container = useRef(null)
    const isMobile = useIsMobile()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const { t } = useTranslation();

    // filtres indépendants pour chaque section
    const [frontendFilter, setFrontendFilter] = useState<FilterKey>("all")
    const [mobileFilter, setMobileFilter] = useState<FilterKey>("all")

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [450, -400])
    const de = useTransform(scrollYProgress, [0, 1], [-450, 400])
    const smMobile = useTransform(scrollYProgress, [0, 1], [0, 0])
    const deMobile = useTransform(scrollYProgress, [0, 1], [0, 0])

    const getWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', getWidth)
        return () => {
            window.removeEventListener('resize', getWidth)
        }
    }, [])

    const slidesToShow = windowWidth <= 480
        ? 1
        : windowWidth <= 600
            ? 2
            : 3;

    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // helper: détermine si un projet est "perso" ou "client"
    const getCategory = (client?: string): "client" | "perso" => {
        if (!client) return "perso";
        const c = client.trim().toLowerCase();
        if (c === "" || c === "moi même" || c === "moi-même" || c === "amis") return "perso";
        return "client";
    };

    const filterProjects = (list: typeof PROJECTS, filter: FilterKey) => {
        if (filter === "all") return list;
        return list.filter((p) => getCategory(p.client) === filter);
    };

    const frontendProjects = filterProjects(PROJECTS, frontendFilter);
    const mobileProjects = filterProjects(MOBILES, mobileFilter);

    const FilterPills = ({
        value,
        onChange,
        counts,
    }: {
        value: FilterKey;
        onChange: (f: FilterKey) => void;
        counts: { all: number; client: number; perso: number };
    }) => {
        const options: { key: FilterKey; label: string }[] = [
            { key: "all", label: t("filterAll") ?? "Tous" },
            { key: "client", label: t("filterClient") ?? "Clients" },
            { key: "perso", label: t("filterPerso") ?? "Perso" },
        ];

        return (
            <div className="flex gap-2 justify-center md:justify-start mb-4 flex-wrap">
                {options.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => onChange(key)}
                        className={`cursor-pointer px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-colors duration-200
                            ${value === key
                                ? "bg-foreground text-background border-foreground"
                                : "bg-transparent text-foreground/70 border-foreground/20 hover:border-foreground/50"
                            }`}
                    >
                        {label} <span className="opacity-60">({counts[key]})</span>
                    </button>
                ))}
            </div>
        );
    };

    const getCounts = (list: typeof PROJECTS) => ({
        all: list.length,
        client: list.filter((p) => getCategory(p.client) === "client").length,
        perso: list.filter((p) => getCategory(p.client) === "perso").length,
    });

    return (
        <div ref={container} className="p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl mx-auto">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl sansation-bold font-bold text-center md:text-left">
                {t('projectsTitle')}
            </h1>
            <motion.div
                style={isMobile ? { x: deMobile } : { x: de }}
                className="slider-container w-full"
            >
                <h1 className="text-center text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl md:text-left font-bold mb-2 sm:mb-3 md:mb-4 sansation-bold">
                    {t('frontendDev')}
                </h1>

                <FilterPills
                    value={frontendFilter}
                    onChange={setFrontendFilter}
                    counts={getCounts(PROJECTS)}
                />

                <div className="px-2 sm:px-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={frontendFilter}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <Slider {...settings} key={frontendProjects.length}>
                                {frontendProjects.map(({ title, image, content, year, url, stack, client }) => (
                                    <div className="px-2 sm:px-3 md:px-4" key={title}>
                                        <ProjectCard
                                            title={title}
                                            image={image}
                                            content={content}
                                            url={url}
                                            year={year}
                                            stack={stack}
                                            client={client}
                                            type="frontend"
                                            category={getCategory(client)}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
            <motion.div
                style={isMobile ? { x: smMobile } : { x: sm }}
                className="slider-container w-full"
            >
                <h1 className="text-center text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 md:text-left sansation-bold">
                    {t('mobileDev')}
                </h1>

                <FilterPills
                    value={mobileFilter}
                    onChange={setMobileFilter}
                    counts={getCounts(MOBILES)}
                />

                <div className="px-2 sm:px-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={mobileFilter}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <Slider {...settings} key={mobileProjects.length}>
                                {mobileProjects.map(({ title, image, content, year, url, stack, client }) => (
                                    <div className="px-2 sm:px-3 md:px-4" key={title}>
                                        <ProjectCard
                                            title={title}
                                            image={image}
                                            content={content}
                                            url={url}
                                            year={year}
                                            stack={stack}
                                            client={client}
                                            type="mobile"
                                            category={getCategory(client)}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}