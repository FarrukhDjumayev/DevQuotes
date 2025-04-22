'use client';

import React from 'react';
import { Button, Dropdown } from 'antd';
import { useLanguage } from './LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const handleMenuClick = (e) => {
    setLanguage(e.key);
  };

  const items = [
    { key: 'en', label: '🇺🇸 English' },
    { key: 'uz', label: '🇺🇿 Oʻzbekcha' },
    { key: 'ru', label: '🇷🇺 Русский' },
  ];

  return (
    <Dropdown
      menu={{ items, onClick: handleMenuClick }}
      placement="bottomRight"
      arrow
    >
      <Button
        type="text"
        className="!bg-transparent !text-gray-800 dark:!text-gray-200 hover:!bg-gray-200/30 dark:hover:!bg-white/10 transition-all"
      >
         {language.toUpperCase()}
      </Button>
    </Dropdown>
  );
};

export default LanguageToggle;
