import React, { memo } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

// 联系方式数据类型
interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

// 联系方式数据
const contactData: ContactItem[] = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    label: '微信',
    value: '17674178967'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: '手机',
    value: '17674178967'
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: '邮箱',
    value: '123@gptalk.com'
  }
];

// 联系方式卡片组件
const ContactCard = memo(({ icon, label, value }: ContactItem) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      alert(`已复制${label}: ${value}`);
    } catch (err) {
      alert('复制失败');
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="w-full bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all 
                 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
      title={`点击复制${label}`}
    >
      <div className="flex justify-center mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{label}</h3>
      <p className="text-gray-600">{value}</p>
    </button>
  );
});

ContactCard.displayName = 'ContactCard';

// 主组件
const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          联系方式
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactData.map((item, index) => (
              <ContactCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
