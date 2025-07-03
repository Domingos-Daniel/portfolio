'use client';

import Image from "next/image";
import Link from "next/link";
import { Github, Mail, MapPin, ArrowRight } from 'lucide-react';
import { personalInfo, contact } from '@/data/portfolio';

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiByeD0iMTYwIiBmaWxsPSIjMzc0MTUxIi8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjEzMCIgcj0iNDAiIGZpbGw9IiM2Qjc0ODkiLz4KPGVsbGlwc2UgY3g9IjE2MCIgY3k9IjIyMCIgcng9IjYwIiByeT0iNDAiIGZpbGw9IiM2Qjc0ODkiLz4KPC9zdmc+';
                }}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              {personalInfo.name}
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-blue-400 font-medium mb-6">
              {personalInfo.title}
            </h2>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 mb-6">
              <MapPin size={20} />
              <span>{personalInfo.location}</span>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              {personalInfo.bio}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <Mail size={20} />
                Get in touch
              </a>
              
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-500 text-white font-medium rounded-lg transition-colors hover:bg-gray-800"
              >
                <Github size={20} />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 border-t border-gray-800">
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/projects"
            className="group p-8 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
          >
            <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
              View My Projects
            </h3>
            <p className="text-gray-300 mb-4">
              Explore my latest work including web applications, dashboards, and learning platforms.
            </p>
            <div className="flex items-center text-blue-400 group-hover:text-blue-300">
              <span className="mr-2">See all projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          
          <Link
            href="/skills"
            className="group p-8 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
          >
            <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
              My Skills
            </h3>
            <p className="text-gray-300 mb-4">
              Discover the technologies and tools I use to build modern web applications.
            </p>
            <div className="flex items-center text-blue-400 group-hover:text-blue-300">
              <span className="mr-2">View skills</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
