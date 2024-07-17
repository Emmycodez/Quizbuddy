import { PacmanLoader } from "react-spinners";

const override ={
  display:'block',
  margin: "100px auto"
}

const Spinner = ({ isloading }) => {
  return (
    <PacmanLoader
      color='#2563EB'
      loading={isloading}
      cssOverride={override}
      size={150}
    />
  )
}

export default Spinner