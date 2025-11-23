import { useState, useEffect } from 'react';

export interface UserProfile {
  name: string;
  powerLevel: number;
  avatar: 'goku' | 'vegeta' | 'piccolo' | 'bulma';
  badges: string[];
  theme: 'capsule' | 'saiyan' | 'villain';
}

const DEFAULT_USER: UserProfile = {
  name: 'Guest Fighter',
  powerLevel: 5,
  avatar: 'goku',
  badges: ['New Recruit'],
  theme: 'capsule',
};

export function useUserStore() {
  const [user, setUser] = useState<UserProfile>(DEFAULT_USER);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('zUser');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('zUser', JSON.stringify(user));
      
      // Apply theme to document
      const root = window.document.documentElement;
      root.classList.remove('dark', 'theme-villain', 'theme-saiyan');
      
      if (user.theme === 'villain') {
        root.classList.add('dark');
      }
      // We could add more specific theme classes here
    }
  }, [user, isLoaded]);

  const updatePowerLevel = (amount: number) => {
    setUser(prev => ({ ...prev, powerLevel: Math.max(0, prev.powerLevel + amount) }));
  };

  const unlockBadge = (badge: string) => {
    if (!user.badges.includes(badge)) {
      setUser(prev => ({ ...prev, badges: [...prev.badges, badge] }));
      // Play sound effect here ideally
    }
  };

  const setAvatar = (avatar: UserProfile['avatar']) => {
    setUser(prev => ({ ...prev, avatar }));
  };

  return { user, updatePowerLevel, unlockBadge, setAvatar, setUser, isLoaded };
}
