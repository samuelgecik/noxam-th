"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ImageComparisonSlider from "./ImageComparisonSlider";

interface ProjectItem {
    id: string;
    titleKey: string;
    descriptionKey: string;
    beforeImage: string;
    afterImage: string;
    categoryKey: string;
}

const projects: ProjectItem[] = [
    {
        id: "warehouse",
        titleKey: "project_warehouse_title",
        descriptionKey: "project_warehouse_desc",
        beforeImage: "/renovations/warehouse_before.jpeg",
        afterImage: "/renovations/warehouse_after.jpeg",
        categoryKey: "project_category_industrial",
    },
    {
        id: "locker-room",
        titleKey: "project_locker_title",
        descriptionKey: "project_locker_desc",
        beforeImage: "/renovations/Locker_Room_Renovation_Before.jpg",
        afterImage: "/renovations/Locker_Room_Renovation_After.jpg",
        categoryKey: "project_category_commercial",
    },
    {
        id: "office-floor",
        titleKey: "project_office_floor_title",
        descriptionKey: "project_office_floor_desc",
        beforeImage: "/renovations/Office_Floor_Corner_Before.JPG",
        afterImage: "/renovations/Office_Floor_Corner_Finished.jpg",
        categoryKey: "project_category_commercial",
    },
    {
        id: "office-room",
        titleKey: "project_office_room_title",
        descriptionKey: "project_office_room_desc",
        beforeImage: "/renovations/Office_Room_Overview_Before.JPG",
        afterImage: "/renovations/Office_Room_Overview_Finished.jpg",
        categoryKey: "project_category_commercial",
    },
    {
        id: "hallway",
        titleKey: "project_hallway_title",
        descriptionKey: "project_hallway_desc",
        beforeImage: "/renovations/Hallway_Tiled_Floor_Before.jpg",
        afterImage: "/renovations/Hallway_Grey_Coating_After.jpg",
        categoryKey: "project_category_commercial",
    },
    {
        id: "doorway",
        titleKey: "project_doorway_title",
        descriptionKey: "project_doorway_desc",
        beforeImage: "/renovations/Doorway_Threshold_Worn_Concrete_Before.jpg",
        afterImage: "/renovations/Doorway_Threshold_Freshly_Painted_After.jpg",
        categoryKey: "project_category_industrial",
    },
    {
        id: "vinyl-floor",
        titleKey: "project_vinyl_title",
        descriptionKey: "project_vinyl_desc",
        beforeImage: "/renovations/Office_Vinyl_Floor_Scuffed_Before.jpg",
        afterImage: "/renovations/Office_Vinyl_Floor_Stripped_Clean_After.jpg",
        categoryKey: "project_category_commercial",
    },
];

export default function BeforeAfterCarousel() {
    const t = useTranslations("home");
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const currentProject = projects[currentIndex];

    return (
        <div className="w-full">
            {/* Main Carousel Container */}
            <div className="relative aspect-[4/3] max-h-[60vh] max-w-[calc(60vh*4/3)] mx-auto w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex size-12 items-center justify-center rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors border border-gray-200"
                    aria-label="Previous project"
                >
                    <span className="material-symbols-outlined text-gray-700">
                        chevron_left
                    </span>
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex size-12 items-center justify-center rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors border border-gray-200"
                    aria-label="Next project"
                >
                    <span className="material-symbols-outlined text-gray-700">
                        chevron_right
                    </span>
                </button>

                {/* Image Comparison Slider */}
                <ImageComparisonSlider
                    key={currentProject.id}
                    beforeImage={currentProject.beforeImage}
                    afterImage={currentProject.afterImage}
                    beforeLabel={t("carousel_before")}
                    afterLabel={t("carousel_after")}
                    dragLabel={t("drag_to_compare")}
                />

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 z-20 pointer-events-none">
                    <div className="flex items-end justify-between">
                        <div>
                            <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                                {t(currentProject.categoryKey)}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                {t(currentProject.titleKey)}
                            </h3>
                            <p className="text-gray-300 text-sm mt-1">
                                {t(currentProject.descriptionKey)}
                            </p>
                        </div>
                        <div className="text-white/70 text-sm font-medium">
                            {currentIndex + 1} / {projects.length}
                        </div>
                    </div>
                </div>
            </div>


            {/* Thumbnail Navigation */}
            <div className="mt-6 flex gap-3 justify-center overflow-x-auto pb-2 px-4">
                {projects.map((project, index) => (
                    <button
                        key={project.id}
                        onClick={() => setCurrentIndex(index)}
                        className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${index === currentIndex
                            ? "ring-2 ring-primary ring-offset-2 scale-105"
                            : "opacity-60 hover:opacity-100"
                            }`}
                        aria-label={`View ${t(project.titleKey)}`}
                    >
                        <img
                            src={project.afterImage}
                            alt={t(project.titleKey)}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
