import React, { useState } from 'react'
import { useMutation } from "@apollo/client"
import { navigate } from 'gatsby'
import gql from "graphql-tag"
import Header from "../component/Header/Header"
import Lolly from "../component/Lolly/Lolly"
import * as styles from "./createNew.module.css"

const CREATE_LOLLY = gql`
  mutation createLolly($recipient: String!, $message: String!, $sender: String!, $colorTop : String!, $colorMiddle: String!, $colorBottom: String!) {
    createLolly(recipient: $recipient, message: $message, sender: $sender, colorTop : $colorTop, colorMiddle: $colorMiddle, colorBottom: $colorBottom) {
        lollyPath
    }
  }
`;

const CreateNew = () => {

    const [colorTop, setColorTop] = useState("#d52358")
    const [colorMiddle, setColorMiddle] = useState("#e95946")
    const [colorBottom, setColorBottom] = useState("#deaa43")

    const [recipient, setRecipient] = useState("")
    const [message, setMessage] = useState("")
    const [sender, setSender] = useState("")

    const [createLolly] = useMutation(CREATE_LOLLY)

    const handleSubmit = async (e) => {
        e.preventDefault();
        // createLolly({
        //     variables: {
        //         recipient,
        //         message,
        //         sender,
        //         colorTop,
        //         colorMiddle,
        //         colorBottom
        //     }
        // })
        // .then(result => setTimeout(() => navigate(`/lolly/${result.data.createLolly.lollyPath}`), 10000))
        // .catch(err => console.log('error', err))

        const result = await createLolly({
            variables: {
                recipient,
                message,
                sender,
                colorTop,
                colorMiddle,
                colorBottom
            },
        });

      console.log(result);

      setTimeout(async () => {
        await navigate(`/lolly/${result.data.createLolly.lollyPath}`);
      }, 3000);

        setRecipient("")
        setMessage("")
        setSender("")
    }

    return (
        <div className={styles.CreateNew}>
            <Header />
            <div className={styles.container}>
                <div className={styles.lolly}>
                    <Lolly fillLollyTop={colorTop} fillLollyMiddle={colorMiddle} fillLollyBottom={colorBottom} />
                    <div className={styles.CollorPicker}>
                        <label htmlFor="Color-Top">
                            <input
                                value={colorTop}
                                type="color"
                                id="Color-Top"
                                onChange={(e) => setColorTop(e.target.value)}
                            />
                        </label>
                        <label htmlFor="Color-Middle">
                            <input
                                value={colorMiddle}
                                type="color"
                                id="Color-Middle"
                                onChange={(e) => setColorMiddle(e.target.value)}
                            />
                        </label>
                        <label htmlFor="Color-Bottom">
                            <input
                                value={colorBottom}
                                type="color"
                                id="Color-Bottom"
                                onChange={(e) => setColorBottom(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                <div>
                    <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
                        <div className={styles.form}>
                            <div>
                                <span>Recipient</span>
                                <input
                                    value={recipient}
                                    autoComplete="off"
                                    type="text"
                                    name="recipient"
                                    placeholder="A Lolly for..."
                                    onChange={(e) => setRecipient(e.target.value)}
                                />
                            </div>
                            <div>
                                <span>Message</span>
                                <textarea
                                    value={message}
                                    rows="10"
                                    cols="30"
                                    name="message"
                                    placeholder="Say something nice..."
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <div>
                                <span>Sender</span>
                                <input
                                    value={sender}
                                    autoComplete="off"
                                    type="text"
                                    name="sender"
                                    placeholder="from your friend..."
                                    onChange={(e) => setSender(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={styles.btn}>
                            <button type="submit">Freze this lolly to get a link</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateNew