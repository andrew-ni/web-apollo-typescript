import { ApolloClient, gql, InMemoryCache, useQuery } from '@apollo/client';

export const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

interface ExchangeRateData {
  rates: Rate[];
}

interface Rate {
  currency: string;
  rate: string;
}

export const currencyClient = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

currencyClient
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `,
  })
  .then(result => console.log(result));

export const ExchangeRates = () => {
  const { loading, error, data } = useQuery<ExchangeRateData>(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      {data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ))}
    </div>
  );
};
