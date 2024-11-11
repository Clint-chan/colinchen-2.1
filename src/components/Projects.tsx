import React, { useState } from 'react';
import { Code2, GitBranch, Timer, ChevronRight, Users, ChevronDown } from 'lucide-react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      title: 'AI智能客服系统',
      role: '技术负责人',
      period: '2024.04 - 2024.07',
      description: [
        '核心实现与技术创新：基于大语言模型开发智能对话系统，实现多轮对话和意图理解',
        '项目成效显著：客服效率提升300%，用户满意度提升40%，每月节省运营成本50万',
        '领导力与团队合作：带领6人团队，采用敏捷开发，按时交付所有功能模块'
      ],
      tech: ['Python', 'React', 'LangChain', 'FastAPI'],
      metrics: {
        team: '6人',
        coverage: '98%',
        performance: '300%'
      }
    },
    {
      title: 'AI数据分析辅助系统',
      role: '开发工程师',
      period: '2023.12 - 2024.03',
      description: [
        '系统架构设计：设计并实现微服务架构，保证系统可扩展性和可维护性',
        '核心算法实现：开发自动化数据分析流程，集成多种机器学习模型',
        '性能优化：通过并行计算和缓存策略，分析效率提升200%'
      ],
      tech: ['TypeScript', 'Node.js', 'TensorFlow', 'Docker'],
      metrics: {
        team: '4人',
        coverage: '95%',
        performance: '200%'
      }
    },
    {
      title: '全渠道销售预测算法研究',
      role: '算法工程师',
      period: '2023.08 - 2023.11',
      description: [
        '数据预处理与特征工程：处理多源异构数据，构建高质量特征体系',
        '模型选择与优化：实现多模型集成学习，预测准确率达到92%',
        '预测准确率提升：通过特征筛选和参数优化，相比基准提升15%'
      ],
      tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'],
      metrics: {
        team: '3人',
        coverage: '92%',
        performance: '150%'
      }
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            项目经验
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            深度参与多个大型项目开发，积累丰富的技术实践经验
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-8 shadow-sm transition-all duration-300 hover:shadow-lg border border-gray-100"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <ChevronDown
                      className={`w-5 h-5 ml-2 text-blue-500 cursor-pointer transition-transform duration-300 
                      ${expandedIndex === index ? 'transform rotate-180' : ''}`}
                      onClick={() => toggleExpand(index)}
                    />
                  </div>
                  <div className="flex items-center text-gray-600 space-x-4">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {project.role}
                    </span>
                    <span className="flex items-center">
                      <Timer className="w-4 h-4 mr-1" />
                      {project.period}
                    </span>
                  </div>
                </div>
                {expandedIndex === index && (
                  <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {expandedIndex === index && (
                <>
                  <div className="space-y-3">
                    {project.description.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 w-1 h-1 mt-2.5 bg-blue-500 rounded-full"></div>
                        <p className="ml-3 text-gray-600">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">团队规模</p>
                        <p className="font-semibold text-gray-900">{project.metrics.team}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">测试覆盖率</p>
                        <p className="font-semibold text-gray-900">{project.metrics.coverage}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">性能提升</p>
                        <p className="font-semibold text-gray-900">{project.metrics.performance}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;