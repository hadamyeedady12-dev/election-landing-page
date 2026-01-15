'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Sticky Header with scroll effect */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-lg py-3' : 'border-b border-neutral-200 py-4'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="경상남도회 로고"
              width={48}
              height={48}
              className="rounded-full ring-2 ring-amber-500/20"
            />
            <div>
              <p className="text-sm font-bold text-neutral-900">대한방사선사협회</p>
              <p className="text-xs text-neutral-600">경상남도회</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 text-sm font-semibold md:flex">
            <a href="#profile" className="transition-colors hover:text-amber-700">후보 소개</a>
            <a href="#philosophy" className="transition-colors hover:text-amber-700">운영 철학</a>
            <a href="#manifesto" className="transition-colors hover:text-amber-700">공약</a>
            <a href="#vote" className="transition-colors hover:text-amber-700">투표 안내</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-neutral-200 bg-white">
            <div className="flex flex-col px-4 py-3 space-y-3 text-sm font-semibold">
              <a href="#profile" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-amber-700">후보 소개</a>
              <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-amber-700">운영 철학</a>
              <a href="#manifesto" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-amber-700">공약</a>
              <a href="#vote" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-amber-700">투표 안내</a>
            </div>
          </nav>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      {/* Hero Section - Fullscreen with dramatic background */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Image with dramatic styling */}
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[480px] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-amber-500/50 transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/candidate.jpeg"
                  alt="임성은 후보"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 bg-amber-500 text-white rounded-full w-24 h-24 flex items-center justify-center shadow-xl transform rotate-12 animate-pulse">
                <div className="text-center">
                  <p className="text-2xl font-black">기호</p>
                  <p className="text-4xl font-black leading-none">1</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 text-white space-y-6">
              <div className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full">
                <p className="text-sm font-bold text-amber-400">
                  대한방사선사협회 경상남도회 회장 선거
                </p>
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                임성은
              </h1>

              <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-amber-600"></div>

              <p className="text-2xl md:text-3xl font-bold leading-snug text-amber-50">
                사람이 중심이 되고,<br />
                미래를 준비하는<br />
                <span className="text-amber-400">지속 가능한 도회</span>
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#manifesto"
                  className="group relative px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="relative z-10">공약 보기</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a
                  href="#vote"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-bold rounded-lg transition-all duration-300"
                >
                  투표 안내
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 space-y-24">

        {/* Profile Section - Asymmetric layout */}
        <section id="profile" className="scroll-mt-24">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-black mb-4 relative inline-block">
                후보자 소개
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-amber-500"></div>
              </h2>
              <p className="text-neutral-600 mt-8">
                경상남도회와 함께 성장해온<br />
                현장 경험과 실행력을 갖춘 후보
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-2xl border-2 border-neutral-200 bg-white p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-600">학력</p>
                    <p className="text-xl font-bold text-neutral-900">마산대학교 졸업</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-600">현 직책</p>
                    <p className="text-xl font-bold text-neutral-900">
                      경상남도회 총무이사
                    </p>
                    <p className="text-sm text-neutral-600">(2023~현재)</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-4">주요 경력</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 group">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500 group-hover:scale-150 transition-transform"></span>
                      <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors">
                        대한방사선사협회 경상남도회 총무이사 (2023~현재)
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500 group-hover:scale-150 transition-transform"></span>
                      <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors">
                        대한방사선사협회 경상남도회 섭외이사 (2017~2022)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-4">수상</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 group">
                      <span className="text-2xl group-hover:scale-125 transition-transform">🏆</span>
                      <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors">
                        2021년 경상남도지사 표창장
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group">
                      <span className="text-2xl group-hover:scale-125 transition-transform">🏆</span>
                      <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors">
                        2001년 대한방사선사협회장 표창장
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section - Bold colored background */}
        <section id="philosophy" className="scroll-mt-24 -mx-4 px-4 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-900 text-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-6 relative inline-block w-full">
              운영 철학
            </h2>

            <div className="text-center mb-16">
              <p className="text-3xl md:text-4xl font-black text-amber-400 leading-tight">
                사람 중심 · 미래 준비 · 지속 가능한 도회
              </p>
              <div className="mt-6 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-12 text-amber-100">3대 운영 원칙</h3>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  num: 1,
                  title: "함께하는 리더십",
                  items: [
                    "책임은 회장이, 결정은 함께",
                    "임원회의 중심 의사결정",
                    "분회·지회 의견 사전 수렴",
                    "현장 목소리 반영 구조화"
                  ]
                },
                {
                  num: 2,
                  title: "실행 중심 운영",
                  items: [
                    "계획이 아닌 실행",
                    "보여주기식 사업 지양",
                    "작더라도 결과가 남는 운영",
                    "실효성 있는 사업만 추진"
                  ]
                },
                {
                  num: 3,
                  title: "현재와 미래를 함께",
                  items: [
                    "실무 역량 강화",
                    "AI·미래 기술 대비",
                    "변화에 준비된 방사선사",
                    "교육 중심 도회 운영"
                  ]
                }
              ].map((principle, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 hover:bg-white/20 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-3xl font-black text-white shadow-xl group-hover:scale-110 transition-transform">
                    {principle.num}
                  </div>
                  <p className="text-xl font-black mb-6 text-amber-400">{principle.title}</p>
                  <ul className="space-y-3">
                    {principle.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-200">
                        <span className="text-amber-500 font-bold">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manifesto Section - Staggered cards */}
        <section id="manifesto" className="scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 relative inline-block">
              5대 핵심 공약
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-amber-500"></div>
            </h2>
            <p className="text-neutral-600 mt-8">
              실행 가능하고 측정 가능한 구체적인 약속
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "임원이 즐겁게 일할 수 있는 도회",
                items: [
                  "임원 활동비·회의비 합리화",
                  "역할·책임 명확화",
                  "협력 중심 임원 구조",
                  "보람과 존중의 임원 문화"
                ]
              },
              {
                num: 2,
                title: "재정의 투명성·안정성 강화",
                items: [
                  "관·항·목 체계 유지·고도화",
                  "운영비·교육비 분리 제도화",
                  "전용 사용 원칙 명문화",
                  "외부 후원·협력 확대"
                ]
              },
              {
                num: 3,
                title: "AI·미래 기술을 선도하는 도회",
                items: [
                  "의료 AI 트렌드 공유",
                  "AI 기본→실무 단계별 교육",
                  "디지털 헬스케어 대응",
                  "미래 기술 체험형 교육"
                ],
                highlight: "AI 시대에도 반드시 필요한 방사선사"
              },
              {
                num: 4,
                title: "회원이 체감하는 교육·학술 활성화",
                items: [
                  "대면·온라인 균형 운영",
                  "현장 중심 보수교육",
                  "MRI·초음파 지회 활성화",
                  "CT 지회 재정비·단계적 재구성"
                ]
              },
              {
                num: 5,
                title: "소통하는 도회, 참여하는 회원 문화",
                items: [
                  "분회장·도의원 정례 소통",
                  "공지 중심→의견 중심",
                  "홈페이지 소통 강화",
                  "참여하는 회원 문화"
                ]
              }
            ].map((manifesto, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border-2 border-neutral-200 bg-white p-8 shadow-lg hover:shadow-2xl hover:border-amber-500 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-xl font-black text-white shadow-lg group-hover:scale-110 transition-transform">
                    {manifesto.num}
                  </span>
                  <h3 className="text-2xl font-black text-neutral-900 leading-tight pt-2">{manifesto.title}</h3>
                </div>

                <ul className="grid gap-4 sm:grid-cols-2 ml-16">
                  {manifesto.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-amber-500 text-xl font-bold">✓</span>
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>

                {manifesto.highlight && (
                  <div className="mt-6 ml-16 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/30 px-6 py-4">
                    <p className="text-center text-lg font-bold text-amber-900">
                      &ldquo;{manifesto.highlight}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Message Section - Personal touch */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-50 p-12 shadow-xl">
          <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-600/10 rounded-full translate-x-20 translate-y-20"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-8 text-neutral-900">
              회원 여러분께 드리는 약속
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
              <p>
                저는 완벽한 사람이 아닙니다. 그러나 <strong className="text-amber-700">배우는 자세</strong>, <strong className="text-amber-700">경청하는 태도</strong>,
                <strong className="text-amber-700">변화를 두려워하지 않는 실행력</strong>만큼은 누구보다 자신 있게 약속드릴 수 있습니다.
              </p>
              <p>
                회장의 자리가 명예가 아닌 <strong className="text-amber-700">책임의 자리</strong>임을 잊지 않겠습니다.
                회원 위에 서는 회장이 아니라, <strong className="text-amber-700">회원 곁에서 함께 미래를 준비하는 회장</strong>이 되겠습니다.
              </p>
              <p>
                경상남도회는 과거를 지키는 조직을 넘어 <strong className="text-amber-700">미래를 준비하는 도회</strong>로 나아가야 합니다.
                저에게 기회를 주신다면, AI 시대에도 흔들리지 않는 방사선사의 전문성과 가치를
                경상남도회가 앞장서서 만들어 가겠습니다.
              </p>
            </div>

            <div className="mt-10 text-right">
              <p className="text-2xl font-black text-neutral-900" style={{ fontFamily: 'cursive' }}>
                회장 입후보자 임성은 올림
              </p>
            </div>
          </div>
        </section>

        {/* Vote Section - Urgency */}
        <section id="vote" className="scroll-mt-24">
          <div className="rounded-3xl border-4 border-amber-500 bg-gradient-to-br from-amber-50 to-amber-100/50 p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black mb-4 text-neutral-900">투표 안내</h2>
              <p className="text-lg text-neutral-700">
                대한방사선사협회 경상남도회 회장 선거에 참여해 주시는<br />
                모든 회원 여러분께 감사드립니다.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-4 mb-10">
              {[
                { label: "투표 일시", value: "추후 공지 예정" },
                { label: "투표 방식", value: "추후 공지 예정" },
                { label: "투표 대상", value: "경상남도회 회원" },
                { label: "문의", value: "선거관리위원회" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm">
                  <span className="font-black text-amber-700 min-w-[100px]">{item.label}</span>
                  <span className="text-neutral-800 font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-3xl font-black text-amber-900 mb-6">
                회원 여러분의 소중한 한 표를 부탁드립니다!
              </p>
              <div className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white rounded-full shadow-lg">
                <span className="text-5xl font-black">기호 1번</span>
                <span className="text-3xl font-bold ml-2">임성은</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="mt-24 border-t-4 border-neutral-200 bg-neutral-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.jpeg"
                alt="경상남도회 로고"
                width={56}
                height={56}
                className="rounded-full ring-4 ring-amber-500/30"
              />
              <div>
                <p className="text-lg font-bold">대한방사선사협회 경상남도회</p>
                <p className="text-sm text-neutral-400">The Gyung-Nam Radiological Technologists Association</p>
              </div>
            </div>
            <div className="text-sm text-neutral-400">
              <p>© 2026 임성은 후보 선거캠프.</p>
              <p className="mt-1">모든 권리 보유.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <a
        href="#vote"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full shadow-2xl hover:shadow-amber-500/50 hover:scale-110 transition-all duration-300 animate-pulse"
      >
        <span>투표하기</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </main>
  );
}
