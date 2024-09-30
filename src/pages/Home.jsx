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


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-white">
        <div className="text-2xl font-bold text-blue-600">GiveSheep</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">회사 소개</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">공지사항</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">기부 영수증</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">자주 묻는 질문</a>
        </nav>
        <Button variant="outline">로그인</Button>
      </header>

      <main className="flex-grow">
        <section className="py-20 px-4 bg-blue-50 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">QR코드로 Give도 쉽게! 기부영수증도 쉽게!</h1>
          <p className="text-xl mb-8">종교 단체, 공익 단체에 기부하고 세액 공제까지 한번에 받으세요</p>
          <div className="flex justify-center space-x-4">
            <Button className="px-8">시작하기</Button>
            <Button variant="outline" className="px-8">더 알아보기</Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Smartphone className="w-10 h-10 text-blue-600" />}
              title="Mobile Banking"
              description="Manage your finances anytime, anywhere with our user-friendly mobile app."
            />
            <FeatureCard
              icon={<CreditCard className="w-10 h-10 text-blue-600" />}
              title="Easy Payments"
              description="Make secure and quick payments with just a few taps."
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10 text-blue-600" />}
              title="Secure Transactions"
              description="Your security is our top priority. Enjoy peace of mind with our advanced security measures."
            />
            <FeatureCard
              icon={<CheckCircle className="w-10 h-10 text-blue-600" />}
              title="Verified Services"
              description="All our services are verified and comply with the highest industry standards."
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
  )
}

