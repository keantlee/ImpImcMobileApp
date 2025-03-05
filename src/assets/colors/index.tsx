// single-color-theme.js
import { light } from '@eva-design/eva';

export default {
    primary: '#007bff',
    warning: '#ffc107',
    danger: '#dc3545',
    secondary: '#6c757d',
    success: '#28a745',
    info: '#17a2b8',
    light: '#f8f9fa', 
    dark: '#343a40',
    white: '#fff',
    daColor: '#009246',

    // bags background colors
    bag1Bg: '#ea7a72',
    bag2Bg: '#c2c5d1',
    bag3Bg: '#82a7c9',
    bag4Bg: '#d49d8f',
    bag5Bg: '#ccd9c6',
    bag6Bg: '#767676',
    bag7Bg: '#d1c8c3',
    bag8Bg: '#dca47f',
    bag9Bg: '#eb849c',
    bag10Bg: '#979dc1',
    bag11Bg: '#c7d3c0',
}

export const customTheme = {
    // Background color for the root layout
    'background-basic-color-1': '#f0f0f0', // Main background color
    'background-basic-color-2': '#e0e0e0', // Slightly darker background (optional)
    'background-basic-color-3': '#d0d0d0', // Even darker background (optional)
    'background-basic-color-4': '#c0c0c0', // Darkest background shade (optional)
  
    // Text color to ensure contrast with the background
    'text-basic-color': '#000000', // Black text for light background
    'text-alternate-color': '#ffffff', // White text for dark backgrounds
  
    // Accent colors (optional)
    'color-primary-100': '#000000',
    'color-primary-200': '#000000',
    'color-primary-300': '#000000',
    'color-primary-400': '#000000',
    'color-primary-500': '#009246',
    "color-primary-hover": "$color-primary-400",
    "color-primary-focus": "#009246",
    "color-primary-active": "$color-primary-600",
};
  