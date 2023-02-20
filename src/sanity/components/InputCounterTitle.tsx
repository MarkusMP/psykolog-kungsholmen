import { useCallback } from "react";
import { Stack, Text, TextInput, Card } from "@sanity/ui";
import { set, unset } from "sanity";
import { ErrorOutlineIcon } from "@sanity/icons";
import { useEffect, useState } from "react";

export const CustomFieldTitle = (props: any) => {
  const [error, setError] = useState(false);
  const {
    description,
    title,
    onChange,
    validation,
    validationError,
    ...restProps
  } = props;
  useEffect(() => {
    if (!restProps.inputProps.value) {
      setError(true);
    } else if (restProps.inputProps.value.length < 15) {
      setError(true);
    } else if (restProps.inputProps.value.length > 70) {
      setError(true);
    } else setError(false);
  }, [restProps.inputProps.value]);

  return (
    <Card>
      <Stack space={3} paddingBottom={4}>
        <Text
          size={1}
          style={{ marginBottom: "6px", marginTop: "8px", display: "flex" }}
          weight={"medium"}
        >
          {title}
          {error && (
            <ErrorOutlineIcon style={{ marginLeft: "2px", color: "#c33529" }} />
          )}
        </Text>

        {description && (
          <Text size={1} style={{ color: "#6E7683" }}>
            {description}
          </Text>
        )}
      </Stack>
      {props.renderDefault(restProps)}
    </Card>
  );
};

export const InputCounterTitle = (props: any) => {
  const { elementProps, onChange, value = "" } = props;

  const handleChange = useCallback(
    (event: any) => {
      const nextValue = event.currentTarget.value;
      onChange(nextValue ? set(nextValue) : unset());
    },
    [onChange]
  );

  return (
    <Stack space={3}>
      <Text>
        <span
          style={{
            marginBottom: "2px",
            backgroundColor: "#FCFFFF",
            maxWidth: "max-content",
            fontSize: "13px",
            paddingRight: "3px",
            paddingLeft: "3px",
            borderRadius: "3px",
            border: "1px solid #D2E3FE",
            fontWeight: "500",
            display: "inline-block",
            color: "#41547A",
          }}
        >
          {value.length} / 70
        </span>
      </Text>
      <TextInput
        {...elementProps}
        onChange={handleChange}
        value={value}
        customValidity={value.length >= 15 && value.length <= 70 ? false : true}
      />
    </Stack>
  );
};
