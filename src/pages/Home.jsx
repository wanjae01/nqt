import { Link } from "react-router-dom";
import Button from "../components/Button"
import FeatureCard from "../components/FeatureCard"

const CreditCard = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const Smartphone = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const Shield = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const CheckCircle = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
    className={className}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
  </svg>
);
export function Home() {
  return (
    <div className="home">
      <header className="flex items-center justify-between p-4 bg-white fixed top-0 w-screen">
        <div className="text-2xl font-bold text-blue-600">GiveSheep</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">회사 소개</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">공지사항</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">기부 영수증</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">자주 묻는 질문</a>
        </nav>
        <Button as={Link} to="/login">로그인</Button>
      </header>

      <main className="flex-grow">
        <section className="py-20 px-4 bg-blue-50 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">QR코드로 Give도 쉽게! 기부영수증도 쉽게!</h1>
          <p className="text-xl mb-8">종교 단체, 공익 단체에 기부하고 세액 공제까지 한번에 받으세요</p>
          <div className="flex justify-center space-x-4">
            <Button as={Link} to="/login" className="px-8">시작하기</Button>
            <Button variant="outline" className="px-8">더 알아보기</Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Smartphone className="w-10 h-10 text-blue-600" />}
              title="QR코드로 기부하기"
              description="QR코드로 빠르고 편리하게 기부해요"
            />
            <FeatureCard
              icon={<CreditCard className="w-10 h-10 text-blue-600" />}
              title="기부 영수증 발급"
              description="기부 영수증을 쉽게 발급받고 세액공제를 받아요"
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10 text-blue-600" />}
              title="안전한 기부"
              description="Toss와 카카오톡을 통해 안전하게 기부할 수 있어요"
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10 text-blue-600" />}
              title="검증된 단체"
              description="기부 단체의 신원을 검증하고 기부 영수증을 발급해요"
            />
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">모든 기부 활동을 한눈에 조회하고 한 곳에서 관리하세요. 쉽고 편리한 기부 서비스, GiveSheep과 함께라면 당신의 나눔이 새로워질 거예요.</h2>
            {/* <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Input type="email" placeholder="Enter your email" className="max-w-xs" />
              <Button>Get Started <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div> */}
          </div>
        </section>

        <section className="additional-services">
          <h2 className="services-title">더 쉽고 안전한 기부 경험</h2>
          <div className="services-container">
            <div className="service-item">
              <img src="./images/sheep_give.webp" alt="QR코드로 기부하기" width={600}/>
              <h3>QR코드로 기부하기</h3>
              <p>스마트폰으로 QR코드를 스캔하여 몇 초 만에 기부를 완료하세요. 언제 어디서나 간편하게 나눔에 동참할 수 있습니다.</p>
            </div>
            <div className="service-item">
              <img src="./images/sheep_tax.webp" alt="기부영수증 발급" width={600}/>
              <h3>기부영수증 발급</h3>
              <p>모든 기부에 대해 자동으로 기부영수증을 발급해 드립니다. 연말정산 시 손쉽게 제출하고 세제 혜택을 받으세요.</p>
            </div>
            <div className="service-item">
              <img src="./images/sheep_secure.webp" alt="안전한 기부" width={600}/>
              <h3>안전한 기부</h3>
              <p>최신 보안 기술을 적용하여 개인정보와 결제 정보를 안전하게 보호합니다. 믿고 기부할 수 있는 환경을 제공합니다.</p>
            </div>
            <div className="service-item">
              <img src="./images/sheep_certified.webp" alt="검증된 단체" width={600}/>
              <h3>검증된 단체</h3>
              <p>엄격한 심사를 거친 신뢰할 수 있는 기부 단체들만 선별하여 소개합니다. 투명하고 효과적인 기부 활동을 보장합니다.</p>
            </div>
          </div>
        </section>

        <section className="card-section py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3>제품</h3>
              <p>기부를 더 쉽고 편리하게 만드는 혁신적인 제품들을 제공합니다. QR코드 기부, 자동 영수증 발급 등 다양한 기능으로 기부 경험을 개선합니다.</p>
            </div>
            <div className="card">
              <h3>시스템</h3>
              <p>안전하고 투명한 기부 시스템을 구축했습니다. 블록체인 기술을 활용한 기부 내역 관리, 실시간 모금 현황 공개 등으로 신뢰성을 높입니다.</p>
            </div>
            <div className="card">
              <h3>철학</h3>
              <p>모든 이의 작은 나눔이 세상을 변화시킬 수 있다고 믿습니다. 우리는 기부의 문턱을 낮추고, 나눔의 가치를 널리 전파하는 것을 목표로 합니다.</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Banking</a></li>
              <li><a href="#" className="hover:text-blue-400">Investments</a></li>
              <li><a href="#" className="hover:text-blue-400">Insurance</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 Givesheep Clone. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;