import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* 헤더 로고 - 별도 레이어 */}
      <div className="fixed top-6 left-6 sm:left-10 z-50">
        <Image src="/images/logo.png" alt="대한방사선사협회 로고" width={32} height={32} />
      </div>

      {/* 헤더 - Minimal */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-6 sm:px-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8" /> {/* 로고 자리 */}
            <span className="hidden sm:inline text-sm font-medium tracking-[0.3em] text-white uppercase">대한방사선사협회 경상남도회 회장 후보</span>
            <span className="sm:hidden text-xs font-medium tracking-[0.2em] text-white uppercase">경상남도회 회장 후보</span>
          </div>
          <nav className="hidden gap-10 text-sm font-medium tracking-wider text-white sm:flex">
            <a href="#profile" className="hover:opacity-60 transition-opacity">소개</a>
            <a href="#philosophy" className="hover:opacity-60 transition-opacity">철학</a>
            <a href="#manifesto" className="hover:opacity-60 transition-opacity">공약</a>
            <a href="#vote" className="hover:opacity-60 transition-opacity">투표</a>
          </nav>
          <MobileMenu />
        </div>
      </header>

      {/* 히어로 - Typography Hero */}
      <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        {/* Background Number */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[60vw] font-black leading-none">1</span>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full px-6 sm:px-10">
          <div className="max-w-7xl mx-auto">
            {/* Candidate Number */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-sm font-medium tracking-[0.5em] text-gray-400 uppercase">
                Candidate No.
              </span>
              <span className="text-8xl sm:text-9xl font-black leading-none text-white">
                01
              </span>
            </div>

            {/* Name */}
            <h1 className="text-[15vw] sm:text-[12vw] font-black leading-[0.85] tracking-tight">
              임성은
            </h1>

            {/* Subtitle */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12">
              <p className="text-xl sm:text-2xl font-light leading-relaxed max-w-md text-gray-300">
                사람이 중심이 되고,<br />
                미래를 준비하는<br />
                지속 가능한 도회
              </p>
              <div className="flex items-center gap-4">
                <div className="w-20 h-px bg-gray-600"></div>
                <span className="text-sm tracking-[0.3em] text-gray-500 uppercase">
                  대한방사선사협회
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-xs tracking-[0.3em] text-gray-500 uppercase">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-gray-500 to-transparent"></div>
        </div>
      </section>

      {/* 프로필 섹션 - Typography Grid */}
      <section id="profile" className="py-32 sm:py-40 px-6 sm:px-10 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-16 sm:mb-20">
            <span className="text-[25vw] sm:text-[15vw] font-black leading-none text-gray-300">
              01
            </span>
            <div className="sm:pb-4">
              <span className="text-sm font-medium tracking-[0.3em] text-gray-400 uppercase block mb-2">
                Profile
              </span>
              <h2 className="text-3xl sm:text-5xl font-black">후보자 소개</h2>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Photo Side */}
            <div className="relative">
              <div className="relative aspect-[3/4] w-full max-w-md">
                <Image
                  src="/images/candidate.png"
                  alt="임성은 후보"
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
              {/* Decorative Text */}
              <div className="absolute -bottom-10 -right-4 sm:right-10">
                <span className="text-8xl sm:text-9xl font-black text-gray-300 select-none">
                  &ldquo;
                </span>
              </div>
            </div>

            {/* Info Side */}
            <div className="flex flex-col justify-center space-y-12">
              <div>
                <span className="text-sm font-medium tracking-[0.3em] text-gray-400 uppercase">
                  Education
                </span>
                <p className="mt-3 text-3xl sm:text-4xl font-bold">마산대학교 졸업</p>
              </div>

              <div>
                <span className="text-sm font-medium tracking-[0.3em] text-gray-400 uppercase">
                  Current Position
                </span>
                <p className="mt-3 text-3xl sm:text-4xl font-bold">총무이사</p>
                <p className="mt-2 text-lg text-gray-500">2023 — 현재</p>
              </div>

              <div>
                <span className="text-sm font-medium tracking-[0.3em] text-gray-400 uppercase">
                  Experience
                </span>
                <div className="mt-4 space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-black text-gray-300">01</span>
                    <div>
                      <p className="text-xl font-semibold">총무이사</p>
                      <p className="text-gray-500">2023 — 현재</p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-black text-gray-300">02</span>
                    <div>
                      <p className="text-xl font-semibold">섭외이사</p>
                      <p className="text-gray-500">2017 — 2022</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-sm font-medium tracking-[0.3em] text-gray-400 uppercase">
                  Awards
                </span>
                <div className="mt-4 space-y-3">
                  <p className="text-lg">
                    <span className="font-bold">2021</span>
                    <span className="mx-3 text-gray-300">—</span>
                    경상남도지사 표창장
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">2001</span>
                    <span className="mx-3 text-gray-300">—</span>
                    협회장 표창장
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 운영 철학 - Bold Statement */}
      <section id="philosophy" className="py-32 sm:py-40 px-6 sm:px-10 bg-gray-950 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-16 sm:mb-20">
            <span className="text-[25vw] sm:text-[15vw] font-black leading-none text-gray-700">
              02
            </span>
            <div className="sm:pb-4">
              <span className="text-sm font-medium tracking-[0.3em] text-gray-500 uppercase block mb-2">
                Philosophy
              </span>
              <h2 className="text-3xl sm:text-5xl font-black">운영 철학</h2>
            </div>
          </div>

          {/* Main Statement */}
          <div className="mb-24">
            <p className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight">
              <span className="text-gray-500">사람</span>이 중심이 되고,<br />
              <span className="text-gray-500">미래</span>를 준비하는<br />
              <span className="text-white">지속 가능한 도회</span>
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid md:grid-cols-3 gap-px bg-gray-800">
            {/* Principle 1 */}
            <div className="bg-gray-950 p-8 sm:p-12 group hover:bg-gray-900 transition-colors">
              <span className="text-7xl sm:text-8xl font-black text-gray-800 group-hover:text-gray-700 transition-colors">
                01
              </span>
              <h3 className="mt-6 text-2xl sm:text-3xl font-bold">함께하는<br />리더십</h3>
              <ul className="mt-6 space-y-3 text-gray-400">
                <li>책임은 회장이, 결정은 함께</li>
                <li>임원회의 중심 의사결정</li>
                <li>분회·지회 의견 사전 수렴</li>
                <li>현장 목소리 반영 구조화</li>
              </ul>
            </div>

            {/* Principle 2 */}
            <div className="bg-gray-950 p-8 sm:p-12 group hover:bg-gray-900 transition-colors">
              <span className="text-7xl sm:text-8xl font-black text-gray-800 group-hover:text-gray-700 transition-colors">
                02
              </span>
              <h3 className="mt-6 text-2xl sm:text-3xl font-bold">실행 중심<br />운영</h3>
              <ul className="mt-6 space-y-3 text-gray-400">
                <li>계획이 아닌 실행</li>
                <li>보여주기식 사업 지양</li>
                <li>작더라도 결과가 남는 운영</li>
                <li>실효성 있는 사업만 추진</li>
              </ul>
            </div>

            {/* Principle 3 */}
            <div className="bg-gray-950 p-8 sm:p-12 group hover:bg-gray-900 transition-colors">
              <span className="text-7xl sm:text-8xl font-black text-gray-800 group-hover:text-gray-700 transition-colors">
                03
              </span>
              <h3 className="mt-6 text-2xl sm:text-3xl font-bold">현재와 미래를<br />함께</h3>
              <ul className="mt-6 space-y-3 text-gray-400">
                <li>실무 역량 강화</li>
                <li>AI·미래 기술 대비</li>
                <li>변화에 준비된 방사선사</li>
                <li>교육 중심 도회 운영</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 공약 섹션 - Typography List */}
      <section id="manifesto" className="py-32 sm:py-40 px-6 sm:px-10 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-16 sm:mb-20">
            <span className="text-[25vw] sm:text-[15vw] font-black leading-none text-gray-300">
              03
            </span>
            <div className="sm:pb-4">
              <span className="text-sm font-medium tracking-[0.3em] text-gray-400 uppercase block mb-2">
                Manifesto
              </span>
              <h2 className="text-3xl sm:text-5xl font-black">5대 핵심 공약</h2>
            </div>
          </div>

          {/* Pledges List */}
          <div className="space-y-0 divide-y divide-gray-200">
            {/* Pledge 1 */}
            <div className="py-12 sm:py-16 group">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12">
                <span className="text-6xl sm:text-8xl font-black text-gray-300 group-hover:text-black transition-colors duration-300 leading-none">
                  01
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                    임원이 즐겁게 일할 수 있는 도회
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
                    <p>→ 임원 활동비·회의비 합리화</p>
                    <p>→ 역할·책임 명확화</p>
                    <p>→ 협력 중심 임원 구조</p>
                    <p>→ 보람과 존중의 임원 문화</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pledge 2 */}
            <div className="py-12 sm:py-16 group">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12">
                <span className="text-6xl sm:text-8xl font-black text-gray-300 group-hover:text-black transition-colors duration-300 leading-none">
                  02
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                    재정의 투명성·안정성 강화
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
                    <p>→ 관·항·목 체계 유지·고도화</p>
                    <p>→ 운영비·교육비 분리 제도화</p>
                    <p>→ 전용 사용 원칙 명문화</p>
                    <p>→ 외부 후원·협력 확대</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pledge 3 - Featured */}
            <div className="py-12 sm:py-16 bg-white text-gray-900">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12">
                <span className="text-6xl sm:text-8xl font-black text-gray-300 leading-none">
                  03
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase">
                      Core Pledge
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                    AI·미래 기술을 선도하는 도회
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
                    <p>→ 의료 AI 트렌드 공유</p>
                    <p>→ AI 기본→실무 단계별 교육</p>
                    <p>→ 디지털 헬스케어 대응</p>
                    <p>→ 미래 기술 체험형 교육</p>
                  </div>
                  <p className="mt-8 text-xl sm:text-2xl font-bold text-gray-900">
                    &ldquo;AI 시대에도 반드시 필요한 방사선사&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Pledge 4 */}
            <div className="py-12 sm:py-16 group">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12">
                <span className="text-6xl sm:text-8xl font-black text-gray-300 group-hover:text-black transition-colors duration-300 leading-none">
                  04
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                    회원이 체감하는 교육·학술 활성화
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
                    <p>→ 대면·온라인 균형 운영</p>
                    <p>→ 현장 중심 보수교육</p>
                    <p>→ MRI·초음파 지회 활성화</p>
                    <p>→ CT 지회 재정비·단계적 재구성</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pledge 5 */}
            <div className="py-12 sm:py-16 group">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12">
                <span className="text-6xl sm:text-8xl font-black text-gray-300 group-hover:text-black transition-colors duration-300 leading-none">
                  05
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                    소통하는 도회, 참여하는 회원 문화
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
                    <p>→ 분회장·도의원 정례 소통</p>
                    <p>→ 공지 중심→의견 중심</p>
                    <p>→ 홈페이지 소통 강화</p>
                    <p>→ 참여하는 회원 문화</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 인사말 - Large Quote */}
      <section className="py-32 sm:py-40 px-6 sm:px-10 bg-gray-100 scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[30vw] font-black text-gray-300 leading-none block -mb-[10vw] select-none">
            &ldquo;
          </span>
          <div className="relative z-10">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800">
              저는 완벽한 사람이 아닙니다.<br className="hidden sm:block" />
              그러나 <strong className="font-black">배우는 자세</strong>,{" "}
              <strong className="font-black">경청하는 태도</strong>,<br className="hidden sm:block" />
              <strong className="font-black">변화를 두려워하지 않는 실행력</strong>만큼은<br className="hidden sm:block" />
              누구보다 자신 있게 약속드릴 수 있습니다.
            </p>
          </div>
          <div className="mt-16">
            <p className="text-lg text-gray-500">
              회장 입후보자
            </p>
            <p className="text-3xl sm:text-4xl font-black mt-2">
              임성은
            </p>
          </div>
        </div>
      </section>

      {/* 투표 안내 - Minimal CTA */}
      <section id="vote" className="py-32 sm:py-40 px-6 sm:px-10 bg-black text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-16 sm:mb-20">
            <span className="text-[25vw] sm:text-[15vw] font-black leading-none text-gray-700">
              04
            </span>
            <div className="sm:pb-4">
              <span className="text-sm font-medium tracking-[0.3em] text-gray-500 uppercase block mb-2">
                Vote
              </span>
              <h2 className="text-3xl sm:text-5xl font-black">투표 안내</h2>
            </div>
          </div>

          {/* Vote Info Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div>
              <span className="text-sm font-medium tracking-[0.3em] text-gray-500 uppercase">
                Date
              </span>
              <p className="mt-3 text-2xl font-bold">추후 공지</p>
            </div>
            <div>
              <span className="text-sm font-medium tracking-[0.3em] text-gray-500 uppercase">
                Method
              </span>
              <p className="mt-3 text-2xl font-bold">추후 공지</p>
            </div>
            <div>
              <span className="text-sm font-medium tracking-[0.3em] text-gray-500 uppercase">
                Eligible
              </span>
              <p className="mt-3 text-2xl font-bold">경상남도회 회원</p>
            </div>
            <div>
              <span className="text-sm font-medium tracking-[0.3em] text-gray-500 uppercase">
                Contact
              </span>
              <p className="mt-3 text-2xl font-bold">선거관리위원회</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center border-t border-gray-800 pt-20">
            <p className="text-5xl sm:text-7xl lg:text-8xl font-black leading-tight">
              소중한 한 표,<br />
              <span className="text-gray-600">부탁드립니다.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 푸터 - Minimal */}
      <footer className="py-12 px-6 sm:px-10 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.jpeg"
              alt="경상남도회 로고"
              width={40}
              height={40}
              className="rounded-full grayscale"
            />
            <div>
              <p className="text-sm font-bold">대한방사선사협회 경상남도회</p>
              <p className="text-xs text-gray-500">The Gyung-Nam Radiological Technologists Association</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            © 2026 임성은 후보 선거캠프
          </p>
        </div>
      </footer>
    </main>
  );
}
