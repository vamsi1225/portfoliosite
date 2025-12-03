"use client"

// Using reliable CDN sources for high-quality technology logos
const technologies = [
  { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Angular', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg' },
  { name: 'Bootstrap', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original-wordmark.svg' },
  { name: 'CSS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' },
  { name: 'Express', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg' },
  { name: 'Git', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg' },
  { name: 'GraphQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain-wordmark.svg' },
  { name: 'HTML', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' },
  { name: 'Jest', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg' },
  { name: 'JavaScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { name: 'Material Angular', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg' },
  { name: 'MongoDB', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' },
  { name: 'MySQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'Next.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg' },
  { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' },
  { name: 'PostgreSQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg' },
  { name: 'Postman', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original-wordmark.svg' },
  { name: 'TypeScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
];

export default function Skills(){
    return <div>
       <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mt-8 px-4">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-100/10 rounded-xl hover:bg-gray-100/20 hover:scale-105 transition-all duration-300 border-2 border-gray-300/30 hover:border-gray-200/50 shadow-xl hover:shadow-2xl hover:shadow-white/10 backdrop-blur-md"
            >
              <div className="mb-3 flex items-center justify-center min-h-[80px] w-full bg-white/20 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  width={80}
                  height={80}
                  className="object-contain w-auto h-auto filter brightness-125 contrast-125 drop-shadow-lg"
                  style={{ maxWidth: '80px', maxHeight: '80px' }}
                  onError={(e) => {
                    console.error(`Failed to load logo for ${tech.name}:`, tech.logo);
                  }}
                />
              </div>
              <span className="text-sm sm:text-base font-semibold text-gray-100 mt-2 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
}