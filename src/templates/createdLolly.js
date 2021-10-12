import React from 'react'
import { useQuery } from "@apollo/client"
import gql from "graphql-tag";

const GET_LOLLIES_BY_PATH = gql`
    query MyQuery($lollyPath: String!){
        lollyByPath(lollyPath: $lollyPath){
            recipient
            message
            sender
            colorTop
            colorMiddle
            colorBottom
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
    loading && console.log(loading)

    return (
        <div>
            Created Lolly
            {data && JSON.stringify(data, null, 4)}
        </div>
    )
}

export default CreatedLolly
