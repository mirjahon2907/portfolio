
import React from 'react';
import { RESUME_DATA } from './constants';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center animate-slide-up">
        <div className="text-lg font-extrabold tracking-tighter">
          MB<span className="text-blue-500">.</span>
        </div>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#education" className="hover:text-white transition-colors">Edu</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-32 md:py-48 animate-slide-up">
          <div className="max-w-3xl">
            <h2 className="text-blue-500 mono text-sm mb-4 uppercase tracking-[0.3em] font-bold">Python Backend Engineer</h2>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              {RESUME_DATA.name.split(' ')[0]} <br/>
              <span className="gradient-text">{RESUME_DATA.name.split(' ')[1]}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-12">
              {RESUME_DATA.bio}
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="bg-white text-navy-deep px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all">
                Contact Me
              </a>
              <div className="flex gap-4 text-sm font-bold text-slate-500 uppercase tracking-widest">
                <a href={`https://${RESUME_DATA.contact.github}`} target="_blank" className="hover:text-white transition-colors">Github</a>
                <span className="opacity-20">/</span>
                <a href={`https://${RESUME_DATA.contact.linkedin}`} target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="work" className="py-24 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-3xl font-black tracking-tight sticky top-24">Operational History</h2>
              <p className="text-slate-500 mt-4 font-medium italic">Building systems since 2025.</p>
            </div>
            <div className="md:col-span-8 space-y-20">
              {RESUME_DATA.experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-slate-800 group-hover:bg-blue-500 transition-colors"></div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.company}</h3>
                      <p className="text-blue-500 font-bold text-sm uppercase tracking-widest mt-1">{exp.role}</p>
                    </div>
                    <span className="text-xs mono text-slate-500 font-bold bg-slate-900 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-400 font-medium leading-relaxed flex gap-4">
                        <span className="text-blue-500 opacity-40">→</span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(s => (
                      <span key={s} className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-900/50 px-3 py-1 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-24 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-black tracking-tighter">Built with Logic</h2>
            <div className="text-slate-500 mono text-xs uppercase tracking-widest hidden md:block">Engineered Systems</div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {RESUME_DATA.projects.map((project) => (
              <div key={project.id} className="project-card glass rounded-2xl overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-img w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.tags.map(t => (
                        <span key={t} className="text-[10px] font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded uppercase tracking-tighter">{t}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-400 font-medium leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <a href="https://github.com/mirjahon2907" className="text-xs font-black uppercase tracking-widest text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                    View Specs <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Education */}
        <section id="education" className="py-24 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl font-black tracking-tight mb-12">Foundations</h2>
              <div className="space-y-12">
                {RESUME_DATA.education.map((edu, i) => (
                  <div key={i} className="relative pl-8 border-l border-slate-800">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                    <h4 className="text-xl font-bold">{edu.school}</h4>
                    <p className="text-slate-400 mt-1 font-medium">{edu.degree}</p>
                    <p className="text-xs mono text-slate-500 font-bold uppercase tracking-widest mt-2">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight mb-12" id="skills">Expertise</h2>
              <div className="grid grid-cols-1 gap-8">
                {RESUME_DATA.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-sm font-bold uppercase tracking-widest text-slate-300">{skill.name}</span>
                      <span className="text-[10px] mono text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-24 border-t border-slate-900 text-center">
          <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.5em] mb-4">
            {RESUME_DATA.name} // 2025
          </p>
          <div className="flex justify-center gap-8 text-[10px] font-bold text-slate-700 tracking-widest uppercase">
            <span>Backends</span>
            <span>Bots</span>
            <span>Teaching</span>
          </div>
        </footer>
      </main>

      <ChatWidget />
    </div>
  );
};

export default App;
