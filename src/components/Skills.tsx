import React from 'react';
import { Brain, Code, Database, Globe, Cpu, Award, ChevronRight, Cloud, FileCheck } from 'lucide-react';

const skills = [
  {
    category: 'AI & ML',
    icon: <Brain className="w-6 h-6" />,
    description: '专注于大语言模型开发与应用',
    items: [
      { name: 'LLM Development', level: 90 },
      { name: 'RAG Systems', level: 85 },
      { name: 'Neural Networks', level: 80 }
    ]
  },
  {
    category: 'Programming',
    icon: <Code className="w-6 h-6" />,
    description: '全栈开发能力',
    items: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 85 },
      { name: 'TypeScript', level: 75 }
    ]
  },
  {
    category: 'Data Science',
    icon: <Database className="w-6 h-6" />,
    description: '数据分析与可视化',
    items: [
      { name: 'Data Analysis', level: 90 },
      { name: 'Visualization', level: 85 },
      { name: 'Big Data', level: 80 }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6" />,
    description: '云服务与开发运维',
    items: [
      { name: 'AWS/Azure', level: 85 },
      { name: 'Docker', level: 88 },
      { name: 'CI/CD', level: 82 }
    ]
  }
];

const certificates = [
  {
    name: '国际项目管理师(PMP)',
    icon: <Globe className="w-5 h-5" />,
    date: '2023',
    org: 'PMI',
    color: 'from-purple-500 to-blue-500'
  },
  {
    name: '（高级）信息系统项目管理师',
    icon: <FileCheck className="w-5 h-5" />,
    date: '2024',
    org: '工信部',
    color: 'from-green-500 to-yellow-500'
  },
  {
    name: '提示词开发工程师(中级)',
    icon: <Brain className="w-5 h-5" />,
    date: '2023',
    org: '科大讯飞',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Agent开发工程师(中级)',
    icon: <Cpu className="w-5 h-5" />,
    date: '2024',
    org: '科大讯飞',
    color: 'from-cyan-500 to-emerald-500'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            技能与认证
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            深耕AI领域，专注于大语言模型开发与应用，具备全栈开发能力
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skills.map((category) => (
            <div 
              key={category.category} 
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                  <p className="text-sm text-gray-500">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {category.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">专业认证</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.name}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                  style={{ background: `linear-gradient(to right, ${cert.color})` }}
                />
                <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white hover:bg-gray-50 transition-colors border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white`}>
                      {cert.icon}
                    </div>
                    <h4 className="ml-4 text-lg font-semibold text-gray-900 leading-tight">
                      {cert.name}
                    </h4>
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm text-gray-600 mb-1">
                      颁发机构: {cert.org}
                    </div>
                    <div className="text-sm text-gray-500">
                      获得年份: {cert.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}