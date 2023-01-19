import './Error.css';


export default function Error({ error }) {
  return (
    <div className='Error'>
      There was an Error: {error}
      <br/>
      Please refresh the page or contact support.
    </div>
  )
}
