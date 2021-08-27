import React from "react";
import { Text } from "@ui-kitten/components";

export const Subtitle = ({ content }) => (
  <Text
    style={{ fontWeight: "500", marginBottom: 20 }}
    status="primary"
    category="h3"
  >
    {content}
  </Text>
);
