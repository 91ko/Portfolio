'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faReact, faNodeJs, faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faComments, faFileAlt, faPencilAlt, faEdit, faCheckCircle, faTools } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      title: '카페 웹사이트',
      description: '반응형 카페 웹사이트 제작',
      image: '/project1.jpg',
      demo: 'https://project1.com',
    },
    {
      title: '병원 반응형 사이트',
      description: '의료기관 웹사이트 제작',
      image: '/project2.jpg',
      demo: 'https://project2.com',
    },
  ];

  const processSteps = [
    {
      icon: faComments,
      title: '문의 접수',
      description: '고객님의 요구사항을 상세히 파악하고 견적을 산출합니다.',
    },
    {
      icon: faFileAlt,
      title: '자료 전달',
      description: '웹사이트 제작에 필요한 이미지, 텍스트 등의 자료를 전달받습니다.',
    },
    {
      icon: faPencilAlt,
      title: '초안 제작',
      description: '전달받은 자료를 바탕으로 웹사이트의 초안을 제작합니다.',
    },
    {
      icon: faEdit,
      title: '수정',
      description: '고객님의 피드백을 반영하여 디자인과 기능을 수정합니다.',
    },
    {
      icon: faCheckCircle,
      title: '완료/배포',
      description: '최종 검토 후 웹사이트를 배포하고 운영을 시작합니다.',
    },
    {
      icon: faTools,
      title: '유지보수',
      description: '선택사항으로, 웹사이트의 안정적인 운영을 지원합니다.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white relative overflow-hidden">
        {/* Background Tech Stack Logos */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 animate-float-slow">
            <FontAwesomeIcon icon={faReact} className="text-8xl" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float-slow-delay">
            <FontAwesomeIcon icon={faNodeJs} className="text-8xl" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float-slow-delay-2">
            <FontAwesomeIcon icon={faHtml5} className="text-8xl" />
          </div>
          <div className="absolute bottom-1/3 right-1/3 animate-float-slow">
            <FontAwesomeIcon icon={faCss3Alt} className="text-8xl" />
          </div>
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="mb-8" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              knockout_coder
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              소상공인을 위한 웹사이트 제작 전문
            </p>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex justify-center gap-8 mb-12" data-aos="fade-up" data-aos-delay="200">
            <div className="tech-icon">
              <FontAwesomeIcon icon={faReact} className="text-4xl" />
              <span className="text-sm mt-2">React</span>
            </div>
            <div className="tech-icon">
              <Image src="/nextjs.svg" alt="Next.js" width={40} height={40} />
              <span className="text-sm mt-2">Next.js</span>
            </div>
            <div className="tech-icon">
              <FontAwesomeIcon icon={faHtml5} className="text-4xl" />
              <span className="text-sm mt-2">HTML5</span>
            </div>
            <div className="tech-icon">
              <FontAwesomeIcon icon={faCss3Alt} className="text-4xl" />
              <span className="text-sm mt-2">CSS3</span>
            </div>
            <div className="tech-icon">
              <FontAwesomeIcon icon={faJs} className="text-4xl" />
              <span className="text-sm mt-2">JavaScript</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <button className="btn-primary px-12">📞 문의하기</button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
            작업 사례
          </h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="card" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-center">
                      <a href={project.demo} className="btn-primary w-full text-center" target="_blank" rel="noopener noreferrer">
                        사이트 보기
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
            🔧 작업 프로세스
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="card p-6 hover:shadow-xl transition-all duration-300" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={step.icon} className="text-2xl text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary">Step {index + 1}</span>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
            문의하기
          </h2>
          <div className="max-w-md mx-auto" data-aos="fade-up" data-aos-delay="100">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="이름"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="이메일"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
              />
              <textarea
                placeholder="문의 내용"
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
              ></textarea>
              <button type="submit" className="btn-primary w-full">
                보내기
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="container-custom text-center">
          <div className="flex justify-center gap-8 mb-6">
            <a href="mailto:your@email.com" className="hover:text-primary transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
          </div>
          <p>© 2024 Knockout Coder. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating Kakao Button */}
      <a 
        href="https://open.kakao.com/your-id" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn bg-[#FEE500] hover:bg-[#FDD835]"
      >
        <Image 
          src="/kakao.svg" 
          alt="카카오톡 문의" 
          width={24} 
          height={24} 
          className="w-6 h-6"
        />
      </a>
    </main>
  );
};

export default Home; 