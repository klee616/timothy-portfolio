import Head from 'next/head'
interface Props {
    title: String,
    description:String, 
    keywords?: String[]
}

const App: React.FC<Props> = ({title, description, keywords}) => {
    return (
        
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:title" content={title.toString()} key="title" />
            <meta property="og:description" content={description.toString()} key="description" />
            <meta property="og:keywords" content={keywords?.join(", ")} key="keywords" />
        </Head>
    );
};

export default App;
