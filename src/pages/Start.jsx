import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const CategoryCard = ({ title, description, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button as={Link} to={`/category/${title.toLowerCase().replace(' ', '-')}`} className="w-full">
        탐색하기
      </Button>
    </div>
  </div>
);

const Start = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-12 text-center">쉽고 편리한 기부의 시작</h1>
        
        <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">QR코드로 간편한 모바일 기부</h2>
            <p className="text-lg text-gray-600 mb-4">
              스마트폰으로 QR코드를 스캔하여 몇 초 만에 기부를 완료하세요. 언제 어디서나 쉽고 빠르게 나눔에 동참할 수 있습니다.
            </p>
            <img src="/images/qr-code-donation.jpg" alt="QR코드 기부" className="w-full rounded-lg shadow-md" />
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">통합 기부 관리</h2>
            <p className="text-lg text-gray-600 mb-4">
              모든 기부 내역을 한눈에 확인하고, 기부 영수증도 간편하게 발급받으세요. GiveSheep이 당신의 모든 기부 활동을 체계적으로 관리해 드립니다.
            </p>
            <img src="/images/donation-management.jpg" alt="통합 기부 관리" className="w-full rounded-lg shadow-md" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">기부 카테고리</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <CategoryCard
              title="종교 단체"
              description="다양한 종교 단체들의 봉사 활동을 지원하세요."
              image="/images/religious-orgs.jpg"
            />
            <CategoryCard
              title="공익 단체"
              description="사회적 가치를 창출하는 단체들에게 힘을 보태세요."
              image="/images/public-orgs.jpg"
            />
            <CategoryCard
              title="재난 기부"
              description="긴급한 도움이 필요한 재난 지역을 지원하세요."
              image="/images/disaster-relief.jpg"
            />
          </div>
        </section>

        <section className="bg-blue-100 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">정기적으로 기부하기</h2>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              한 번의 QR코드 인증으로 지속적인 나눔을 실천하세요. 원하는 단체를 선택하고 정기 기부 금액을 설정하면, 매월 자동으로 기부가 이루어집니다. 작은 정성이 모여 큰 변화를 만듭니다.
            </p>
            <Button as={Link} to="/regular-donation" className="px-8 py-3">
              정기 기부 시작하기
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Start;