import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string; 
    primary: string; 
    secondary: string; 
    textColor: string;
    completeColor: string;
    deleteColor: string;
    inputColor: string;
    weatherColor: string;
  }
}
