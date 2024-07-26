"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';

interface Project {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
  updated_at: string; // Campo para armazenar a data de atualização
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [topics, setTopics] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<Project[]>('https://api.github.com/users/PauloFH/repos?per_page=1000');
        const fetchedProjects = response.data;

        const sortedProjects = fetchedProjects.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        setProjects(sortedProjects);

        const topicsMap: { [key: string]: Date } = {};
        sortedProjects.forEach(project => {
          project.topics.forEach(topic => {
            if (!topicsMap[topic] || new Date(project.updated_at) > topicsMap[topic]) {
              topicsMap[topic] = new Date(project.updated_at);
            }
          });
        });
        const uniqueTopics = Object.keys(topicsMap).sort((a, b) => topicsMap[b].getTime() - topicsMap[a].getTime());
        setTopics(uniqueTopics);
        
        const languagesMap: { [key: string]: Date } = {};
        sortedProjects.forEach(project => {
          if (project.language) {
            if (!languagesMap[project.language] || new Date(project.updated_at) > languagesMap[project.language]) {
              languagesMap[project.language] = new Date(project.updated_at);
            }
          }
        });
        const uniqueLanguages = Object.keys(languagesMap).sort((a, b) => languagesMap[b].getTime() - languagesMap[a].getTime());
        setLanguages(uniqueLanguages);
      } catch (error: any) {
        console.error('Error fetching projects:', error);
        setError(new Error('Failed to load projects. Please try again later.'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleTabClick = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  const displayedProjects = useMemo(() => {
    return projects.filter((project) => {
      if (activeTab === 'All') return true;
      if (topics.includes(activeTab)) return project.topics.includes(activeTab);
      return project.language === activeTab;
    });
  }, [projects, activeTab, topics]);

  return (
    <section id="projetos" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-fuchsia-950">Meus Projetos</h2>
        
        {isLoading ? (
          <div className="text-center py-10">
            <p className="text-xl">Carregando projetos...</p>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-xl text-red-500">{error.message}</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <button 
                className={`mr-2 mb-2 px-4 py-2 rounded ${activeTab === 'All' ? 'bg-fuchsia-900 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => handleTabClick('All')}
              >
                All
              </button>
              {topics.map((topic) => (
                <button 
                  key={topic}
                  className={`mr-2 mb-2 px-4 py-2 rounded ${activeTab === topic ? 'bg-fuchsia-900 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => handleTabClick(topic)}
                >
                  {topic}
                </button>
              ))}
              {languages.map((language) => (
                <button 
                  key={language}
                  className={`mr-2 mb-2 px-4 py-2 rounded ${activeTab === language ? 'bg-fuchsia-900 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => handleTabClick(language)}
                >
                  {language}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProjects.map((project) => (
                <div key={project.id} className="bg-fuchsia-900 p-6 rounded shadow">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-white mb-4">{project.description || 'No description'}</p>
                  <div className="mb-4">
                    {project.topics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <p className="text-xl text-white">
                    Language: {project.language || 'Not specified'}
                  </p>
                  <a
                      href={project.html_url}
                      className="block w-full text-center bg-white text-fuchsia-900 font-bold py-2 px-4 rounded hover:bg-fuchsia-100 transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub
                    </a>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;