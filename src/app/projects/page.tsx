import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Projects - Domingos Manuel Daniel',
  description: 'Explore my latest web development projects including learning platforms, management systems, and dashboards.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          My Projects
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Here are some of the projects I&apos;ve worked on. Each project showcases different aspects of modern web development, 
          from learning platforms to management systems and real-time dashboards.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* And so much more section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">
          And so much more...
        </h2>
        <p className="text-gray-300 mb-6">
          These projects are just a glimpse into my work. I&apos;ve tackled various challenges and technologies, always striving to learn and improve.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-300 mb-6">
            I&apos;m always open to discussing new opportunities and exciting projects.
          </p>
          <a
            href="mailto:domingoscahandadaniel@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
