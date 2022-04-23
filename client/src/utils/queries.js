import { gql } from '@apollo/client';

const QUERY_USER = gql`
  query user {
    user {
      _id
      name
      email
      username
      age
    }
  }
  
`;

const QUERY_SCHEDULE = gql`
query discussion{
    discussion{
      _id
      content
      dates
      type
      user
      
    }
}
  `;

const QUERY_DISCUSSION = gql`
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
  `;

const QUERY_COMMENT = gql`
  query comment{
    comment{
      _id
      comment_text
      date
      user
     
    }
}
  `;

const QUERY_WORKOUT = gql`
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

module.exports= QUERY_USER,QUERY_SCHEDULE,QUERY_DISCUSSION,QUERY_COMMENT,QUERY_WORKOUT;
