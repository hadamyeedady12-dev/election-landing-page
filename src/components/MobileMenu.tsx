'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* 햄버거 버튼 */}
      <button
        onClick={toggleMenu}
        className="flex flex-col items-center justify-center gap-1.5 sm:hidden"
        aria-label="메뉴 열기"
      >
        <span
          className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
            isOpen ? 'translate-y-2 rotate-45' : ''
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
            isOpen ? '-translate-y-2 -rotate-45' : ''
          }`}
        ></span>
      </button>

      {/* 오버레이 */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 sm:hidden ${
          isOpen ? 'z-40 opacity-50' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
      ></div>

      {/* 슬라이드 메뉴 */}
      <nav
        className={`fixed right-0 top-0 z-50 h-full w-64 bg-white shadow-2xl transition-transform duration-300 sm:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* 메뉴 헤더 */}
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <span className="text-lg font-bold text-gray-900">메뉴</span>
            <button
              onClick={closeMenu}
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
              aria-label="메뉴 닫기"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* 메뉴 항목 */}
          <div className="flex flex-1 flex-col gap-1 p-4">
            <a
              href="#profile"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              후보 소개
            </a>
            <a
              href="#philosophy"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              운영 철학
            </a>
            <a
              href="#manifesto"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              공약
            </a>
            <a
              href="#vote"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              투표 안내
            </a>
          </div>

          {/* 메뉴 푸터 */}
          <div className="border-t border-gray-200 p-4">
            <p className="text-center text-xs text-gray-500">
              기호 1번, 임성은
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
