import React from 'react';

// 教育经历数据类型
interface Education {
  school: string;
  major: string;
  degree: string;
  period: string;
}

// 教育经历数据
const educationData: Education[] = [
  {
    school: '湖南工商大学',
    major: '数据科学与大数据技术',
    degree: '学士',
    period: '2019.09 - 2023.06'
  }
  // 可以方便地添加更多教育经历
];

// 教育经历卡片组件
const EducationCard: React.FC<Education> = ({ school, major, degree, period }) => (
  <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{school}</h3>
        <p className="text-gray-600">
          {major} {degree}
        </p>
      </div>
      <span className="text-gray-500 mt-2 md:mt-0">{period}</span>
    </div>
  </div>
);

// 主组件
const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          教育经历
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
