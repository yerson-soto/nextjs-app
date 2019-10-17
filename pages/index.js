import MasterPage from '../components/Master';
import Price from '../components/Price';
import News from '../components/News';
import Events from '../components/Events';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
        <MasterPage>
            <div className="row">
                <div className="col-md-12">
                    <h2>Precio del Bitcoin</h2>
                    <Price 
                        price={props.bitcoinPrice}
                    />
                </div>
                <div className="col-md-8">
                    <h2>Noticias sobre el bitcoin</h2>
                    <News 
                        news={props.news}
                    />
                </div>
                <div className="col-md-4">
                    <h2>Próximos Eventos del Bitcoin</h2>
                    <Events 
                        events={props.events}
                    />
                </div>
            </div>
        </MasterPage>
);

Index.getInitialProps = async () => {
    const response = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');

    const newsResponse = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-30&sortBy=publishedAt&apiKey=8a581c3115a54b029cca531958a55cfa');

    const eventsResponse = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&location.address=dominican+republic&token=HQUJNHKDSPDQET4UAWOB');

    const data = await response.json();
    const newsData = await newsResponse.json();
    const eventsData = await eventsResponse.json();
    return {
        bitcoinPrice: data.data.quotes.USD,
        news: newsData.articles,
        events: eventsData.top_match_events
    }
}

export default Index;