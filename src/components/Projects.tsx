"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";

interface Project {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
  updated_at: string; 
}

const CACHE_KEY = 'projects_cache';
const CACHE_EXPIRATION_MS = 1000 * 60 * 60; // 1 hora

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
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { projects, timestamp } = JSON.parse(cachedData);
          const isCacheValid = new Date().getTime() - timestamp < CACHE_EXPIRATION_MS;
          
          if (isCacheValid) {
            setProjects(projects);
            generateTopicsAndLanguages(projects);
            setIsLoading(false);
            return;
          }
        }

        const response = await axios.get<Project[]>('https://api.github.com/users/PauloFH/repos?per_page=1000');
        const fetchedProjects = response.data;

        const sortedProjects = fetchedProjects.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        setProjects(sortedProjects);
        localStorage.setItem(CACHE_KEY, JSON.stringify({ projects: sortedProjects, timestamp: new Date().getTime() }));

        generateTopicsAndLanguages(sortedProjects);
      } catch (error: any) {
        console.error('Error fetching projects:', error);
        setError(new Error('Failed to load projects. Please try again later.'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const generateTopicsAndLanguages = (projects: Project[]) => {
    const topicsMap: { [key: string]: Date } = {};
    projects.forEach(project => {
      project.topics.forEach(topic => {
        if (!topicsMap[topic] || new Date(project.updated_at) > topicsMap[topic]) {
          topicsMap[topic] = new Date(project.updated_at);
        }
      });
    });
    const uniqueTopics = Object.keys(topicsMap)
      .sort((a, b) => topicsMap[b].getTime() - topicsMap[a].getTime())
      .slice(0, 4);
    setTopics(uniqueTopics);

    const languagesMap: { [key: string]: Date } = {};
    projects.forEach(project => {
      if (project.language) {
        if (!languagesMap[project.language] || new Date(project.updated_at) > languagesMap[project.language]) {
          languagesMap[project.language] = new Date(project.updated_at);
        }
      }
    });
    const uniqueLanguages = Object.keys(languagesMap)
      .sort((a, b) => languagesMap[b].getTime() - languagesMap[a].getTime())
      .slice(0, 4);
    setLanguages(uniqueLanguages);
  };

  const handleTabClick = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  const displayedProjects = useMemo(() => {
    const filteredProjects = projects.filter((project) => {
      if (activeTab === 'All') return true;
      if (topics.includes(activeTab)) return project.topics.includes(activeTab);
      return project.language === activeTab;
    });

    return filteredProjects.slice(0, 12);
  }, [projects, activeTab, topics]);

  return (
    <section id="projetos" className="py-20 bg-background2">
      <div className="container mx-auto">
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
                className={`mr-2 mb-2 px-4 py-2 rounded ${activeTab === 'All' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => handleTabClick('All')}
              >
                All
              </button>
              {topics.map((topic) => (
                <button 
                  key={topic}
                  className={`mr-2 mb-2 px-4 py-2 rounded ${activeTab === topic ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => handleTabClick(topic)}
                >
                  {topic}
                </button>
              ))}
              {languages.map((language) => (
                <button 
                  key={language}
                  className={`mr-2 mb-2 px-4 py-2 rounded ${activeTab === language ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => handleTabClick(language)}
                >
                  {language}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProjects.map((project) => (
                <motion.div 
                  key={project.id} 
                  className="relative bg-black p-6 rounded shadow min-h-[350px] max-h-[400px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Limitar o tamanho do título */}
                  <h3 className="text-xl font-semibold mb-2 text-center max-w-[200px] truncate">{project.name}</h3>

                  {/* Limitar a exibição a 3 tópicos */}
                  <div className="mb-4">
                    {project.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  {/* Descrição do projeto */}
                  <p className="text-white mb-4 line-clamp-3 overflow-hidden">{project.description || 'No description'}</p>

                  {/* Linguagem do projeto */}
                  <p className="text-xl text-white">
                    Language: {project.language || 'Not specified'}
                  </p>

                  {/* Botão centralizado e menor */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                    <Link 
                      className="flex justify-center items-center px-2 py-1 space-x-1 text-xs font-bold border-2 rounded-md cursor-pointer sm:px-3 sm:py-1 md:text-base bg-background border-blue-400" 
                      href={project.html_url} 
                      passHref
                    >
                      <HiMail className="fill-blue-400" />
                      <span className="text-blue-400">See in Github</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
