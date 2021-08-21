import React from "react";
import { Button } from "@ui-kitten/components";

export const BlockButton = (props) => (
    <Button {...props} style={{ width: "100%", marginVertical: 5, borderRadius: 16 }}>{props.children}</Button>
);
