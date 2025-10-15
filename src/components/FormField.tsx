import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FormFieldProps {
  label: string;
  value: string;
  placeholder: string;
  required?: boolean;
  type?: 'select' | 'text' | 'date';
  options?: { value: string; label: string }[];
  disabledOptions?: string[];
  onChange: (value: string) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  placeholder,
  required = false,
  type = 'select',
  options = [],
  disabledOptions = [],
  onChange
}) => {
  if (type === 'text' || type === 'date') {
    return (
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          type={type === 'date' ? 'date' : 'text'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm md:text-base"
        />
      </div>
    );
  }

  // Group options by category if they have a category property
  const groupedOptions = options.reduce((acc, option) => {
    const category = (option as any).category || 'default';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(option);
    return acc;
  }, {} as Record<string, typeof options>);

  const hasCategories = Object.keys(groupedOptions).length > 1 || !groupedOptions.default;

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white transition-colors text-sm md:text-base"
        >
          <option value="">{placeholder}</option>
          {hasCategories ? (
            Object.entries(groupedOptions).map(([category, categoryOptions]) => (
              <optgroup key={category} label={category}>
                {categoryOptions.map((option) => (
                  <option 
                    key={option.value} 
                    value={option.value}
                    disabled={disabledOptions?.includes(option.value)}
                    style={disabledOptions?.includes(option.value) ? { color: '#9CA3AF' } : {}}
                  >
                    {option.label}
                  </option>
                ))}
              </optgroup>
            ))
          ) : (
            options.map((option) => (
              <option 
                key={option.value} 
                value={option.value}
                disabled={disabledOptions?.includes(option.value)}
                style={disabledOptions?.includes(option.value) ? { color: '#9CA3AF' } : {}}
              >
                {option.label}
              </option>
            ))
          )}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
};

export default FormField;