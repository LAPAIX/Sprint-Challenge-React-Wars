import React from "react";

import { Toast, ToastBody, ToastHeader } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { UncontrolledAlert } from "reactstrap";
import { Badge } from "reactstrap";

export default function CardComponent(props) {
  return (
    <div>
      <h1>
        <Badge color="warning" pill>
          {props.name}
        </Badge>
      </h1>
      <Badge color="danger">
        <h4>Hair Color</h4> {props.hair}
      </Badge>
      <Badge color="dark">
        <h4>Height</h4>
        {props.height}
      </Badge>
      <Badge color="light">
        <h6>Mass</h6>
        {props.mass}
      </Badge>
    </div>
  );
}
