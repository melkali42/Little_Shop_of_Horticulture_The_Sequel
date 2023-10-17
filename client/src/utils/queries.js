import { gql} from 'graphql-tag';

export const QUERY_PRODUCTS = gql`
query allProducts {
    products {
        _id
        name
        purchaser
    }
}
`;