import React from "react";
import Base from "../Components/Base";
import Addpost from "../Components/Addpost";
import { Container } from "reactstrap";
const Userdashboard = () => {
  return (
    <Base>
      <Container className="my-3">
        <Addpost />
      </Container>
    </Base>
  );
};

export default Userdashboard;
