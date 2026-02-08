"use client";

import { useState } from "react";
import ImageComparisonSlider from "./ImageComparisonSlider";

interface ProjectItem {
    id: string;
    title: string;
    description: string;
    beforeImage: string;
    afterImage: string;
    category: string;
}

const projects: ProjectItem[] = [
    {
        id: "warehouse",
        title: "Warehouse Facility",
        description: "Full PU coating restoration for industrial space",
        beforeImage: "/renovations/warehouse_before.jpeg",
        afterImage: "/renovations/warehouse_after.jpeg",
        category: "Industrial",
    },
    {
        id: "locker-room",
        title: "Locker Room Renovation",
        description: "Complete floor refurbishment with antimicrobial coating",
        beforeImage: "/renovations/Locker_Room_Renovation_Before.jpg",
        afterImage: "/renovations/Locker_Room_Renovation_After.jpg",
        category: "Commercial",
    },
    {
        id: "office-floor",
        title: "Office Floor Corner",
        description: "Premium finish restoration for corporate space",
        beforeImage: "/renovations/Office_Floor_Corner_Before.JPG",
        afterImage: "/renovations/Office_Floor_Corner_Finished.jpg",
        category: "Commercial",
    },
    {
        id: "office-room",
        title: "Office Room Overview",
        description: "Full room floor transformation",
        beforeImage: "/renovations/Office_Room_Overview_Before.JPG",
        afterImage: "/renovations/Office_Room_Overview_Finished.jpg",
        category: "Commercial",
    },
    {
        id: "hallway",
        title: "Hallway Restoration",
        description: "Tiled floor to modern grey coating upgrade",
        beforeImage: "/renovations/Hallway_Tiled_Floor_Before.jpg",
        afterImage: "/renovations/Hallway_Grey_Coating_After.jpg",
        category: "Commercial",
    },
    {
        id: "doorway",
        title: "Doorway Threshold",
        description: "Worn concrete to freshly painted finish",
        beforeImage: "/renovations/Doorway_Threshold_Worn_Concrete_Before.jpg",
        afterImage: "/renovations/Doorway_Threshold_Freshly_Painted_After.jpg",
        category: "Industrial",
    },
    {
        id: "vinyl-floor",
        title: "Office Vinyl Floor",
        description: "Scuffed vinyl stripped and cleaned professionally",
        beforeImage: "/renovations/Office_Vinyl_Floor_Scuffed_Before.jpg",
        afterImage: "/renovations/Office_Vinyl_Floor_Stripped_Clean_After.jpg",
        category: "Commercial",
    },
];

export default function BeforeAfterCarousel() {
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
                    beforeLabel="Before"
                    afterLabel="After"
                />

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 z-20 pointer-events-none">
                    <div className="flex items-end justify-between">
                        <div>
                            <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                                {currentProject.category}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                {currentProject.title}
                            </h3>
                            <p className="text-gray-300 text-sm mt-1">
                                {currentProject.description}
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
                        aria-label={`View ${project.title}`}
                    >
                        <img
                            src={project.afterImage}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
