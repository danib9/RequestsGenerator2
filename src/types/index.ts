export interface NavigationItem {
  id: string;
  label: string;
  icon?: string;
  children?: NavigationItem[];
  isActive?: boolean;
}

export interface SelectOption {
  value: string;
  label: string;
}