import { createGlobalStyle } from "styled-components";

export type ThemeType = typeof darkTheme;

const darkTheme = {
  /* Primary color */
  primaryColor0: '#35295D',
  primaryColor1: '#695E8D',
  primaryColor2: '#4B3E73',
  primaryColor3: '#231748',
  primaryColor4: '#11082F',
  
  /* Secondary color (1) */
  secondaryColor0: '#47245A',	
  secondaryColor1: '#785889',
  secondaryColor2: '#5C3970',
  secondaryColor3: '#341346',
  secondaryColor4: '#1F052D',

  /* Tertiary color (2) */
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
}

const lightTheme: ThemeType = { 
  primaryColor0: '#E998E9',	/* Main Primary color */
  primaryColor1: '#FFF8FF',
  primaryColor2: '#F8C9F8',
  primaryColor3: '#D36CD3',
  primaryColor4: '#B445B4',

  secondaryColor0: '#F8A2BC',	/* Main Secondary color (1) */
  secondaryColor1: '#FFF8FA',
  secondaryColor2: '#FDCDDB',
  secondaryColor3: '#F27B9F',
  secondaryColor4: '#E85984',

  tertiaryColor0: '#C0A0EB',	/* Main Secondary color (2) */
  tertiaryColor1: '#FBF9FF',
  tertiaryColor2: '#E0CDF8',
  tertiaryColor3: '#A076D7',
  tertiaryColor4: '#7E51BA',

  fontColor: '',
  fontColorHover: '',
  fontColorActive: '',
  backgroundColor: '',
  backgroundColorLight: '',
  backgroundColorDark: '',

  successColor: '#68E88F',
  failureColor: '#F24A4A'
}

darkTheme.fontColor = lightTheme.primaryColor0;
darkTheme.fontColorHover = lightTheme.primaryColor1;
darkTheme.fontColorActive = lightTheme.primaryColor2;

darkTheme.backgroundColor = darkTheme.tertiaryColor2;
darkTheme.backgroundColorLight = darkTheme.tertiaryColor0;
darkTheme.backgroundColorDark = darkTheme.tertiaryColor4;

lightTheme.fontColor = darkTheme.tertiaryColor0;
lightTheme.fontColorHover = darkTheme.primaryColor1;
lightTheme.fontColorActive = darkTheme.primaryColor2;

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
  }
`;

export {
  lightTheme,
  darkTheme,
  GlobalStyles
};
