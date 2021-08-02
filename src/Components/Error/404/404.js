import { NODE_ENV } from "../../../config.json"

export default ({props}) =>{
    return (
      <>
        <h1>404 | kya finding!</h1>
        <h4>{NODE_ENV=="DEV"?JSON.stringify(props):""}</h4>
      </>
    )
  }