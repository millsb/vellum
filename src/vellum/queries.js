export const standardInkFields = graphql`
fragment standardInkFields on ComponentMetadata {
     id
     displayName
     docblock
     children {
       id
     }
     props {
       id
       type {
        name
      }
     docblock
     required
     name
    }
  }
`;


