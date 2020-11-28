import '../styles/globals.css';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';


// function MyApp({ Component, pageProps }) {
//     return (
//         <Component {...pageProps} />
//     )
// }

// const theme = {
//     marginRight: 5,
//     padding: 5,
// };




function MyApp(props) {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title>My Web Space</title>
                <link rel='icon' href='/favicon.ico' />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            {/* <ThemeProvider theme={theme}> */}
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            {/* <CssBaseline /> */}
            <Component {...pageProps} />
            {/* </ThemeProvider> */}
        </>
    );
}


export default MyApp;
