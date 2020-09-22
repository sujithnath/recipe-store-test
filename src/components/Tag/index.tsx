import React from "react";
import { Label } from "./style";

interface Props {
  tag: string
}

const Tag = ({ tag }: Props) => <Label>{tag}</Label>;

export default Tag;
