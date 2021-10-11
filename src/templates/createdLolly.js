import React from 'react'
import { useQuery } from "@apollo/client"
import gql from "graphql-tag";

const GET_LOLLIES_BY_PATH = graphql`
    query MyQuery($lollyPath: String!){
        getLollies {
            lollyByPath(lollyPath: $lollyPath){
                recipient
                message
                sender
                colorTop
                colorMiddle
                colorBottom
            }
        }
    }
`

const CreatedLolly = ({ pageContext: { lollyPath } }) => {

    const { data, loading, error } = useQuery(GET_LOLLIES_BY_PATH, {
        variables: {
            lollyPath
        }
    })

    data && console.log(data)
    error && console.log(error)

    return (
        <div>
            Created Lolly
            {data && JSON.stringify(data, null, 4)}
        </div>
    )
}

export default CreatedLolly
