import { gql } from '@apollo/client';

export const QUERIES = gql`
  query user {
    user {
      _id
      name
      email
      username
      age
    }
  }
  query discussion{
      discussion{
        _id
        Title
        content
        date
        user
        comments
      }
  }
  query comment{
    comment{
      _id
      comment_text
      date
      user
     
    }
}
query schedule{
    schedule{
      _id
      content
      dates
      type
      user
    }
}
query workout{
    workout{
      _id
      title
      time
      detail
      user
    }
}
`;
