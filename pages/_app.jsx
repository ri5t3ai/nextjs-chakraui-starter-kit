import App from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

function Application({ Component, pageProps }) {
  return (
  <ChakraProvider>
    <Box w='100%' minH="100vh" p={5} >
    <Component {...pageProps} />
    </Box>
  </ChakraProvider>
)}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
Application.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default Application