"use client";
import Image from "next/image";
import Link from "next/link";
import { FiUser, FiMessageCircle } from "react-icons/fi";

export default function BlogCard({ blog, isCarousel }) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col border border-gray-100 transition-all hover:shadow-md ${isCarousel ? 'w-[350px] shrink-0' : 'w-full'}`}>
      {/* IMAGE */}
      <div className="w-full h-[240px] overflow-hidden relative">
        <Image
          src={`${blog.img}?auto=format&fit=crop&crop=center&w=700&h=480&q=80`}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* BADGES */}
      <div className="flex justify-center gap-3 -mt-[18px] relative z-10 whitespace-nowrap">
        <span className="bg-[#121d18] text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2 rounded-full shadow-md">
          {blog.category}
        </span>
        <span className="bg-[#FFA415] text-[#121d18] text-[11px] font-bold uppercase tracking-wider px-5 py-2 rounded-full shadow-md">
          {blog.date}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-8 pt-6 flex flex-col gap-4 flex-grow">
        <div className="flex gap-5 text-[13px] text-gray-500 items-center">
          <span className="flex items-center gap-1.5">
            <FiUser className="text-[#FFA415]" /> By {blog.by}
          </span>
          <span className="flex items-center gap-1.5">
            <FiMessageCircle className="text-[#FFA415]" /> {blog.comments} Comments
          </span>
        </div>

        <h3 className="text-[22px] font-bold text-[#121d18] leading-tight flex-grow">
          <Link href="/templates/template-4/blog">
            <a className="hover:text-[#FFA415] transition-colors">{blog.title}</a>
          </Link>
        </h3>

        <div className="mt-4">
          <Link href="/templates/template-4/blog">
            <a className="t2-btn t2-btn-secondary" style={{ height: '44px' }}>
              <span style={{ height: '44px', padding: '0 25px', fontSize: '13px' }}>Read More</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
