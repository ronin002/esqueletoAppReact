import '../styles/globals.css'

import MainContainer from '../components/home/MainContainer';

function MyApp({ Component, pageProps}){

    return( <MainContainer>
                <Component {...pageProps} />
           </MainContainer> 
    )
}

export default MyApp;