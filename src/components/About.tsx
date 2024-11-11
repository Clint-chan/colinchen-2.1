import React from 'react';
import { User, Sparkles, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          关于我
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <User className="w-6 h-6 mr-2 text-blue-600" />
              领域实践者
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <Sparkles className="w-6 h-6 mr-4 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">AIGC思维火花社区</h4>
                  <p className="text-gray-600">核心成员，致力于推动AI生成内容的创新与应用</p>
                </div>
              </li>
              <li className="flex items-start">
                <Sparkles className="w-6 h-6 mr-4 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">NewestGPT</h4>
                  <p className="text-gray-600">项目负责人，引领前沿GPT技术的开发与实践</p>
                </div>
              </li>
              <li className="flex items-start">
                <BookOpen className="w-6 h-6 mr-4 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">《Way to AGI》</h4>
                  <p className="text-gray-600">作者，探讨通用人工智能的发展路径与未来展望</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;