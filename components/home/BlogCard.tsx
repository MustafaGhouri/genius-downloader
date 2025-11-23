'use client'
import { blogs } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function BlogCard({ blog, index }: { blog: typeof blogs[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={`/blogs/${blog.slug}`}
            key={index}
            className="min-w-52 sm:min-w-[278px] snap-start block group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="bg-black rounded-lg border-2 border-black overflow-hidden h-full flex flex-col transition-all duration-500 ease-out relative"
                style={{
                    transform: isHovered ? 'scale(0.97)' : 'scale(1)',
                    boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.4)' : '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
            >
                <div
                    className="absolute inset-0 rounded-lg transition-opacity duration-500"
                    style={{
                        background: 'linear-gradient(45deg, #FFC803, #FD5A17, #FFC803)',
                        opacity: isHovered ? 0.6 : 0,
                        zIndex: -1,
                        filter: 'blur(8px)',
                    }}
                />

                <div className="bg-[#FFC803] p-4 sm:p-9 border-b-2 border-white relative overflow-hidden">
                    <div className="h-40 bg-white rounded-xl border-2 border-black overflow-hidden">
                        <Image
                            width={200}
                            height={200}
                            src={blog.image}
                            alt="Blog thumbnail"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out"
                            style={{
                                transform: isHovered ? 'scale(1.15) rotate(2deg)' : 'scale(1) rotate(0deg)',
                            }}
                        />
                    </div>

                    <div
                        className="absolute top-0 right-0 w-16 h-16 bg-[#FD5A17] transition-all duration-500 ease-out"
                        style={{
                            clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                            transform: isHovered ? 'scale(1.5)' : 'scale(0)',
                            opacity: isHovered ? 1 : 0,
                        }}
                    />
                </div>

                <div className="p-4 bg-black grow flex items-center relative overflow-hidden">
                    <div
                        className="absolute inset-0 bg-linear-to-r from-[#FD5A17] to-[#FFC803] transition-transform duration-500 ease-out"
                        style={{
                            transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
                        }}
                    />

                    <p
                        className="font-poppins font-medium text-[18px] leading-[29.15px] tracking-[-0.71px] text-white text-center capitalize relative z-10 transition-all duration-300"
                        style={{
                            textShadow: isHovered ? '2px 2px 4px rgba(0, 0, 0, 0.3)' : 'none',
                            fontFamily: 'var(--font-poppins)'
                        }}
                    >
                        {blog.title}
                    </p>

                    <div
                        className="absolute right-2 transition-all duration-300"
                        style={{
                            opacity: isHovered ? 1 : 0,
                            transform: isHovered ? 'translateX(0)' : 'translateX(-10px)',
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                            <path d="M5 12h14m-7-7l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div
                    className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-xs font-bold border-2 border-white transition-all duration-300"
                    style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)',
                    }}
                >
                    READ MORE
                </div>
            </div>
        </Link>
    );
}