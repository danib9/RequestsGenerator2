import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Home, Book, Users, Gamepad2, Newspaper, Filter, Wrench, Gift, Image } from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(['tools']);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    {
      id: 'content',
      label: 'CONTENT',
      isSection: true,
      children: [
        { id: 'dictionary', label: 'Dictionary', icon: Book },
        { id: 'entities', label: 'Entities', icon: Users },
        { id: 'games', label: 'Games', icon: Gamepad2 },
        { id: 'news', label: 'News', icon: Newspaper },
        { id: 'filters', label: 'Filters', icon: Filter },
        {
          id: 'tools',
          label: 'Tools',
          icon: Wrench,
          children: [
            { id: 'general-tools', label: 'General Tools' },
            { id: 'update-in-service', label: 'Update In Service' },
            { id: 'requests-generator', label: 'Requests Generator', isActive: true },
            { id: 'competitions-ordering', label: 'Competitions Ordering' },
            { id: 'video-restrictions', label: 'Video Restrictions' },
            { id: 'local-ranking', label: 'Local Ranking' },
            { id: 'featured-match', label: 'Featured Match' },
            { id: 'sport-types-ordering', label: 'Sport Types Ordering' },
            { id: 'team-of-the-week', label: 'Team Of The Week' }
          ]
        }
      ]
    },
    { id: 'promotions', label: 'Promotions', icon: Gift },
    { id: 'images', label: 'Images', icon: Image }
  ];

  const renderNavigationItem = (item: any, level = 0) => {
    const IconComponent = item.icon;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    const paddingLeft = level === 0 ? 'pl-4' : level === 1 ? 'pl-6' : 'pl-10';

    if (item.isSection && level === 0) {
      return (
        <div key={item.id} className="mt-6">
          <div className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {item.label}
          </div>
          {item.children?.map((child: any) => renderNavigationItem(child, 1))}
        </div>
      );
    }

    return (
      <div key={item.id}>
        <button
          onClick={() => hasChildren && toggleExpanded(item.id)}
          className={`w-full flex items-center justify-between ${paddingLeft} py-2 text-sm text-left transition-colors duration-150 ${
            item.isActive 
              ? 'bg-red-100 text-red-600 border-r-2 border-red-600' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center">
            {IconComponent && <IconComponent className="w-4 h-4 mr-3 flex-shrink-0" />}
            <span className="truncate">{item.label}</span>
          </div>
          {hasChildren && (
            <div className="mr-2">
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </div>
          )}
        </button>
        {hasChildren && isExpanded && (
          <div className="bg-gray-50">
            {item.children.map((child: any) => renderNavigationItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 fixed md:relative z-50 h-full ${
      // Mobile: slide in/out from left
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } md:translate-x-0 ${
      // Desktop: collapse/expand
      isCollapsed ? 'md:w-16' : 'md:w-64'
    } w-64`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            MENU
          </div>
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="md:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto">
        {navigationItems.map(item => renderNavigationItem(item))}
      </nav>
    </div>
  );
};

export default Sidebar;