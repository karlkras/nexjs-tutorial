'use client';

const Error = (theError) => {
  const {error} = theError;
  return (
    <div>{`there was an error... ${error.message}`}</div>
  )
}
export default Error
