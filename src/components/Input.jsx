import React from "react";
import { Input as OldInput } from "@ui-kitten/components";

export const Input = (props) => (
  <OldInput {...props} style={{ marginVertical: 5, borderRadius: 16 }} />
);
