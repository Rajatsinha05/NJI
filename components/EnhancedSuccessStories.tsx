"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Plane, Star, MapPin, Award } from "lucide-react";

const EnhancedSuccessStories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const [imageLoadErrors, setImageLoadErrors] = useState<
    Record<string, boolean>
  >({});


  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const stories = [
    {
      id: "hardik",
      name: "Hardik Khandav",
      country: "Canada",
      flag: "🇨🇦",
      visaType: "Student Visa",
      university: "University of Toronto",
      rating: 5,
      testimonial:
        "New Journey Immigration made my dream of studying in Canada come true!",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1747366190/hardik_s0epvq.jpg",
      imageFallback:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1747366190/hardik_s0epvq.jpg",
      gradient: "from-red-500/20 to-white/20",
    },
    {
      id: "janvi",
      name: "Janvi Chavan",
      country: "United Kingdom",
      flag: "🇬🇧",
      visaType: "Work Visa",
      university: "London Business School",
      rating: 5,
      testimonial:
        "Professional guidance throughout my UK visa process. Highly recommended!",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1747366159/janvi_whsxns.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60",
      gradient: "from-blue-500/20 to-red-500/20",
    },
    {
      id: "neel",
      name: "Neel Modi",
      country: "New Zealand",
      flag: "🇳🇿",
      visaType: "Student Visa",
      university: "University of Auckland",
      rating: 5,
      testimonial:
        "Excellent service and support. Made the complex process simple!",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1747366131/neel_kv5tsp.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&auto=format&fit=crop&q=60",
      gradient: "from-blue-500/20 to-black/20",
    },
    {
      id: "yash",
      name: "Yash Pandit",
      country: "Germany",
      flag: "🇩🇪",
      visaType: "Student Visa",
      university: "Technical University of Munich",
      rating: 5,
      testimonial:
        "Outstanding support for my German student visa. Thank you team!",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1747366137/yash_fqj296.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60",
      gradient: "from-black/20 to-red-500/20",
    },
    {
      id: "ayush",
      name: "Ayush Patel",
      country: "USA",
      flag: "🇺🇸",
      visaType: "Student Visa",
      university: "Stanford University",
      rating: 5,
      testimonial:
        "Professional team that delivered results. My US dream is now reality!",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1747366225/ayush_whqccb.jpg",
      imageFallback:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1747366225/ayush_whqccb.jpg",
      gradient: "from-red-500/20 to-blue-500/20",
    },
    {
      id: "mihir",
      name: "Mihir Patel",
      country: "Singapore",
      flag: "🇸🇬",
      visaType: "Work Visa",
      university: "National University of Singapore",
      rating: 5,
      testimonial:
        "Seamless process and excellent guidance. Highly professional service!",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1747366153/mihir_smhmfq.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60",
      gradient: "from-red-500/20 to-white/20",
    },
    // new data 
     {
      id: "mihir",
      name: "Kantaben Chaudhari",
      country: "Singapore",
      flag: "🇸🇬",
      visaType: "Work Visa",
      university: "National University of Singapore",
      rating: 5,
      testimonial:
        "Seamless process and excellent guidance. Highly professional service!",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1748201308/1_qvkrcb.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60",
      gradient: "from-red-500/20 to-white/20",
    },
       {
      id: "mihir",
      name: "Jayntibhai Chaudhari",
      country: "Singapore",
      flag: "🇸🇬",
      visaType: "Work Visa",
      university: "National University of Singapore",
      rating: 5,
      testimonial:
        "Seamless process and excellent guidance. Highly professional service!",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1748201309/2_psrps3.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60",
      gradient: "from-red-500/20 to-white/20",
    },
     {
      id: "mihir",
      name: "Bhagvanbhai Chaudhari",
      country: "Singapore",
      flag: "🇸🇬",
      visaType: "Work Visa",
      university: "National University of Singapore",
      rating: 5,
      testimonial:
        "Seamless process and excellent guidance. Highly professional service!",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1748201309/3_oasn0j.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60",
      gradient: "from-red-500/20 to-white/20",
    },
      {
      id: "mihir",
      name: "Mafiben Chaudhari",
      country: "Singapore",
      flag: "🇸🇬",
      visaType: "Work Visa",
      university: "National University of Singapore",
      rating: 5,
      testimonial:
        "Seamless process and excellent guidance. Highly professional service!",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1748201309/4_gsaphb.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60",
      gradient: "from-red-500/20 to-white/20",
    },
     {
      id: "mihir",
      name: "Gitaben Patel",
      country: "Singapore",
      flag: "🇸🇬",
      visaType: "Work Visa",
      university: "National University of Singapore",
      rating: 5,
      testimonial:
        "Seamless process and excellent guidance. Highly professional service!",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1748201309/5_fg6il0.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60",
      gradient: "from-red-500/20 to-white/20",
    },
     {
      id: "mihir",
      name: "Anila & Vivek Nayak",
      country: "Singapore",
      flag: "🇸🇬",
      visaType: "Work Visa",
      university: "National University of Singapore",
      rating: 5,
      testimonial:
        "Seamless process and excellent guidance. Highly professional service!",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1748201309/6_ngq6a3.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60",
      gradient: "from-red-500/20 to-white/20",
    },
     {
      id: "mihir",
      name: "Harshaben & Manoj bhai",
      country: "Singapore",
      flag: "🇸🇬",
      visaType: "Work Visa",
      university: "National University of Singapore",
      rating: 5,
      testimonial:
        "Seamless process and excellent guidance. Highly professional service!",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1751426387/WhatsApp_Image_2025-06-29_at_9.13.42_AM_c10l2e.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60",
      gradient: "from-red-500/20 to-white/20",
    }
  ];

  const handleImageError = (storyId: string) => {
    setImageLoadErrors((prev) => ({ ...prev, [storyId]: true }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#FAA71A]/10 to-[#13294E]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#13294E]/10 to-[#FAA71A]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#FAA71A]/5 to-[#13294E]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="responsive-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12 md:mb-20 relative"
        >
          {/* Floating decorative planes */}
          <motion.div
            className="absolute top-0 left-1/4 opacity-30 hidden md:block"
            variants={floatingVariants}
            animate="animate"
          >
            <Plane className="text-[#13294E] dark:text-[#FAA71A] w-6 h-6 lg:w-8 lg:h-8" />
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-1/4 opacity-30 hidden md:block"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          >
            <Plane className="text-[#FAA71A] dark:text-[#AFC1DB] w-5 h-5 lg:w-6 lg:h-6" />
          </motion.div>

          {/* Main icon with enhanced design */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 md:mb-8 relative group"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FAA71A]/20 to-[#13294E]/20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main icon container */}
              <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto rounded-full bg-gradient-to-br from-[#13294E] via-[#13294E]/90 to-[#13294E]/80 dark:from-[#13294E]/95 dark:to-[#13294E] p-4 md:p-5 lg:p-6 shadow-2xl border-4 border-white/50 dark:border-[#13294E]/50 backdrop-blur-sm">
                <Plane className="text-[#FAA71A] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 drop-shadow-lg" />
              </div>

              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#FAA71A]/40 dark:border-[#FAA71A]/60"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [1, 0.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute inset-0 rounded-full border border-[#13294E]/30 dark:border-[#AFC1DB]/40"
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.8, 0.2, 0.8],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>

          {/* Enhanced title section */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 md:space-y-6"
          >
            <motion.h2 className="responsive-heading font-bold relative inline-block">
              <span className="bg-gradient-to-r from-[#13294E] via-[#13294E]/90 to-[#13294E]/80 dark:from-[#AFC1DB] dark:via-[#AFC1DB]/90 dark:to-[#AFC1DB]/80 bg-clip-text text-transparent">
                Success
              </span>
              <span className="text-[#FAA71A] ml-2 md:ml-3"> Stories</span>

              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-2 md:-bottom-3 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-[#FAA71A] via-[#FAA71A]/80 to-[#FAA71A]/50 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              />
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Discover the inspiring journeys of our clients who achieved their
              dreams with{" "}
              <span className="font-semibold text-[#13294E] dark:text-[#FAA71A]">
                New Journey Immigration
              </span>
            </motion.p>

            {/* Stats row */}
            
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            breakpoints={{
              // Mobile devices - 1 card
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 24,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: true,
              },
              // Big screens - 2 cards with optimal spacing
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 32,
                centeredSlides: false,
              },
              1440: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: false,
              },
              1600: {
                slidesPerView: 2,
                spaceBetween: 48,
                centeredSlides: false,
              },
            }}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            className="success-swiper !py-8 md:!py-12 !overflow-visible"
          >
            {stories.map((story, index) => (
              <SwiperSlide key={story.id} className="!h-auto">
                <motion.div
                  variants={cardVariants}
                  className="h-full group perspective-1000"
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm transform-gpu transition-all duration-500 group-hover:shadow-3xl group-hover:border-[#FAA71A]/30">
                    {/* Main image container - Optimized for 2 cards on big screens */}
                    <div className="relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[580px] xl:h-[600px] 2xl:h-[620px] w-full overflow-hidden rounded-3xl">
                      <Image
                        src={
                          imageLoadErrors[story.id]
                            ? story.imageFallback
                            : story.image
                        }
                        alt={`${story.name} Success Story`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={index < 2}
                        onError={() => handleImageError(story.id)}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                      />

                      {/* Gradient overlays */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${story.gradient} opacity-20`}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    

                      {/* Rating stars */}
                      <motion.div
                        className="absolute top-16 md:top-20 right-4 md:right-6 z-20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="flex space-x-1">
                          {[...Array(story.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 md:w-5 md:h-5 text-[#FAA71A] fill-current drop-shadow-lg"
                            />
                          ))}
                        </div>
                      </motion.div>

                      {/* Content overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 z-10">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="space-y-3 md:space-y-4"
                        >
                          {/* Name */}
                          <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide drop-shadow-lg">
                            {story.name}
                          </h3>

                          {/* University */}
                         

                         
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedSuccessStories;

// Custom styles for enhanced Swiper appearance
const swiperStyles = `
  .success-swiper {
    padding-bottom: 60px !important;
  }

  .success-swiper .swiper-pagination {
    bottom: 20px !important;
  }

  .success-swiper .swiper-pagination-bullet {
    width: 12px !important;
    height: 12px !important;
    margin: 0 6px !important;
    transition: all 0.3s ease !important;
    border: 2px solid transparent !important;
    background-color: #FAA71A !important;
    opacity: 0.5 !important;
  }

  .success-swiper .swiper-pagination-bullet-active {
    transform: scale(1.3) !important;
    border-color: #FAA71A !important;
    box-shadow: 0 0 20px rgba(250, 167, 26, 0.5) !important;
    background-color: #13294E !important;
    opacity: 1 !important;
  }

  .success-swiper .swiper-slide {
    transition: all 0.3s ease !important;
  }

  .success-swiper .swiper-slide:not(.swiper-slide-active) {
    opacity: 0.7 !important;
    transform: scale(0.95) !important;
  }

  .perspective-1000 {
    perspective: 1000px;
  }

  .transform-gpu {
    transform: translateZ(0);
    will-change: transform;
  }

  .shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 768px) {
    .success-swiper .swiper-slide:not(.swiper-slide-active) {
      opacity: 0.9 !important;
      transform: scale(0.98) !important;
    }
  }
`;

// Inject styles safely
if (typeof document !== "undefined") {
  const styleId = "enhanced-success-stories-styles";
  if (!document.getElementById(styleId)) {
    const styleElement = document.createElement("style");
    styleElement.id = styleId;
    styleElement.textContent = swiperStyles;
    document.head.appendChild(styleElement);
  }
}
