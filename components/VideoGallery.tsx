"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import dynamic from "next/dynamic";
import { getVideos } from "@/sanity/lib/queries";

// Dynamic import to avoid SSR issues with proper typing
const ReactPlayer = dynamic(() => import("react-player"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse rounded-xl" />
}) as any;

export default function VideoGallery() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [videos, setVideos] = useState<any[]>([]);

  // Fetch videos from Sanity
  useEffect(() => {
    async function loadVideos() {
      try {
        const data = await getVideos();
        setVideos(data);
      } catch (error) {
        console.error('Error loading videos:', error);
      }
    }
    loadVideos();
  }, []);

  // Add your AWS video links here
  const fallbackVideos = [
    {
      id: 1,
      title: "Introduction to Azure Data Engineering",
      thumbnail: "https://via.placeholder.com/640x360/3B82F6/FFFFFF?text=Video+1",
      videoUrl: "YOUR_AWS_VIDEO_LINK_1", // Replace with your AWS S3 video URL
      duration: "10:30",
      description: "Learn the fundamentals of Azure Data Engineering",
    },
    {
      id: 2,
      title: "Real-World Project Walkthrough",
      thumbnail: "https://via.placeholder.com/640x360/8B5CF6/FFFFFF?text=Video+2",
      videoUrl: "YOUR_AWS_VIDEO_LINK_2",
      duration: "15:45",
      description: "See how we build production-ready data pipelines",
    },
    {
      id: 3,
      title: "Career Tips & Interview Prep",
      thumbnail: "https://via.placeholder.com/640x360/EC4899/FFFFFF?text=Video+3",
      videoUrl: "YOUR_AWS_VIDEO_LINK_3",
      duration: "12:20",
      description: "Master your data engineering interviews",
    },
    {
      id: 4,
      title: "Azure Databricks Deep Dive",
      thumbnail: "https://via.placeholder.com/640x360/10B981/FFFFFF?text=Video+4",
      videoUrl: "YOUR_AWS_VIDEO_LINK_4",
      duration: "18:15",
      description: "Advanced Databricks concepts and best practices",
    },
    {
      id: 5,
      title: "Student Success Stories",
      thumbnail: "https://via.placeholder.com/640x360/F59E0B/FFFFFF?text=Video+5",
      videoUrl: "YOUR_AWS_VIDEO_LINK_5",
      duration: "8:40",
      description: "Real testimonials from our successful students",
    },
  ];

  // Use Sanity data if available, otherwise use fallback
  const displayVideos = videos.length > 0 ? videos : fallbackVideos;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setPlaying(true);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    setPlaying(false);
  };

  return (
    <>
      <section
        id="videos"
        className="py-12 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
        ref={ref}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Watch Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our students transformed their careers in Data Engineering
            </p>
          </motion.div>

          {/* Video Carousel */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black/90 backdrop-blur-sm p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hidden md:flex items-center justify-center"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black/90 backdrop-blur-sm p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hidden md:flex items-center justify-center"
              aria-label="Scroll right"
            >
              <FaChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {displayVideos.map((video: any, index: number) => (
                <motion.div
                  key={video._id || video.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[320px] md:w-[380px] group cursor-pointer"
                  onClick={() => openVideoModal(video.videoUrl)}
                  onMouseEnter={() => setHoveredVideo(video._id || video.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700/50">
                    {/* Video Preview or Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      {hoveredVideo === (video._id || video.id) ? (
                        // Auto-play preview on hover
                        <div className="relative w-full h-full">
                          <ReactPlayer
                            url={video.videoUrl}
                            playing={true}
                            muted={true}
                            loop={true}
                            width="100%"
                            height="100%"
                            playsinline={true}
                          />
                          {/* Click to expand overlay */}
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white text-sm font-semibold border border-white/40">
                              Click to expand
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Static thumbnail
                        <>
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                          
                          {/* Duration Badge */}
                          <div className="absolute bottom-3 right-3 bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-xs font-bold border border-white/20">
                            {video.duration}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Video Info */}
                    <div className="p-4 bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-sm">
                      <h3 className="text-white font-bold text-base leading-tight mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {video.description}
                      </p>
                    </div>

                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll Hint for Mobile */}
            <div className="md:hidden text-center mt-6">
              <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                <FaChevronLeft className="w-3 h-3" />
                Swipe to explore more
                <FaChevronRight className="w-3 h-3" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Video Modal - Netflix/Prime Style */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 md:-right-12 bg-black/80 hover:bg-black p-3 rounded-full transition-all duration-300 transform hover:scale-110 z-10"
              aria-label="Close video"
            >
              <FaTimes className="w-6 h-6 text-white" />
            </button>

            {/* Video Player */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <ReactPlayer
                  url={selectedVideo}
                  playing={playing}
                  controls
                  width="100%"
                  height="100%"
                  onEnded={() => setPlaying(false)}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
