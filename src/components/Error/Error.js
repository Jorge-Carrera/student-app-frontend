import './Error.css';


export default function Error({error}) {
  return (
    <div className='Erorr'>
      <h1>There was an Error: {error} </h1>
      <br/>
      <h2>Please refresh the page</h2>
    </div>
  )
}
