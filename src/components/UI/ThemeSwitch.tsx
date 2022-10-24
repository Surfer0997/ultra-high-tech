import styles from './ThemeSwitch.module.css';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
// --color-blue:#03b7cf;
// --color-yellow: #f5d001;
export enum Theme {
  first = 'first',
  second = 'second',
  white = 'white',
}

const changeThemeHandler = (theme: string) => {
  switch (theme) {
    case Theme.first:
      document.documentElement.style.setProperty('--color-blue', '#03b7cf');
      document.documentElement.style.setProperty('--color-yellow', '#f5d001');
      break;
    case Theme.second:
      document.documentElement.style.setProperty('--color-blue', '#ffbb00');
      document.documentElement.style.setProperty('--color-yellow', '#cf0303');
      break;
    case Theme.white:
      document.documentElement.style.setProperty('--color-blue', '#fff');
      document.documentElement.style.setProperty('--color-yellow', '#fff');
      break;
    default:
      changeThemeHandler(Theme.first);
  }
};

export const ThemeSwitch = () => {
  const [cookies, setCookie] = useCookies();
  useEffect(() => {
    if (cookies.theme) {
      changeThemeHandler(cookies.theme);
    }
  }, []);

  const themeChangeHandler = () => {
    let newTheme:string = '';
    if (cookies.theme) {
      cookies.theme === Theme.first
        ? newTheme = Theme.second
        : cookies.theme === Theme.second
        ? newTheme = Theme.white
        : newTheme = Theme.first;
        
    } else {
        newTheme = Theme.second;
    }
    changeThemeHandler(newTheme);
    setCookie('theme', newTheme, { maxAge: 36000 });
  };

  return (
    <button className={styles['🔆']} onClick={themeChangeHandler}>
      🎨
    </button>
  );
};
