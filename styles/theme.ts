import { createGlobalStyle } from 'styled-components';

export type ThemeType = typeof darkTheme;

const darkTheme = {
  /* Primary color */
  primaryColor0: '#35295D',
  primaryColor1: '#695E8D',
  primaryColor2: '#4B3E73',
  primaryColor3: '#231748',
  primaryColor4: '#11082F',
  
  /* Secondary color */
  secondaryColor0: '#47245A',	
  secondaryColor1: '#785889',
  secondaryColor2: '#5C3970',
  secondaryColor3: '#341346',
  secondaryColor4: '#1F052D',

  /* Tertiary color  */
  tertiaryColor0: '#27375A',
  tertiaryColor1: '#5B698A',
  tertiaryColor2: '#3C4C70',
  tertiaryColor3: '#162546',
  tertiaryColor4: '#08132D',

  fontColor: '',
  fontColorHover: '',
  fontColorActive: '',
  backgroundColor: '',
  backgroundColorLight: '',
  backgroundColorDark: '',

  successColor: '#68E88F',
  failureColor: '#F24A4A'
};

const lightTheme: ThemeType = { 
  /* Primary color */
  primaryColor0: '#C9B8F6',
  primaryColor1: '#FFFFFF',
  primaryColor2: '#ECE5FE',
  primaryColor3: '#A78EE9',
  primaryColor4: '#8567D3',
  
  /* Secondary color */
  secondaryColor0: '#E2B3F6',
  secondaryColor1: '#FFFFFF',
  secondaryColor2: '#F6E3FE',
  secondaryColor3: '#CA87E7',
  secondaryColor4: '#AD5ED0',

  /* Tertiary color  */
  tertiaryColor0: '#B8C8F6',
  tertiaryColor1: '#FFFFFF',
  tertiaryColor2: '#E5EBFE',
  tertiaryColor3: '#8EA5E8',
  tertiaryColor4: '#6781D1',

  fontColor: '',
  fontColorHover: '',
  fontColorActive: '',
  backgroundColor: '',
  backgroundColorLight: '',
  backgroundColorDark: '',

  successColor: '#8CFFAF',
  failureColor: '#F24A4A'
};

darkTheme.fontColor = lightTheme.primaryColor0;
darkTheme.fontColorHover = lightTheme.primaryColor1;
darkTheme.fontColorActive = lightTheme.primaryColor2;

darkTheme.backgroundColor = darkTheme.tertiaryColor2;
darkTheme.backgroundColorLight = darkTheme.tertiaryColor0;
darkTheme.backgroundColorDark = darkTheme.tertiaryColor4;

lightTheme.fontColor = darkTheme.primaryColor0;
lightTheme.fontColorHover = darkTheme.primaryColor2;
lightTheme.fontColorActive = darkTheme.primaryColor4;

lightTheme.backgroundColor = lightTheme.tertiaryColor2;
lightTheme.backgroundColorLight = lightTheme.tertiaryColor0;
lightTheme.backgroundColorDark = lightTheme.tertiaryColor4;

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
    transition: background-color 0.2s ease-out, color 0.2s ease-out;
    padding: 0;
    margin: 0;
    font-family: Cantarell, sans-serif;
    line-height: 1.6;
    font-size: 18px;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;

export {
  lightTheme,
  darkTheme,
  GlobalStyles
};
