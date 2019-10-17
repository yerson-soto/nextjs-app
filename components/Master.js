import Head from 'next/head';
import Nav from './Nav';

const MasterPage = (props) => (
    <div>   
        <Head>  
            <title>Bitcoin App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"/>
        </Head>

        <Nav />
        <div className="container mt-4">
            {props.children}
        </div>
    </div>
)

export default MasterPage;